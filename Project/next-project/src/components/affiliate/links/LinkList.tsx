import { ReferralLinkDetail } from "@/lib/types/affiliate";
import LinkCard from "./LinkCard";
import { Card } from "@/components/common/Card";

export default function LinkList({ links }: { links: ReferralLinkDetail[] }) {
  if (links.length === 0) {
    return (
      <div className="text-center py-16 bg-gray-50 rounded-xl border border-dashed border-gray-200">
        <p className="text-gray-500">No links found matching your criteria.</p>
      </div>
    );
  }

  return (
    <Card className="overflow-hidden border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-100 bg-white">
        <h3 className="font-medium text-gray-900">Your Affiliate Links</h3>
      </div>
      <div className="divide-y divide-gray-100">
        {links.map((link) => (
          <LinkCard key={link.id} link={link} />
        ))}
      </div>
    </Card>
  );
}
