import { orderService } from "@/services/order.service";
import { console } from "inspector";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const orders = await orderService.getAllOrders();
    return NextResponse.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function POST(data: Request) {
  try {
    const body = await data.json();
    const newOrder = await orderService.createOrder(body);
    return NextResponse.json(newOrder, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
