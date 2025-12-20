import {
  affiliateStatsData,
  marketingBanners,
  marketingLinks,
  paymentData,
  paymentHistoryData,
  recentPerformanceData,
  referralLinksData,
} from "@/lib/data/affiliate";
import { TabType } from "@/lib/types/affiliate";
import { useState } from "react";

export function useAffiliate() {
  const [activeTab, setActiveTab] = useState<TabType>("dashboard");

  return {
    activeTab,
    setActiveTab,
    stats: affiliateStatsData,
    referralLinks: referralLinksData,
    payment: paymentData,
    recentPerformance: recentPerformanceData,
    marketingAssets: { banners: marketingBanners, links: marketingLinks },
    paymentHistory: paymentHistoryData,
  };
}
