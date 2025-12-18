export type TabType = "dashboard" | "referral-links" | "marketing" | "payments";
export type LinkStatus = "Active" | "Pending" | "Paused" | "Rejected";
export interface AffiliateStat {
  label: string;
  value: string;
  trendValue?: string;
  icon: "dollar" | "chart" | "users" | "target";
}
export interface ReferralLink {
  id: string;
  title: string;
  url: string;
  clicks: number;
  conversions: number;
  earnings: string;
}
export interface PaymentOverview {
  pending: string;
  available: string;
}
export interface PerformanceItem {
  id: string;
  title: string;
  clicks: string;
  conversions: string;
  earnings: string;
}
export interface MarketingBanner {
  id: string;
  size: string;
  colorClass: string;
  type: "banner";
}

export interface MarketingTextLink {
  id: string;
  title: string;
  description: string;
  action: "copy" | "download";
  type: "text" | "email";
}

export interface PaymentHistoryItem {
  id: string;
  date: string;
  method: string;
  amount: string;
  status: "Paid" | "Pending";
}
export interface ReferralLinkDetail {
  id: string;
  name: string;
  url: string;
  status: LinkStatus;
  category: string;
  clicks: number;
  conversions: number;
  earnings: string;
  createdAt: string;
}

export interface LinkStats {
  clicks: number;
  conversions: number;
  earnings: string;
}
export interface TrafficSource {
  source: string;
  clicks: number;
  conversions: number;
  icon: "instagram" | "facebook" | "twitter" | "direct" | "other";
}

export interface ChartDataPoint {
  date: string;
  clicks: number;
  conversions: number;
  earnings: string;
}

export interface LinkDetailFull extends ReferralLinkDetail {
  description: string;
  approvedDate: string;
  approvedBy: string;
  commissionRate: string;
  lastClick: string;
  originalUrl: string;
  chartData: ChartDataPoint[];
  trafficSources: TrafficSource[];
}
