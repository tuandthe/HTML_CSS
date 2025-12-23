"use client";
import LinkFilterBar from "@/components/affiliate/links/LinkFilterBar";
import LinkList from "@/components/affiliate/links/LinkList";
import LinkStatsCards from "@/components/affiliate/links/LinkStats";
import { useAffiliateLinks } from "@/hooks/affiliate/useAffiliateLinks";
import { ArrowLeft, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AffiliateDashboardPage() {
  const router = useRouter();
  const {
    links,
    stats,
    searchQuery,
    setSearchQuery,
    activeFilter,
    setActiveFilter,
    counts,
  } = useAffiliateLinks();
  return (
    <div className="lg:ml-64">
      <div className="p-4 lg:p-8">
        <div className="space-y-6">
          {/* Header Block */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => router.back()}
                className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Affiliate Links
                </h1>
                <p className="text-gray-500 text-sm mt-0.5">
                  Manage and track your referral links
                </p>
              </div>
            </div>
            <button className="flex items-center gap-2 bg-[#007042] hover:bg-[#005c36] text-white px-4 py-2 rounded-2xl font-medium text-sm shadow-sm transition-colors">
              <Plus size={18} /> Create Link
            </button>
          </div>
          {/* 2. Stats Block */}
          <LinkStatsCards stats={stats} />

          {/* 3. Filter Block */}
          <LinkFilterBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            counts={counts}
          />
          {/* 4. List Block */}
          <LinkList links={links} />
        </div>
      </div>
    </div>
  );
}
