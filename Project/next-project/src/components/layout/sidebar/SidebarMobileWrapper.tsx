"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils/utils";

interface SidebarMobileProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function SidebarMobileWrapper({
  isOpen,
  onClose,
  children,
}: SidebarMobileProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
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
          "fixed inset-0 bg-black/60 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
      />

      {/* Sidebar Content Container */}
      <div
        className={cn(
          "relative flex w-64 flex-col bg-woo-card h-[100dvh] transform transition-transform duration-300 ease-in-out shadow-2xl border-r border-woo-border",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Close Button Mobile */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-woo-secondary hover:bg-woo-bg rounded-full z-50"
        >
          <X size={20} />
        </button>

        {children}
      </div>
    </div>
  );
}