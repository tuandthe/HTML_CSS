"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { orderStatusWithAll } from "@/lib/types/order";

export const useOrderFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("status") || orderStatusWithAll.All;

  const setFilter = (status: string) => {
    if (status === orderStatusWithAll.All) {
      router.push("/orders");
    } else {
      router.push(`/orders?status=${status}`);
    }
  };

  return { activeTab, setFilter };
};
