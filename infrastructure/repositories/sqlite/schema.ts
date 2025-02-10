import { sqliteTable, int, text } from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm';

export const driverTable = sqliteTable('drivers', {
  id: int('id').primaryKey(),
  firstname: text('firstname').notNull(),
  lastname: text('lastname').notNull(),
  drivingLicenceNumber: int('driving_licence_number').notNull(),
  drivingExperience: int('driving_experience').notNull(),
});

export const testTable = sqliteTable('tests', {
  id: int('id').primaryKey(),
  bikeId: int('bike_id').notNull(),
  driverId: int('driver_id').notNull().references(() => driverTable.id),
  loanStartDate: text('loan_start_date').notNull(),
  loanEndDate: text('loan_end_date').notNull(),
});

export const incidentTable = sqliteTable('incidents', {
  id: int('id').primaryKey(),
  type: text('type').notNull(),
  description: text('description').notNull(),
  driverId: int('driver_id').notNull().references(() => driverTable.id),
});

/*export const driversRelations = relations(driverTable, ({ many }) => ({
  tests: many(testTable),
  incidents: many(incidentTable),
}));

export const testsRelations = relations(testTable, ({ one }) => ({
  driver: one(driverTable, {
    fields: [testTable.driverId],
    references: [driverTable.id],
  }),
}));

export const incidentsRelations = relations(incidentTable, ({ one }) => ({
  driver: one(driverTable, {
    fields: [incidentTable.driverId],
    references: [driverTable.id],
  }),
}));*/
