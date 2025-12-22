"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShieldCheck, HelpCircle, FileText, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils/utils";

const authMenuItems = [
  { name: "Security Tips", href: "/security", icon: ShieldCheck },
  { name: "Help Center", href: "/help", icon: HelpCircle },
  { name: "Terms of Service", href: "/terms", icon: FileText },
];

export default function AuthSidebar({ onLinkClick }: { onLinkClick?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full bg-woo-bg lg:bg-woo-card">
      <div className="p-6">
        <Link href="/" className="flex items-center gap-2 text-woo-secondary hover:text-woo-primary transition-colors">
            <ArrowLeft size={16}/>
            <span className="text-sm font-medium">Back to Home</span>
        </Link>
        <h2 className="mt-6 text-xl font-bold text-woo-text">Support</h2>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {authMenuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
                <Link
                    key={item.href}
                    href={item.href}
                    onClick={onLinkClick}
                    className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-xl transition-all",
                        isActive ? "bg-woo-primary/10 text-woo-primary font-medium" : "text-woo-secondary hover:bg-woo-bg hover:text-woo-text"
                    )}
                >
                    <item.icon size={18} />
                    {item.name}
                </Link>
            )
        })}
      </nav>
    </div>
  );
}