import { TabType } from "@/lib/types/affiliate";
import { cn } from "@/lib/utils/utils";

interface AffiliateTabsProps {
  activeTab: TabType;
  onChange: (tab: TabType) => void;
}

export default function AffiliateTabs({
  activeTab,
  onChange,
}: AffiliateTabsProps) {
  const tabs: { id: TabType; label: string }[] = [
    { id: "dashboard", label: "Dashboard" },
    { id: "referral-links", label: "Referral Links" },
    { id: "marketing", label: "Marketing" },
    { id: "payments", label: "Payments" },
  ];
  return (
    <div className="flex flex-wrap gap-2 bg-gray-50 p-1.5 rounded-xl w-fit">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={cn(
            "px-4 py-2 rounded-lg text-sm font-semibold transition-all",
            activeTab === tab.id
              ? "bg-white rounded-2xl text-gray-900 shadow-sm"
              : "text-gray-500 hover:text-gray-700 hover:bg-gray-100",
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
