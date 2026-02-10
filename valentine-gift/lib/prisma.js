// lib/prisma.js
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from '@prisma/adapter-pg';
import "dotenv/config"; // ensure env vars are loaded

// const globalForPrisma = globalThis;

const connectionString = process.env.DATABASE_URL;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });
export {prisma};

// export const prisma =
//   globalForPrisma.prisma ||
//   new PrismaClient({
//     log: ["query"], // optional
//     // adapter: "postgresql", // <--- REQUIRED in Prisma 7 for local Postgres
//   });

// if (process.env.NODE_ENV !== "production") {
//   globalForPrisma.prisma = prisma;
// }
