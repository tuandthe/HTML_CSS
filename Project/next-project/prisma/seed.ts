import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { OrderStatus, PrismaClient } from "../src/generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Cleaning up old data...");

  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.product.deleteMany();

  console.log("Seeding Products...");

  const productData = [
    { name: "Wireless Headphones", price: 199.99 },
    { name: "Smart Watch Series 8", price: 399.0 },
    { name: "Professional Coffee Mug", price: 60.25 },
    { name: "Mechanical Keyboard", price: 120.0 },
    { name: "Ergonomic Mouse", price: 49.99 },
    { name: "Laptop Stand", price: 45.0 },
  ];

  const createdProducts = [];
  for (const p of productData) {
    const product = await prisma.product.create({
      data: p,
    });
    createdProducts.push(product);
  }

  console.log("Seeding Orders & OrderItems...");

  await prisma.order.create({
    data: {
      id: "ORD-001",
      status: OrderStatus.Processing,
      date: new Date("2024-01-15T10:00:00Z"),
      total: 249.98,
      items: {
        create: [
          {
            quantity: 1,
            price: 199.99,
            productId: createdProducts[0].id,
          },
          {
            quantity: 1,
            price: 49.99,
            productId: createdProducts[4].id,
          },
        ],
      },
    },
  });

  await prisma.order.create({
    data: {
      id: "ORD-002",
      status: OrderStatus.Completed,
      date: new Date("2024-01-10T14:30:00Z"),
      total: 399.0,
      items: {
        create: [
          {
            quantity: 1,
            price: 399.0,
            productId: createdProducts[1].id,
          },
        ],
      },
    },
  });

  await prisma.order.create({
    data: {
      id: "ORD-003",
      status: OrderStatus.Cancelled,
      date: new Date("2023-12-25T09:15:00Z"),
      total: 120.5,
      items: {
        create: [
          {
            quantity: 2,
            price: 60.25,
            productId: createdProducts[2].id,
          },
        ],
      },
    },
  });

  await prisma.order.create({
    data: {
      id: "ORD-004",
      status: OrderStatus.Completed,
      date: new Date("2023-12-20T11:20:00Z"),
      total: 165.0,
      items: {
        create: [
          {
            quantity: 1,
            price: 120.0,
            productId: createdProducts[3].id,
          },
          {
            quantity: 1,
            price: 45.0,
            productId: createdProducts[5].id,
          },
        ],
      },
    },
  });

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
