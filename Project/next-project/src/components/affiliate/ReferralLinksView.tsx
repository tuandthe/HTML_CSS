import { ReferralLink } from "@/lib/types/affiliate";
import { Card } from "../common/Card";
import { Copy, ExternalLink, Share2 } from "lucide-react";
import Link from "next/link";

export default function ReferralLinksView({
  links,
}: {
  links: ReferralLink[];
}) {
  return (
    <Card className="p-6 bg-white border border-gray-100 shadow-sm rounded-2xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-gray-900 font-medium">Your Referral Links</h3>
        <Link
          href="/affiliate/links"
          className="flex items-center gap-2 bg-[#007042] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#005c36] transition-colors"
        >
          <ExternalLink size={16} /> View All Links
        </Link>
      </div>
      <div className="space-y-6">
        {links.map((link) => (
          <div key={link.id} className="bg-gray-50 rounded-xl p-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <h4 className="font-semibold text-gray-900">{link.title}</h4>
              <div className="flex gap-2">
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-bold text-gray-700 hover:bg-gray-100">
                  <Copy size={14} /> Copy
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-bold text-gray-700 hover:bg-gray-100">
                  <Share2 size={14} /> Share
                </button>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-600 font-mono mb-4 overflow-hidden text-ellipsis whitespace-nowrap">
              {link.url}
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              {/* Click */}
              <div className=" text-center">
                <div className="text-lg font-bold text-gray-900">
                  {link.clicks}
                </div>
                <div className="text-xs text-gray-500 font-medium">Clicks</div>
              </div>
              {/* Conversions */}

              <div className=" text-center">
                <div className="text-lg font-bold text-gray-900">
                  {link.conversions}
                </div>
                <div className="text-xs text-gray-500 font-medium">
                  Conversions
                </div>
              </div>
              {/* Earnings */}
              <div className=" text-center">
                <div className="text-lg font-bold text-[#007042]">
                  {link.earnings}
                </div>
                <div className="text-xs text-gray-500 font-medium">
                  Earnings
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
