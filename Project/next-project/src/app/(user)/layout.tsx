"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, MessageSquare } from "lucide-react";
import SidebarDesktop from "@/components/layout/SidebarDesktop";
import SidebarMobile from "@/components/layout/SidebarMobile";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 1. Desktop Sidebar */}
      <SidebarDesktop />

      {/* 2. Mobile Sidebar (Drawer) */}
      <SidebarMobile
        isOpen={isMobileSidebarOpen}
        onClose={() => setIsMobileSidebarOpen(false)}
      />

      {/* 3. Main Content Wrapper */}
      {/* ml-64 đẩy nội dung sang phải trên Desktop để tránh Sidebar che mất */}
      <div className="lg:ml-64 min-h-screen">
        {/* Mobile Header (Hamburger Menu) */}
        <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between lg:hidden sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileSidebarOpen(true)}
              className="p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-lg"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
            <span className="text-xl font-semibold text-gray-900">
              My Account
            </span>
          </div>

          <Link
            href="/tickets"
            className="text-sm text-[#00965E] hover:text-[#007042] font-medium flex items-center gap-2"
          >
            <MessageSquare size={18} />
            Tickets
          </Link>
        </header>

        {/* Page Content */}
        <div className="p-4 lg:p-8">
          <div className="space-y-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
