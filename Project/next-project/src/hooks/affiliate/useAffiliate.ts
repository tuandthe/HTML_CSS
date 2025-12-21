import { useState, useEffect } from "react";
import { DashboardData, TabType } from "@/lib/types/affiliate";
import { affiliateApi } from "@/lib/api-client/affiliateApi";

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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const dashboardData = await affiliateApi.getDashboardData();
        setData(dashboardData);
      } catch (err) {
        console.error("Failed to fetch affiliate data", err);
        setError("Failed to load dashboard data.");
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
    error,
    refetch: async () => {
        setIsLoading(true);
        const newData = await affiliateApi.getDashboardData();
        setData(newData);
        setIsLoading(false);
    }
  };
}