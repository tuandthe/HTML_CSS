import {
  affiliateStatsData,
  marketingBanners,
  marketingLinks,
  paymentData,
  paymentHistoryData,
  recentPerformanceData,
  referralLinksData,
  mockLinkDetail,
  mockLinks,
  mockStats
} from "@/lib/data/affiliate";
import { DashboardData, LinkDetailFull, LinkStats, ReferralLinkDetail } from "@/lib/types/affiliate";

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const affiliateApi = {
  getDashboardData: async (): Promise<DashboardData> => {
    return {
      stats: affiliateStatsData,
      referralLinks: referralLinksData,
      payment: paymentData,
      recentPerformance: recentPerformanceData,
      marketingAssets: { banners: marketingBanners, links: marketingLinks },
      paymentHistory: paymentHistoryData,
    };
  },

  getAllLinks: async (): Promise<ReferralLinkDetail[]> => {
    return mockLinks;
  },

  getLinkDetail: async (id: string): Promise<LinkDetailFull> => {

    if (id === "AFL-001") return mockLinkDetail;
    throw new Error("Link not found");
  },

  getLinksPageData: async (): Promise<{ links: ReferralLinkDetail[]; stats: LinkStats }> => {
    return {
      links: mockLinks,
      stats: mockStats,
    };
  },
};