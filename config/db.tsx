import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

export function getDb() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL not set');
  }
  const sql = neon(process.env.DATABASE_URL);
  return drizzle(sql);
}

// Keep any schema exports if they are here
// e.g., export * from './schema';