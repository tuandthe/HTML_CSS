"use client";

import LinkDetailHeader from "@/components/affiliate/link-detail/LinkDetailHeader";
import LinkInfoSidebar from "@/components/affiliate/link-detail/LinkInfoSidebar";
import LinkPerformanceStats from "@/components/affiliate/link-detail/LinkPerformanceStats";
import PerformanceChart from "@/components/affiliate/link-detail/PerformanceChart";
import TrafficSources from "@/components/affiliate/link-detail/TrafficSources";
import { useLinkDetail } from "@/hooks/affiliate/useLinkDetail";
import { useParams } from "next/navigation";

export default function LinkDetailPage() {
  const params = useParams();
  const linkId = params.id as string;
  const { link } = useLinkDetail(linkId);
  return (
    <div className="lg:ml-64 !w-full">
      <div className="p-4 lg:p-8">
    <div className="max-w-6xl mx-auto space-y-6 pb-10">
      {/* 1. Header Section */}
      <LinkDetailHeader link={link} id={linkId} />

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column (Main Content) - Chiếm 2 phần */}
        <div className="lg:col-span-2 space-y-6">
          {/* 2. Stats Overview */}
          <LinkPerformanceStats link={link} />
          <PerformanceChart data={link.chartData} />
          <TrafficSources sources={link.trafficSources} />
        </div>

        {/* Right Column (Sidebar) - Chiếm 1 phần */}
        <div className="lg:col-span-1">
          <LinkInfoSidebar link={link} />
        </div>
      </div>
    </div></div></div>
  );
}
