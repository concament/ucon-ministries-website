import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const prayers = sqliteTable('prayers', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name'),
  prayerRequest: text('prayer_request').notNull(),
  category: text('category').notNull(),
  isAnonymous: integer('is_anonymous', { mode: 'boolean' }).default(false),
  prayerCount: integer('prayer_count').default(0),
  isAnswered: integer('is_answered', { mode: 'boolean' }).default(false),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});