// lib/prisma.js
// import { PrismaClient } from "@prisma/client";

// const globalForPrisma = globalThis;

// export const prisma =
//   globalForPrisma.prisma ||
//   new PrismaClient({
//     adapter: "node-postgres",
//     log: ["error"],
//   });

// if (process.env.NODE_ENV !== "production") {
//   globalForPrisma.prisma = prisma;
// }


import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';

// 1. Initialize the driver (e.g., node-postgres)
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// 2. Instantiate the adapter
const adapter = new PrismaPg(pool);

// 3. Pass the adapter to PrismaClient
export const prisma = new PrismaClient({ adapter });
