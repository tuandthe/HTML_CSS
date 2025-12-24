import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

enum OrderStatus {
  Processing = "Processing",
  Completed = "Completed",
  Cancelled = "Cancelled",
}

async function main() {
  console.log("Seeding data orders");
  const orders = await Promise.all([
    prisma.order.upsert({
      where: { id: "ORD-001" },
      update: {},
      create: {
        id: "ORD-001",
        date: new Date("Jan 15, 2024"),
        status: OrderStatus.Processing,
        items: "Wireless Headphones + 2 more items",
        total: 149.97,
      },
    }),
    prisma.order.upsert({
      where: { id: "ORD-002" },
      update: {},
      create: {
        id: "ORD-002",
        date: new Date("Jan 10, 2024"),
        status: OrderStatus.Completed,
        items: "Smart Watch Series 8",
        total: 399.99,
      },
    }),
    prisma.order.upsert({
      where: { id: "ORD-003" },
      update: {},
      create: {
        id: "ORD-003",
        date: new Date("Jan 5, 2024"),
        status: OrderStatus.Completed,
        items: "Coffee Mug Set + 1 more item",
        total: 44.98,
      },
    }),
    prisma.order.upsert({
      where: { id: "ORD-004" },
      update: {},
      create: {
        id: "ORD-004",
        date: new Date("Dec 28, 2023"),
        status: OrderStatus.Cancelled,
        items: "Portable Charger",
        total: 29.99,
      },
    }),
    prisma.order.upsert({
      where: { id: "ORD-005" },
      update: {},
      create: {
        id: "ORD-005",
        date: new Date("Dec 20, 2023"),
        status: OrderStatus.Completed,
        items: "Leather Wallet",
        total: 49.99,
      },
    }),
  ]);

  console.log(`✅ Created ${orders.length} orders`);
  console.log("Seeding finished.");
}
main()
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
