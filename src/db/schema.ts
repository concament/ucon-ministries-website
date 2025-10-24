import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const prayers = sqliteTable('prayers', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  content: text('content').notNull(),
  authorName: text('author_name'),
  authorEmail: text('author_email'),
  category: text('category').notNull(),
  isAnonymous: integer('is_anonymous', { mode: 'boolean' }).default(false),
  prayCount: integer('pray_count').default(0),
  isApproved: integer('is_approved', { mode: 'boolean' }).default(false),
  prayers: text('prayers', { mode: 'json' }),
  opReply: text('op_reply'),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});