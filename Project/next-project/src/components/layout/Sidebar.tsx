"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  MapPin,
  Heart,
  MessageSquare,
  User,
  LogOut,
  Users,
  Flag,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Orders", href: "/orders", icon: Package },
  { name: "Addresses", href: "/addresses", icon: MapPin },
  { name: "Wishlist", href: "/wishlist", icon: Heart },
  { name: "Tickets", href: "/tickets", icon: MessageSquare },
  { name: "Edit Profile", href: "/profile", icon: User },
];
interface SidebarProps {
  onClose?: () => void;
}
export default function Sidebar({ onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    // Sidebar Container
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-full relative overflow-y-auto custom-scrollbar">
      <button
        onClick={onClose}
        className="md:hidden absolute top-4 right-4 p-2 text-gray-500 hover:bg-gray-100 rounded-full"
      >
        <X size={20} />
      </button>
      {/* Sidebar Header */}
      <div className="p-6 pb-2">
        <h1 className="text-2xl font-bold text-gray-900">My Account</h1>
        <Link
          href="/tickets"
          className="hidden md:flex text-base font-medium text-green-700 items-center gap-1 mt-3 hover:underline"
        >
          <Flag size={12} /> Tickets
        </Link>
      </div>
      {/* Navigation Menu */}
      <nav className="flex-1 px-4 space-y-2 mt-4">
        {menuItems.map((item) => {
          const isActive =
            (pathname.startsWith(item.href) && item.href !== "/") ||
            (pathname === "/dashboard" && item.href === "/dashboard");
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-[#007042] text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-50 hover:text-[#007042]",
              )}
            >
              <Icon size={20} />
              {item.name}
            </Link>
          );
        })}
      </nav>
      {/* Sidebar Footer */}
      <div className="p-4 space-y-4">
        <div className="bg-[#00965E] rounded-xl p-4 text-white shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-white opacity-10 rounded-full -mr-8 -mt-8"></div>
          <div className="flex items-center gap-2 mb-2">
            <Users size={18} />
            <span className="font-bold text-sm">Affiliate Program</span>
          </div>
          <p className="text-xs text-white/90 mb-3 leading-relaxed">
            Earn commissions by referring customers
          </p>
          <button className="w-full bg-white text-[#00965E] py-2 rounded-lg text-xs font-bold uppercase tracking-wide hover:bg-gray-100 transition-colors flex items-center justify-center gap-1">
            Get Started &rarr;
          </button>
        </div>
        <div className="space-y-1">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-red-600 rounded-lg text-sm font-medium transition-colors">
            <LogOut size={20} /> Logout
          </button>
          <Link
            href="/affiliate"
            className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-[#007042] rounded-lg text-sm font-medium transition-colors"
          >
            <Users size={20} /> Affiliate
          </Link>
        </div>
      </div>
    </aside>
  );
}
