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

export const blogPosts = sqliteTable('blog_posts', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  slug: text('slug').notNull().unique(),
  content: text('content').notNull(),
  excerpt: text('excerpt'),
  author: text('author').notNull(),
  category: text('category').notNull(),
  featuredImageUrl: text('featured_image_url'),
  published: integer('published', { mode: 'boolean' }).default(false),
  publishedAt: text('published_at'),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

export const events = sqliteTable('events', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  description: text('description').notNull(),
  eventType: text('event_type').notNull(),
  startDate: text('start_date').notNull(),
  endDate: text('end_date'),
  location: text('location'),
  maxAttendees: integer('max_attendees'),
  requiresAuth: integer('requires_auth', { mode: 'boolean' }).default(false),
  imageUrl: text('image_url'),
  createdAt: text('created_at').notNull(),
});

export const eventRegistrations = sqliteTable('event_registrations', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  eventId: integer('event_id').notNull().references(() => events.id),
  userName: text('user_name').notNull(),
  userEmail: text('user_email').notNull(),
  userPhone: text('user_phone'),
  notes: text('notes'),
  status: text('status').notNull().default('confirmed'),
  registeredAt: text('registered_at').notNull(),
});

export const volunteerApplications = sqliteTable('volunteer_applications', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  address: text('address'),
  city: text('city'),
  state: text('state'),
  zipCode: text('zip_code'),
  availability: text('availability'),
  interests: text('interests', { mode: 'json' }),
  experience: text('experience'),
  whyVolunteer: text('why_volunteer').notNull(),
  backgroundCheckConsent: integer('background_check_consent', { mode: 'boolean' }).default(false),
  status: text('status').notNull().default('pending'),
  submittedAt: text('submitted_at').notNull(),
  reviewedAt: text('reviewed_at'),
  notes: text('notes'),
});

export const chatbotKnowledge = sqliteTable('chatbot_knowledge', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  question: text('question').notNull(),
  answer: text('answer').notNull(),
  category: text('category'),
  keywords: text('keywords'),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

