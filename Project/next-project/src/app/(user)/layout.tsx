"use client";

import { useState } from "react";
import { Menu, MessageSquare } from "lucide-react";
import Link from "next/link";
import SidebarDesktopWrapper from "@/components/layout/sidebar/SidebarDesktopWrapper";
import SidebarMobileWrapper from "@/components/layout/sidebar/SidebarMobileWrapper";
import UserSidebar from "@/components/layout/sidebar/contents/UserSidebar";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const closeMobile = () => setIsMobileOpen(false);

  return (
    // 1. Root Container
    <div className="min-h-screen bg-woo-bg">
      {/* 2. Mobile Header */}
      <div className="lg:hidden">
        <header className="bg-woo-card border-b border-woo-border px-4 py-4 flex items-center justify-between sticky top-0 z-40 shadow-sm">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileOpen(true)}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all outline-none size-9 rounded-md text-woo-text hover:bg-gray-100"
            >
              <Menu size={20} />
            </button>
            <h1 className="text-xl font-semibold text-woo-text">My Account</h1>
          </div>

          <Link
            href="/tickets"
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all h-8 rounded-md gap-1.5 px-3 text-woo-primary hover:text-woo-primary-hover hover:bg-woo-primary/10"
          >
            <MessageSquare size={16} className="mr-2" />
            Tickets
          </Link>
        </header>
      </div>

      {/* 3. Main Flex Container */}
      <div className="lg:flex">
        {/* A. Sidebar Desktop */}
        <SidebarDesktopWrapper>
          <UserSidebar />
        </SidebarDesktopWrapper>

        {/* B. Main Content Wrapper */}
        {children}
      </div>

      {/* 4. Mobile Sidebar (Nằm ngoài luồng flex) */}
      <SidebarMobileWrapper isOpen={isMobileOpen} onClose={closeMobile}>
        <UserSidebar onLinkClick={closeMobile} />
      </SidebarMobileWrapper>
    </div>
  );
}
