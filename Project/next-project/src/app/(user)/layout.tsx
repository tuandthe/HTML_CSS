"use client";

import Sidebar from "@/components/layout/Sidebar";
import { cn } from "@/lib/utils";
import { Menu, MessageSquare } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  return (
    /* SIDEBAR  DESKTOP */
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">
      <div className="hidden md:block h-full">
        <Sidebar />
      </div>

      {/* SIDEBAR  MOBILE */}
      <div
        className={cn(
          "fixed inset-0 z-50 flex md:hidden transition-opacity duration-300",
          isMobileSidebarOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <div
          className="fixed inset-0 bg-black/50 transition-opacity"
          onClick={() => setIsMobileSidebarOpen(false)}
        ></div>

        <div
          className={cn(
            "relative flex w-64 flex-col bg-white h-full transform transition-transform duration-300 ease-in-out",
            isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <Sidebar onClose={() => setIsMobileSidebarOpen(false)} />
        </div>
      </div>

      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* HEADER MOBILE */}
        <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between md:hidden shrink-0">
          {/* Menu + Title */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileSidebarOpen(true)}
              className="p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <Menu size={24} />
            </button>
            <span className="font-bold text-lg text-gray-900">My Account</span>
          </div>

          {/* Tickets Link */}
          <Link
            href="/tickets"
            className="flex items-center gap-2 text-green-700 font-medium text-sm hover:underline"
          >
            <MessageSquare size={18} />
            Tickets
          </Link>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50">
          {/* <div className="max-w-6xl mx-auto"> */}
          <div className="max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
