import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { prayers } from '@/db/schema';
import { eq, like, and, or, desc, asc } from 'drizzle-orm';

const VALID_CATEGORIES = ['Healing', 'Strength', 'Guidance', 'Family', 'Provision', 'Ministry', 'Breakthrough'];

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');
    const category = searchParams.get('category');
    const isAnswered = searchParams.get('is_answered');
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');

    // Single prayer by ID
    if (id) {
      if (isNaN(parseInt(id))) {
        return NextResponse.json({ 
          error: 'Valid ID is required',
          code: 'INVALID_ID' 
        }, { status: 400 });
      }

      const prayer = await db.select()
        .from(prayers)
        .where(eq(prayers.id, parseInt(id)))
        .limit(1);

      if (prayer.length === 0) {
        return NextResponse.json({ 
          error: 'Prayer not found',
          code: 'PRAYER_NOT_FOUND' 
        }, { status: 404 });
      }

      return NextResponse.json(prayer[0], { status: 200 });
    }

    // List prayers with filters
    let query = db.select().from(prayers);
    const conditions = [];

    // Category filter
    if (category) {
      if (!VALID_CATEGORIES.includes(category)) {
        return NextResponse.json({ 
          error: `Invalid category. Must be one of: ${VALID_CATEGORIES.join(', ')}`,
          code: 'INVALID_CATEGORY' 
        }, { status: 400 });
      }
      conditions.push(eq(prayers.category, category));
    }

    // Answered status filter
    if (isAnswered !== null && isAnswered !== undefined) {
      const answered = isAnswered.toLowerCase() === 'true';
      conditions.push(eq(prayers.isAnswered, answered));
    }

    // Apply filters
    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }

    // Order by newest first and apply pagination
    const results = await query
      .orderBy(desc(prayers.createdAt))
      .limit(limit)
      .offset(offset);

    return NextResponse.json(results, { status: 200 });

  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + (error as Error).message 
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, prayerRequest, category, isAnonymous } = body;

    // Validate required fields
    if (!prayerRequest || prayerRequest.trim() === '') {
      return NextResponse.json({ 
        error: 'Prayer request is required and cannot be empty',
        code: 'MISSING_PRAYER_REQUEST' 
      }, { status: 400 });
    }

    if (!category || category.trim() === '') {
      return NextResponse.json({ 
        error: 'Category is required',
        code: 'MISSING_CATEGORY' 
      }, { status: 400 });
    }

    // Validate category
    if (!VALID_CATEGORIES.includes(category)) {
      return NextResponse.json({ 
        error: `Invalid category. Must be one of: ${VALID_CATEGORIES.join(', ')}`,
        code: 'INVALID_CATEGORY' 
      }, { status: 400 });
    }

    // Prepare insert data
    const now = new Date().toISOString();
    const insertData = {
      prayerRequest: prayerRequest.trim(),
      category: category.trim(),
      isAnonymous: isAnonymous === true,
      name: (isAnonymous === true) ? null : (name ? name.trim() : null),
      prayerCount: 0,
      isAnswered: false,
      createdAt: now,
      updatedAt: now
    };

    const newPrayer = await db.insert(prayers)
      .values(insertData)
      .returning();

    return NextResponse.json(newPrayer[0], { status: 201 });

  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + (error as Error).message 
    }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    // Validate ID parameter
    if (!id) {
      return NextResponse.json({ 
        error: 'ID parameter is required',
        code: 'MISSING_ID' 
      }, { status: 400 });
    }

    if (isNaN(parseInt(id))) {
      return NextResponse.json({ 
        error: 'Valid ID is required',
        code: 'INVALID_ID' 
      }, { status: 400 });
    }

    // Check if prayer exists
    const existing = await db.select()
      .from(prayers)
      .where(eq(prayers.id, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json({ 
        error: 'Prayer not found',
        code: 'PRAYER_NOT_FOUND' 
      }, { status: 404 });
    }

    const body = await request.json();
    const updates: Record<string, any> = {};

    // Validate and prepare updates
    if ('prayerRequest' in body) {
      if (!body.prayerRequest || body.prayerRequest.trim() === '') {
        return NextResponse.json({ 
          error: 'Prayer request cannot be empty',
          code: 'INVALID_PRAYER_REQUEST' 
        }, { status: 400 });
      }
      updates.prayerRequest = body.prayerRequest.trim();
    }

    if ('category' in body) {
      if (!VALID_CATEGORIES.includes(body.category)) {
        return NextResponse.json({ 
          error: `Invalid category. Must be one of: ${VALID_CATEGORIES.join(', ')}`,
          code: 'INVALID_CATEGORY' 
        }, { status: 400 });
      }
      updates.category = body.category.trim();
    }

    if ('name' in body) {
      updates.name = body.name ? body.name.trim() : null;
    }

    if ('isAnonymous' in body) {
      updates.isAnonymous = body.isAnonymous === true;
      if (updates.isAnonymous) {
        updates.name = null;
      }
    }

    if ('prayerCount' in body) {
      const count = parseInt(body.prayerCount);
      if (isNaN(count) || count < 0) {
        return NextResponse.json({ 
          error: 'Prayer count must be a valid non-negative integer',
          code: 'INVALID_PRAYER_COUNT' 
        }, { status: 400 });
      }
      updates.prayerCount = count;
    }

    if ('isAnswered' in body) {
      updates.isAnswered = body.isAnswered === true;
    }

    // Always update timestamp
    updates.updatedAt = new Date().toISOString();

    const updated = await db.update(prayers)
      .set(updates)
      .where(eq(prayers.id, parseInt(id)))
      .returning();

    return NextResponse.json(updated[0], { status: 200 });

  } catch (error) {
    console.error('PUT error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + (error as Error).message 
    }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    // Validate ID parameter
    if (!id) {
      return NextResponse.json({ 
        error: 'ID parameter is required',
        code: 'MISSING_ID' 
      }, { status: 400 });
    }

    if (isNaN(parseInt(id))) {
      return NextResponse.json({ 
        error: 'Valid ID is required',
        code: 'INVALID_ID' 
      }, { status: 400 });
    }

    // Check if prayer exists
    const existing = await db.select()
      .from(prayers)
      .where(eq(prayers.id, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json({ 
        error: 'Prayer not found',
        code: 'PRAYER_NOT_FOUND' 
      }, { status: 404 });
    }

    const deleted = await db.delete(prayers)
      .where(eq(prayers.id, parseInt(id)))
      .returning();

    return NextResponse.json({ 
      message: 'Prayer deleted successfully',
      id: parseInt(id),
      prayer: deleted[0]
    }, { status: 200 });

  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + (error as Error).message 
    }, { status: 500 });
  }
}