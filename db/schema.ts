import { pgTable, serial, varchar, timestamp } from "drizzle-orm/pg-core";

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),

  name: varchar("name", { length: 100 }).notNull(),

  phone: varchar("phone", { length: 20 }).notNull(),

  email: varchar("email", { length: 150 }).notNull(),

  city: varchar("city", { length: 100 }).notNull(),

  university: varchar("university", { length: 150 }).notNull(),

  status: varchar("status", { length: 20 }).default("new").notNull(),

  createdAt: timestamp("created_at").defaultNow(),
});
