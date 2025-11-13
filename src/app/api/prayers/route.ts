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
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '100'), 5000);
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
    const { action, prayerText, opReply } = body;

    // Handle special actions
    if (action === 'addPrayer') {
      if (!prayerText || prayerText.trim() === '') {
        return NextResponse.json({ 
          error: 'Prayer text is required',
          code: 'MISSING_PRAYER_TEXT' 
        }, { status: 400 });
      }

      // Get current prayers array or initialize empty array
      const currentPrayers = (existing[0].prayers as any[]) || [];
      
      // Append new prayer object
      const newPrayer = {
        text: prayerText.trim(),
        createdAt: new Date().toISOString()
      };
      
      const updatedPrayers = [...currentPrayers, newPrayer];

      const updated = await db.update(prayers)
        .set({
          prayers: updatedPrayers as any,
          prayCount: (existing[0].prayCount || 0) + 1,
          updatedAt: new Date().toISOString()
        })
        .where(eq(prayers.id, parseInt(id)))
        .returning();

      return NextResponse.json(updated[0], { status: 200 });
    }

    if (action === 'addOpReply') {
      if (!opReply || opReply.trim() === '') {
        return NextResponse.json({ 
          error: 'OP reply is required',
          code: 'MISSING_OP_REPLY' 
        }, { status: 400 });
      }

      // Check if opReply is already set
      if (existing[0].opReply !== null && existing[0].opReply !== undefined) {
        return NextResponse.json({ 
          error: 'OP reply has already been set',
          code: 'OP_REPLY_ALREADY_SET' 
        }, { status: 400 });
      }

      const updated = await db.update(prayers)
        .set({
          opReply: opReply.trim(),
          updatedAt: new Date().toISOString()
        })
        .where(eq(prayers.id, parseInt(id)))
        .returning();

      return NextResponse.json(updated[0], { status: 200 });
    }

    // Standard field updates (existing logic)
    const updates: Record<string, any> = {};

    if ('title' in body) {
      if (!body.title || body.title.trim() === '') {
        return NextResponse.json({ 
          error: 'Title cannot be empty',
          code: 'INVALID_TITLE' 
        }, { status: 400 });
      }
      updates.title = body.title.trim();
    }

    if ('content' in body) {
      if (!body.content || body.content.trim() === '') {
        return NextResponse.json({ 
          error: 'Content cannot be empty',
          code: 'INVALID_CONTENT' 
        }, { status: 400 });
      }
      updates.content = body.content.trim();
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

    if ('authorName' in body) {
      updates.authorName = body.authorName ? body.authorName.trim() : null;
    }

    if ('authorEmail' in body) {
      updates.authorEmail = body.authorEmail ? body.authorEmail.trim() : null;
    }

    if ('isAnonymous' in body) {
      updates.isAnonymous = body.isAnonymous === true;
      if (updates.isAnonymous) {
        updates.authorName = null;
        updates.authorEmail = null;
      }
    }

    if ('prayCount' in body) {
      const count = parseInt(body.prayCount);
      if (isNaN(count) || count < 0) {
        return NextResponse.json({ 
          error: 'Prayer count must be a valid non-negative integer',
          code: 'INVALID_PRAYER_COUNT' 
        }, { status: 400 });
      }
      updates.prayCount = count;
    }

    if ('isApproved' in body) {
      updates.isApproved = body.isApproved === true;
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