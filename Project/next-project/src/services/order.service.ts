import { Prisma } from "@/generated/prisma/browser";
import { prisma } from "@/lib/prisma";
import { Order, orderStatus, orderStatusWithAll } from "@/lib/types/order";

export const orderService = {
  getAllOrders: async (statusFilter?: string) => {
    const whereCondition: Prisma.OrderWhereInput = {};

    if (statusFilter && statusFilter !== orderStatusWithAll.All) {
      whereCondition.status = statusFilter as orderStatus;
    }
    const rawOrder = await prisma.order.findMany({
      where: whereCondition,
      orderBy: {
        date: "desc",
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });

    const mappedOrders: Order[] = rawOrder.map((order) => ({
      id: order.id,
      date: order.date,
      status: order.status,
      total: Number(order.total),
      createdAt: order.createdAt,
      updatedAt: order.updatedAt,
      items: order.items.map((item) => ({
        id: item.id,
        quantity: item.quantity,
        price: Number(item.price),
        productId: item.productId,
        product: {
          id: item.product.id,
          name: item.product.name,
        },
      })),
    }));
    return mappedOrders;
  },

  getOrderCounts: async () => {
    const grouped = await prisma.order.groupBy({
      by: ["status"],
      _count: {
        status: true,
      },
    });

    const counts: Record<orderStatusWithAll, number> = {
      All: 0,
      Processing: 0,
      Completed: 0,
      Cancelled: 0,
    };

    grouped.forEach((item) => {
      const status = item.status;
      const count = item._count.status;
      counts[status] = count;
      counts.All += count;
    });

    return counts;
  },

  getOrderById: async (id: string) => {
    const rawOrder = await prisma.order.findUnique({
      where: { id },

      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });
    if (!rawOrder) return null;
    return rawOrder;
  },

  createOrder: async (data: {
    items: { productId: string; quantity: number }[];
    status?: orderStatus;
  }) => {
    const productIds = data.items.map((item) => item.productId);
    const products = await prisma.product.findMany({
      where: { id: { in: productIds } },
    });

    let calculatedTotal = 0;
    const orderItemsData = data.items.map((item) => {
      const product = products.find((p) => p.id === item.productId);
      if (!product) throw new Error(`Product ${item.productId} not found`);

      const price = Number(product.price); 
      calculatedTotal += price * item.quantity;

      return {
        productId: item.productId,
        quantity: item.quantity,
        price: price, 
      };
    });

    const newOrder = await prisma.order.create({
      data: {
        status: data.status || orderStatusWithAll.Processing,
        total: calculatedTotal, 
        items: {
          create: orderItemsData, 
        },
      },
      include: {
        items: true,
      },
    });

    return newOrder;
  },

  updateOrderStatus: async (id: string, status: orderStatus) => {
    return await prisma.order.update({
      where: { id },
      data: { status },
    });
  },

  deleteOrder: async (id: string) => {
    const existingOrder = await prisma.order.findUnique({
      where: { id },
    });
    if (!existingOrder) return null;

    return await prisma.order.delete({
      where: { id },
      include: {
        items: true,
      },
    });
  },
};
