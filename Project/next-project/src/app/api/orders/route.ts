import { ApiResponse } from "@/lib/utils/api-response";
import { createOrderSchema } from "@/lib/validations/order.schema";
import { orderService } from "@/services/order.service";
import { ZodError } from "zod";

export async function GET() {
  try {
    const orders = await orderService.getAllOrders();
    return ApiResponse.success(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    return ApiResponse.error();
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = createOrderSchema.parse(body);
    const newOrder = await orderService.createOrder(validatedData);

    return ApiResponse.success(newOrder);
  } catch (error) {

    if (error instanceof ZodError) {
      return ApiResponse.badRequest("Invalid order data");
    }
    console.error("Create Order Error:", error);
    return ApiResponse.error();
  }
  
}
