import { ApiResponse } from "@/lib/utils/api-response";
import { orderService } from "@/services/order.service";
import { NextRequest } from "next/server";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(request: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params;
    const order = await orderService.getOrderById(id);
    if (!order) {
      return ApiResponse.notFound("Order not found");
    }
    return ApiResponse.success(order);
  } catch (error) {
    console.error("Error fetching order:", error);
    return ApiResponse.error();
  }
}

export async function PUT(request: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params;
    const body = await request.json();
    const updatedOrder = await orderService.updateOrderStatus(id, body.status);
    if (!updatedOrder) {
      return ApiResponse.notFound("Order not found");
    }
    return ApiResponse.success(updatedOrder);
  } catch (error) {
    console.error("Error updating order:", error);
    return ApiResponse.error();
  }
}

export async function DELETE(request: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params;
    const deletedOrder = await orderService.deleteOrder(id);
    if (!deletedOrder) {
      return ApiResponse.notFound("Order not found");
    }
    return ApiResponse.success({
      message: `Order with id ${id} deleted successfully`,
    });
  } catch (error) {
    console.error("Error deleting order:", error);
    return ApiResponse.error();
  }
}
