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

interface UserSidebarProps {
  onLinkClick?: () => void;
}

export default function UserSidebar({ onLinkClick }: UserSidebarProps) {
  const pathname = usePathname();

  return (
    <div className="h-full bg-woo-card border-r border-woo-border flex flex-col">
      {/* --- Header --- */}
      <div className="p-6 border-b border-woo-border">
        <h1 className="text-2xl font-semibold text-woo-text">My Account</h1>
        <div className="mt-4">
          <Link
            href="/tickets"
            onClick={onLinkClick}
            className="text-sm text-woo-primary hover:text-woo-primary-hover font-medium flex items-center gap-2 transition-colors"
          >
            <MessageSquare size={16} />
            Tickets
          </Link>
        </div>
      </div>

      {/* --- Menu Items --- */}
      <div className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (pathname.startsWith(item.href) && item.href !== "/dashboard");

          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onLinkClick}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-full transition-all duration-200",
                isActive
                  ? "bg-woo-primary text-white shadow-sm hover:bg-woo-primary-hover"
                  : "text-woo-text hover:bg-gray-50 hover:text-woo-primary",
              )}
            >
              <Icon size={20} />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>

      {/* --- Footer --- */}
      <div className="p-4 border-t border-woo-border space-y-4">
        {/* Affiliate Card */}
        <div className="bg-gradient-to-r from-woo-primary to-green-600 p-4 rounded-2xl text-white">
          <div className="flex items-center gap-2 mb-2">
            <Users size={18} />
            <span className="font-medium text-sm">Affiliate Program</span>
          </div>
          <p className="text-xs text-green-100 mb-3">
            Earn commissions by referring customers
          </p>
          <Link
            href="/affiliate"
            onClick={onLinkClick}
            className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-all h-8 rounded-full gap-1.5 px-3 bg-white text-woo-primary hover:bg-gray-100 w-full text-xs"
          >
            Get Started
            <ArrowRight size={12} className="ml-1" />
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:bg-gray-50 text-woo-text hover:text-woo-primary">
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>

          <Link
            href="/affiliate"
            onClick={onLinkClick}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:bg-gray-50 text-woo-text hover:text-woo-primary"
          >
            <Users size={20} />
            <span className="font-medium">Affiliate</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
