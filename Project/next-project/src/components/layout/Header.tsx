// components/layout/Header.tsx
"use client";

import { cn } from "@/lib/utils";
import { Bell, Search, ChevronDown } from "lucide-react";
import Avatar from "@/components/ui/Avatar";
import { useState } from "react";

interface HeaderProps {
  sidebarCollapsed?: boolean;
}

export default function Header({ sidebarCollapsed = false }: HeaderProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 h-16 bg-white border-b border-gray-200 z-30 transition-all duration-300",
        sidebarCollapsed ? "left-20" : "left-64",
      )}
    >
      <div className="h-full px-6 flex items-center justify-between">
        {/* Search */}
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="w-full pl-10 pr-4 py-2 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition-all"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            {showNotifications && (
              <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 py-2">
                <div className="px-4 py-2 border-b border-gray-100">
                  <h3 className="font-semibold text-gray-900">Thông báo</h3>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="px-4 py-3 hover:bg-gray-50 cursor-pointer"
                    >
                      <p className="text-sm text-gray-900">Đơn hàng mới #{i}</p>
                      <p className="text-xs text-gray-500 mt-1">5 phút trước</p>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-2 border-t border-gray-100">
                  <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                    Xem tất cả
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2 p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Avatar name="Admin User" size="sm" />
              <span className="font-medium text-gray-700 hidden sm:block">
                Admin
              </span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>

            {showUserMenu && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2">
                <a
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  Hồ sơ cá nhân
                </a>
                <a
                  href="/settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  Cài đặt
                </a>
                <hr className="my-2" />
                <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50">
                  Đăng xuất
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
