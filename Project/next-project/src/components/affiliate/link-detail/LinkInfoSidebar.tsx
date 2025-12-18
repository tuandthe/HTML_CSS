import { Card } from "@/components/common/Card";
import { LinkDetailFull } from "@/lib/types/affiliate";
import { Edit, Pause, Share2, Trash2 } from "lucide-react";

export default function LinkInfoSidebar({ link }: { link: LinkDetailFull }) {
  return (
    <div className="space-y-6">
      {/* Link Details Card */}
      <Card className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl space-y-6">
        <h3 className="font-bold text-gray-900">Link Details</h3>
        <div className="space-y-4 text-sm">
          <div>
            <p className="text-gray-500 mb-1">Category</p>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-bold border border-gray-200">
              {link.category}
            </span>
          </div>
          <div>
            <p className="text-gray-500 mb-1">Commission Rate</p>
            <p className="font-bold text-gray-900 text-lg">
              {link.commissionRate}
            </p>
          </div>
          <div>
            <p className="text-gray-500 mb-1">Created</p>
            <p className="font-medium text-gray-900">{link.createdAt}</p>
          </div>
          <div>
            <p className="text-gray-500 mb-1">Last Click</p>
            <p className="font-medium text-gray-900">{link.lastClick}</p>
          </div>
          <div>
            <p className="text-gray-500 mb-1">Original URL</p>
            <a
              href={link.originalUrl}
              className="text-[#007042] hover:underline truncate block"
            >
              {link.originalUrl}
            </a>
          </div>
        </div>
      </Card>
      {/* 2. Actions Card */}
      <Card className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl">
        <h3 className="font-bold text-gray-900 mb-4">Actions</h3>
        <div className="space-y-3">
          <button className="w-full flex items-center gap-3 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-semibold text-gray-700 hover:bg-white hover:border-gray-300 transition-all">
            <Edit size={16} /> Edit Link
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-semibold text-gray-700 hover:bg-white hover:border-gray-300 transition-all">
            <Pause size={16} /> Pause Link
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-2.5 bg-red-50 border border-red-100 rounded-2xl text-sm font-semibold text-red-600 hover:bg-red-100 hover:border-red-200 transition-all">
            <Trash2 size={16} /> Delete Link
          </button>
        </div>
      </Card>
      {/* 3. Share Widget */}
      <Card className="p-6 bg-[#EAF7F2] border border-transparent rounded-xl">
        <div className="w-10 h-10 bg-[#007042] rounded-full flex items-center justify-center text-white mb-3">
          <Share2 size={20} />
        </div>
        <h3 className="font-bold text-gray-900 mb-2">Share Your Link</h3>
        <p className="text-sm text-gray-600 mb-4">
          Share this link on social media to maximize your earnings.
        </p>
        <div className="grid grid-cols-2 gap-2">
          <button className="bg-white py-2 rounded-lg text-xs font-bold text-gray-700 shadow-sm hover:bg-gray-50">
            Facebook
          </button>
          <button className="bg-white py-2 rounded-lg text-xs font-bold text-gray-700 shadow-sm hover:bg-gray-50">
            Twitter
          </button>
          <button className="bg-white py-2 rounded-lg text-xs font-bold text-gray-700 shadow-sm hover:bg-gray-50">
            Instagram
          </button>
          <button className="bg-white py-2 rounded-lg text-xs font-bold text-gray-700 shadow-sm hover:bg-gray-50">
            Email
          </button>
        </div>
      </Card>
    </div>
  );
}
