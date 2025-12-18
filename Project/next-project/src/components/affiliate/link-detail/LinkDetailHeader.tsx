import { AffiliateLinksBadge } from "@/components/common/Badge";
import { LinkDetailFull } from "@/lib/types/affiliate";
import { ArrowLeft, CheckCircle2, Copy, LinkIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LinkDetailHeader({ link }: { link: LinkDetailFull }) {
  const router = useRouter();
  return (
    <div className="space-y-6">
      {/* Top Nav & Title */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        {/* Left Side: Back Button + Text Info */}
        <div className="flex gap-4">
          <button
            onClick={() => router.back()}
            className="mt-1 p-2 hover:bg-gray-100 rounded-full h-fit text-gray-500"
          >
            <ArrowLeft size={20} />
          </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{link.name}</h1>
              <p className="text-gray-500">{link.description}</p>
          </div>
        </div> 
         <div className="px-3 py-2 rounded-3xl font-medium bg-green-100 text-green-700">
            <AffiliateLinksBadge status={link.status} />
          </div>
      </div>
      {/* URL Box */}
      <div className="flex items-center gap-3 bg-gray-50 p-1 pl-4 rounded-lg border border-gray-200">
        <LinkIcon size={16} className="text-gray-400 flex-shrink-0" />
        <span className="text-green-700 font-mono text-sm truncate flex-1">
          {link.url}
        </span>
        <button className="bg-[#007042] hover:bg-[#005c36] text-white px-4 py-2 rounded-2xl text-sm font-bold flex items-center gap-2 transition-colors">
          <Copy size={16} /> Copy Link
        </button>
      </div>
      <div className="text-xs text-gray-400 mt-1 ml-1">Link ID: {link.id}</div>
      {/* Approval Status Box */}
      {link.status === "Active" && (
        <div className="bg-[#F0FDF4] border border-green-100 rounded-xl p-4 flex items-start gap-3">
          <CheckCircle2 className="text-green-600 mt-0.5" size={20} />
          <div>
            <p className="text-green-800 font-bold text-sm">Link Approved</p>
            <p className="text-green-600 text-sm">
              Approved by {link.approvedBy} on {link.approvedDate}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
