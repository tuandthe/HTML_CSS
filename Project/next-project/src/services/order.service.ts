import { Prisma } from "@/generated/prisma/browser";
import { prisma } from "@/lib/prisma";

export const orderService = {
  getAllOrders: async () => {
    return await prisma.order.findMany({
      orderBy: {
        date: "desc",
      },
    });
  },

  getOrderById: async (id: string) => {
    return await prisma.order.findUnique({
      where: { id },
    });
  },

  createOrder: async (data: Prisma.OrderCreateInput) => {
    const newOrder = await prisma.order.create({
      data,
    });
    return newOrder;
  },
  updateOrder: async (id: string, data: Prisma.OrderUpdateInput) => {
    const existingOrder = await prisma.order.findUnique({
      where: { id },
    });
    if (!existingOrder) return null;

    return await prisma.order.update({
      where: { id },
      data,
    });
  },

  deleteOrder: async (id: string) => {
    const existingOrder = await prisma.order.findUnique({
      where: { id },
    });
    if (!existingOrder) return null;
    
    return await prisma.order.delete({
      where: { id },
    });
  },
};
