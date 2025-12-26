import { z } from "zod";
import { OrderStatus } from "@/generated/prisma/enums";

// Schema cho Create Order
export const createOrderSchema = z.object({
  items: z
    .array(
      z.object({
        productId: z.string().min(1, "Product ID is required"),
        quantity: z.number().int().positive("Quantity must be positive"),
      }),
    )
    .min(1, "Order must have at least one item"),
  status: z.nativeEnum(OrderStatus).optional(),
});

// Schema cho Update Status
export const updateOrderSchema = z.object({
  status: z.nativeEnum(OrderStatus),
});

// Type inference (Tự động tạo type TS từ schema)
export type CreateOrderDTO = z.infer<typeof createOrderSchema>;
export type UpdateOrderDTO = z.infer<typeof updateOrderSchema>;
