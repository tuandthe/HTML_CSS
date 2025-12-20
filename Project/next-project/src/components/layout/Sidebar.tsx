"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  MapPin,
  Heart,
  MessageSquare,
  UserCog,
  LogOut,
  Users,
  X,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils/utils";

const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Orders", href: "/orders", icon: Package },
  { name: "Addresses", href: "/addresses", icon: MapPin },
  { name: "Wishlist", href: "/wishlist", icon: Heart },
  { name: "Tickets", href: "/tickets", icon: MessageSquare },
  { name: "Edit Profile", href: "/profile", icon: UserCog },
];

interface SidebarProps {
  onClose?: () => void;
  className?: string;
}

export default function Sidebar({ onClose, className }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "h-full bg-white flex flex-col overflow-y-auto custom-scrollbar",
        className,
      )}
    >
      {/* Mobile Close Button */}
      <button
        onClick={onClose}
        className="lg:hidden absolute top-4 right-4 p-2 text-gray-500 hover:bg-gray-100 rounded-full z-50"
      >
        <X size={20} />
      </button>

      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-900">My Account</h1>
        <div className="mt-4">
          <Link
            href="/tickets"
            onClick={onClose}
            className="text-sm text-[#00965E] hover:text-[#007042] font-medium flex items-center gap-2 transition-colors"
          >
            <MessageSquare size={16} />
            Tickets
          </Link>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (pathname.startsWith(item.href) && item.href !== "/dashboard");
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-3xl transition-all duration-200",
                isActive
                  ? "bg-[#007042] text-white shadow-sm hover:bg-[#007042]"
                  : "text-gray-700 hover:bg-gray-50 hover:text-[#00965E]",
              )}
            >
              <Icon size={20} />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 space-y-4">
        {/* Affiliate Card */}
        <div className="bg-gradient-to-r from-[#00965E] to-green-600 p-4 rounded-xl text-white">
          <div className="flex items-center gap-2 mb-2">
            <Users size={18} />
            <span className="font-medium text-sm">Affiliate Program</span>
          </div>
          <p className="text-xs text-green-100 mb-3">
            Earn commissions by referring customers
          </p>
          <Link
            href="/affiliate"
            onClick={onClose}
            className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-all h-8 rounded-md gap-1.5 px-3 bg-white text-[#00965E] hover:bg-gray-100 w-full text-xs"
          >
            Get Started
            <ArrowRight size={12} className="ml-1" />
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:bg-gray-50 text-gray-700 hover:text-[#00965E]">
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>

          <Link
            href="/affiliate"
            onClick={onClose}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:bg-gray-50 text-gray-700 hover:text-[#00965E]"
          >
            <Users size={20} />
            <span className="font-medium">Affiliate</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
