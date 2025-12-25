import { orderService } from "@/services/order.service";
import { NextRequest, NextResponse } from "next/server";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(request: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params;
    const order = await orderService.getOrderById(id);
    if (!order) {
      return NextResponse.json(
        { error: `Order with id ${id} not found` },
        { status: 404 },
      );
    }
    return NextResponse.json(order);
  } catch (error) {
    console.error("Error fetching order:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function PUT(request: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params;
    const body = await request.json();
    const updatedOrder = await orderService.updateOrder(id, body);
    if (!updatedOrder) {
      return NextResponse.json(
        { error: `Order with id ${id} not found` },
        { status: 404 },
      );
    }
    return NextResponse.json(updatedOrder);
  } catch (error) {
    console.error("Error updating order:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function DELETE(request: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params;
    const deletedOrder = await orderService.deleteOrder(id);
    if (!deletedOrder) {
      return NextResponse.json(
        { error: `Order with id ${id} not found` },
        { status: 404 },
      );
    }
    return NextResponse.json({
      message: `Order with id ${id} deleted successfully`,
    });
  } catch (error) {
    console.error("Error deleting order:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
