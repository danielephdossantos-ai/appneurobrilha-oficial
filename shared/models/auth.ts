import { users } from "../schema";

export type User = typeof users.$inferSelect;
export type UpsertUser = typeof users.$inferInsert;
