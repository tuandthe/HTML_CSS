"use client";

import Sidebar from "./Sidebar";
import { cn } from "@/lib/utils/utils";

interface SidebarMobileProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SidebarMobile({ isOpen, onClose }: SidebarMobileProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex lg:hidden transition-opacity duration-300",
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none",
      )}
    >
      {/* Backdrop (Lớp phủ mờ) */}
      <div
        className="fixed inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Container */}
      <div
        className={cn(
          "relative flex w-64 flex-col bg-white h-full transform transition-transform duration-300 ease-in-out shadow-2xl",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <Sidebar onClose={onClose} />
      </div>
    </div>
  );
}
