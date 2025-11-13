import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { prayers, volunteerApplications } from '@/db/schema';
import { sql, eq } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    // Query prayers table for counts and sums
    const prayersStats = await db
      .select({
        totalPrayers: sql<number>`count(*)`,
        totalPrayCount: sql<number>`coalesce(sum(${prayers.prayCount}), 0)`,
      })
      .from(prayers)
      .limit(1);

    // Query volunteer applications for counts
    const volunteerStats = await db
      .select({
        totalApplications: sql<number>`count(*)`,
        approvedApplications: sql<number>`count(case when ${volunteerApplications.status} = 'approved' then 1 end)`,
      })
      .from(volunteerApplications)
      .limit(1);

    // Extract values with defaults
    const prayersCount = Number(prayersStats[0]?.totalPrayers ?? 0);
    const communityPrayers = Number(prayersStats[0]?.totalPrayCount ?? 0);
    const livesTransformed = Number(volunteerStats[0]?.totalApplications ?? 0);
    const approvedCount = Number(volunteerStats[0]?.approvedApplications ?? 0);

    // Apply business logic for defaults
    const communityTouchPoints = communityPrayers > 0 ? communityPrayers : 25000;
    const ldiApplicants = approvedCount > 0 ? approvedCount : 150;

    // Build response object
    const stats = {
      livesTransformed,
      ldiApplicants,
      communityTouchPoints,
      prayersCount,
      communityPrayers,
    };

    return NextResponse.json(stats, { status: 200 });
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json(
      {
        error: 'Internal server error: ' + (error instanceof Error ? error.message : 'Unknown error'),
      },
      { status: 500 }
    );
  }
}