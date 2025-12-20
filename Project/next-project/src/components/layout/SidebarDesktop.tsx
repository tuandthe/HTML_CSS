"use client";

import Sidebar from "./Sidebar";

export default function SidebarDesktop() {
  return (
    <aside className="hidden lg:block lg:w-64 lg:fixed lg:inset-y-0 z-40 border-r border-gray-200">
      <Sidebar />
    </aside>
  );
}
