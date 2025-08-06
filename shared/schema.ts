import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const equipment = pgTable("equipment", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  category: text("category").notNull(), // 'agriculture', 'construction', 'industry'
  subcategory: text("subcategory").notNull(),
  description: text("description").notNull(),
  specifications: text("specifications").notNull(), // JSON string
  images: text("images").array().notNull().default(sql`ARRAY[]::text[]`),
  condition: text("condition").notNull(), // 'new', 'used'
  availability: text("availability").notNull(), // 'available', 'sold', 'reserved'
  year: integer("year"),
  hours: integer("hours"), // operating hours
  weight: integer("weight"), // in kg
  power: integer("power"), // in HP
  price: integer("price"), // price range indicator
  featured: boolean("featured").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const parts = pgTable("parts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  reference: text("reference").notNull(),
  category: text("category").notNull(), // 'engine', 'hydraulic', 'chassis', 'cabin'
  compatibility: text("compatibility").array().notNull().default(sql`ARRAY[]::text[]`), // compatible equipment
  description: text("description"),
  images: text("images").array().notNull().default(sql`ARRAY[]::text[]`),
  availability: text("availability").notNull(), // 'in_stock', 'on_order', 'out_of_stock'
  price: integer("price"),
  featured: boolean("featured").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const quotes = pgTable("quotes", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  company: text("company"),
  sector: text("sector"),
  message: text("message").notNull(),
  productId: varchar("product_id"),
  productType: text("product_type"), // 'equipment', 'part'
  status: text("status").default("pending"), // 'pending', 'contacted', 'closed'
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertEquipmentSchema = createInsertSchema(equipment).omit({
  id: true,
  createdAt: true,
});

export const insertPartSchema = createInsertSchema(parts).omit({
  id: true,
  createdAt: true,
});

export const insertQuoteSchema = createInsertSchema(quotes).omit({
  id: true,
  createdAt: true,
  status: true,
});

export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type Equipment = typeof equipment.$inferSelect;
export type InsertEquipment = z.infer<typeof insertEquipmentSchema>;
export type Part = typeof parts.$inferSelect;
export type InsertPart = z.infer<typeof insertPartSchema>;
export type Quote = typeof quotes.$inferSelect;
export type InsertQuote = z.infer<typeof insertQuoteSchema>;
