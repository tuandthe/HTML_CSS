import { useState, useEffect } from "react";
import { DashboardData, TabType } from "@/lib/types/affiliate";
import { affiliateApi } from "@/lib/api-client/affiliateApi";
import { NotFoundError } from "@/lib/errors/NotFoundError";

const initialData: DashboardData = {
  stats: [],
  referralLinks: [],
  payment: { pending: "$0.00", available: "$0.00" },
  recentPerformance: [],
  marketingAssets: { banners: [], links: [] },
  paymentHistory: [],
};

export function useAffiliate() {
  const [activeTab, setActiveTab] = useState<TabType>("dashboard");
  const [data, setData] = useState<DashboardData>(initialData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const dashboardData = await affiliateApi.getDashboardData();
        setData(dashboardData);
      } catch (err) {
        if (err instanceof NotFoundError) {
          return Response.json({ message: err.message }, { status: 404 });
        }
        console.error(err);
        return Response.json(
          { message: "Internal Server Error" },
          { status: 500 },
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    activeTab,
    setActiveTab,
    ...data,
    isLoading,
    refetch: async () => {
      setIsLoading(true);
      const newData = await affiliateApi.getDashboardData();
      setData(newData);
      setIsLoading(false);
    },
  };
}
