import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const prayers = sqliteTable('prayers', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name'),
  prayerRequest: text('prayer_request').notNull(),
  category: text('category').notNull(),
  isAnonymous: integer('is_anonymous', { mode: 'boolean' }).default(false),
  prayCount: integer('pray_count').default(0),
  isAnswered: integer('is_answered', { mode: 'boolean' }).default(false),
  prayers: text('prayers', { mode: 'json' }),
  opReply: text('op_reply'),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

export const chatConversations = sqliteTable('chat_conversations', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  sessionId: text('session_id').notNull(),
  message: text('message').notNull(),
  role: text('role').notNull(),
  createdAt: text('created_at').notNull(),
});