import { MarketingBanner, MarketingTextLink } from "@/lib/types/affiliate";
import { Copy, Download } from "lucide-react";
import { Card } from "../common/Card";

interface MarketingViewProps {
  banners: MarketingBanner[];
  links: MarketingTextLink[];
}

export default function MarketingView({ banners, links }: MarketingViewProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Banner Ads */}
      <Card className="p-5 space-y-4">
        <h3 className="text-gray-900 font-medium text-lg">Banner Ads</h3>
        <div className="space-y-6">
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="p-3 bg-white border border-gray-100 shadow-sm rounded-2xl"
            >
              {/* Visual Banner Block */}
              <div
                className={`w-full ${banner.colorClass} rounded-lg flex items-center justify-center text-white font-medium mb-4 min-h-[120px]`}
              >
                {banner.size}
              </div>
              {/* Actions */}
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                  <Download size={16} /> Download
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                  <Copy size={16} /> Copy Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Text Links */}
      <Card className="p-5 space-y-4">
        <h3 className="text-gray-900 font-medium text-lg">Text Links</h3>
        <div className="space-y-6">
          {links.map((link) => (
            <div
              key={link.id}
              className="p-6 bg-white border border-gray-100 shadow-sm rounded-2xl"
            >
              <h4 className="font-bold text-gray-900 mb-2">{link.title}</h4>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                {link.description}
              </p>

              {link.action === "copy" ? (
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                  <Copy size={16} /> Copy Text
                </button>
              ) : (
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                  <Download size={16} /> Download
                </button>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
