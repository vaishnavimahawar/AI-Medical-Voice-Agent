import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql);  // ← this restores the global export your routes need

// If you have schema exports here, keep them (e.g.):
// export * from './schema';