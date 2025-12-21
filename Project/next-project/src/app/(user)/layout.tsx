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
    <div className="min-h-screen bg-woo-bg font-sans transition-colors duration-300">
        {/* 1. Desktop Sidebar */}
      <SidebarDesktop />

      {/* 2. Mobile Sidebar */}
      <SidebarMobile
        isOpen={isMobileSidebarOpen}
        onClose={() => setIsMobileSidebarOpen(false)}
      />

      {/* 3. Main Content Wrapper */}
      <div className="lg:ml-64 min-h-screen">
        {/* Mobile Header */}
        <header className="bg-woo-card border-b border-woo-border px-4 py-4 flex items-center justify-between lg:hidden sticky top-0 z-40 shadow-sm">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileSidebarOpen(true)}
              className="size-9 flex items-center justify-center text-woo-text hover:bg-woo-bg rounded-md transition-all"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
            <span className="text-xl font-semibold text-woo-text">
              My Account
            </span>
          </div>

          <Link
            href="/tickets"
            className="h-8 px-3 inline-flex items-center gap-1.5 text-sm font-medium text-woo-primary bg-woo-primary/10 hover:bg-woo-primary/20 rounded-md transition-colors"
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
