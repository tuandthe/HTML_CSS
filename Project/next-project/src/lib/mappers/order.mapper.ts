import { Prisma } from "@/generated/prisma/client";
import { Order } from "@/lib/types/order";

export const orderInclude = {
  items: {
    include: {
      product: true,
    },
  },
} satisfies Prisma.OrderInclude;

export type OrderRaw = Prisma.OrderGetPayload<{
  include: typeof orderInclude;
}>;

export const mapOrderToDTO = (raw: OrderRaw): Order => {
  return {
    id: raw.id,
    date: raw.date,
    status: raw.status,
    total: Number(raw.total),
    createdAt: raw.createdAt,
    updatedAt: raw.updatedAt,
    items: raw.items.map((item) => ({
      id: item.id,
      quantity: item.quantity,
      price: Number(item.price),
      productId: item.productId,
      product: {
        id: item.product.id,
        name: item.product.name,
      },
    })),
  };
};
