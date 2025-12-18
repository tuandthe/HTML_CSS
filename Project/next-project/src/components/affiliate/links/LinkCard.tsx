import { AffiliateLinksBadge } from "@/components/common/Badge";
import { ReferralLinkDetail } from "@/lib/types/affiliate";
import { Eye, Link2 } from "lucide-react";
import Link from "next/link";

export default function LinkCard({ link }: { link: ReferralLinkDetail }) {
  return (
    <div className="p-6 hover:bg-gray-50 transition-colors group">
      {/* Card Header */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <div className="flex-1 space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <h4 className="text-lg font-bold text-gray-900">{link.name}</h4>
            <AffiliateLinksBadge status={link.status} />
            <span className="px-2.5 py-0.5 bg-gray-100 text-gray-600 text-xs font-bold rounded-full border border-gray-200">
              {link.category}
            </span>
          </div>
          <div className="text-sm text-gray-500">
            Link ID: {link.id}
            <div className="flex items-center gap-2 bg-[#EAF7F2] px-3 py-2 rounded-lg w-fit max-w-full mt-1">
              <Link2 size={16} className="text-[#007042] flex-shrink-0" />
              <span className="text-sm text-gray-700 font-mono truncate">
                {link.url}
              </span>
            </div>
          </div>
        </div>
        <Link
          href={`/affiliate/links/${link.id}`}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors self-start whitespace-nowrap"
        >
          <Eye size={16} /> View Details
        </Link>
      </div>
      {/* Card Footer (Stats) */}
      <div className="grid grid-cols-2 md:grid-cols-4 text-sm mt-2">
        <div className="text-left">
          <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
            Clicks
          </div>
          <div className="text-lg font-bold text-gray-900">{link.clicks}</div>
        </div>
        <div className="text-left">
          <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
            Conversions
          </div>
          <div className="text-lg font-bold text-gray-900">
            {link.conversions}
          </div>
        </div>
        <div className="text-left">
          <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
            Earnings
          </div>
          <div className="text-lg font-bold text-[#007042]">
            {link.earnings}
          </div>
        </div>
        <div className="text-left">
          <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
            Created
          </div>
          <div className="text-lg font-bold text-gray-900">
            {link.createdAt}
          </div>
        </div>
      </div>
    </div>
  );
}
