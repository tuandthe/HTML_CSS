"use client";

import AffiliateStats from "@/components/affiliate/AffiliateStats";
import AffiliateTabs from "@/components/affiliate/AffiliateTabs";
import DashboardView from "@/components/affiliate/DashboardView";
import MarketingView from "@/components/affiliate/MarketingView";
import PaymentsView from "@/components/affiliate/PaymentsView";
import ReferralLinksView from "@/components/affiliate/ReferralLinksView";
import { useAffiliate } from "@/hooks/useAffiliate";

export default function AffiliatePage() {
  const {
    activeTab,
    setActiveTab,
    stats,
    referralLinks,
    payment,
    recentPerformance,
    marketingAssets,
    paymentHistory,
  } = useAffiliate();

  return (
    <div className="max-w-4xl space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Affiliate Dashboard
        </h1>
        <p className="text-gray-500 mt-1">
          Track your earnings and manage your affiliate links.
        </p>
      </div>
      {/* Top Stats*/}
      <AffiliateStats stats={stats} />

      {/* Navigation Tabs */}
      <AffiliateTabs activeTab={activeTab} onChange={setActiveTab} />

      {/* Dynamic Content */}
      <div className="animate-in fade-in duration-300 slide-in-from-bottom-2">
        {activeTab === "dashboard" && (
          <DashboardView payment={payment} performance={recentPerformance} />
        )}
        {activeTab === "referral-links" && (
          <ReferralLinksView links={referralLinks} />
        )}
        {activeTab === "marketing" && (
          <MarketingView
            banners={marketingAssets.banners}
            links={marketingAssets.links}
          />
        )}
        {activeTab === "payments" && <PaymentsView history={paymentHistory} />}
      </div>
    </div>
  );
}
