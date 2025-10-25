import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { chatbotKnowledge } from '@/db/schema';
import { eq, like, or, and, desc } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    
    // Extract and validate query parameters
    const category = searchParams.get('category')?.trim();
    const search = searchParams.get('search')?.trim();
    const limitParam = searchParams.get('limit');
    const offsetParam = searchParams.get('offset');
    
    // Validate and set pagination parameters
    const limit = limitParam ? parseInt(limitParam) : 10;
    const offset = offsetParam ? parseInt(offsetParam) : 0;
    
    // Validate limit
    if (isNaN(limit) || limit < 1 || limit > 50) {
      return NextResponse.json(
        { 
          error: 'Limit must be between 1 and 50',
          code: 'INVALID_LIMIT'
        },
        { status: 400 }
      );
    }
    
    // Validate offset
    if (isNaN(offset) || offset < 0) {
      return NextResponse.json(
        { 
          error: 'Offset must be a non-negative number',
          code: 'INVALID_OFFSET'
        },
        { status: 400 }
      );
    }
    
    // Build query conditions
    const conditions = [];
    
    // Add category filter if provided
    if (category) {
      conditions.push(eq(chatbotKnowledge.category, category));
    }
    
    // Add search filter if provided (search across question, answer, and keywords)
    if (search) {
      const searchCondition = or(
        like(chatbotKnowledge.question, `%${search}%`),
        like(chatbotKnowledge.answer, `%${search}%`),
        like(chatbotKnowledge.keywords, `%${search}%`)
      );
      conditions.push(searchCondition);
    }
    
    // Build and execute query
    let query: any = db.select().from(chatbotKnowledge);
    
    // Apply filters if any conditions exist
    if (conditions.length > 0) {
      query = query.where(conditions.length === 1 ? conditions[0] : and(...conditions));
    }
    
    // Apply ordering and pagination
    const results = await query
      .orderBy(desc(chatbotKnowledge.createdAt))
      .limit(limit)
      .offset(offset);
    
    return NextResponse.json(results, { status: 200 });
    
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error: ' + (error instanceof Error ? error.message : 'Unknown error'),
        code: 'INTERNAL_SERVER_ERROR'
      },
      { status: 500 }
    );
  }
}