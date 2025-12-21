"use client";

import Sidebar from "./Sidebar";
import { cn } from "@/lib/utils/utils";
import { useEffect } from "react";

interface SidebarMobileProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SidebarMobile({ isOpen, onClose }: SidebarMobileProps) {
  // Prevent background scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[50] flex lg:hidden",
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      )}
    >
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/60 transition-opacity duration-300 ease-in-out",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
      />

      {/* Sidebar Container */}
      <div
        className={cn(
"relative flex w-64 flex-col bg-woo-card h-[100dvh] transform transition-transform duration-300 ease-in-out shadow-2xl",          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <Sidebar onClose={onClose} className="h-full" />
      </div>
    </div>
  );
}