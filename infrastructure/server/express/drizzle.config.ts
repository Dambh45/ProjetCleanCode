import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: '../repositories/sqlite/drizzle',
  schema: '../repositories/sqlite/schema.ts',
  dialect: 'sqlite',
  dbCredentials: {
    url: "file:triumphmotorcycle.sqlite"
  },
});