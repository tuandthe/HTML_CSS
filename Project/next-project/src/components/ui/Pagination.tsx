// components/ui/Pagination.tsx
"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showPageNumbers?: boolean;
  maxVisiblePages?: number;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  showPageNumbers = true,
  maxVisiblePages = 5,
}: PaginationProps) {
  const getVisiblePages = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200">
      <div className="flex items-center text-sm text-gray-500">
        Trang {currentPage} / {totalPages}
      </div>

      <div className="flex items-center gap-1">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={cn(
            "p-2 rounded-lg transition-colors",
            currentPage === 1
              ? "text-gray-300 cursor-not-allowed"
              : "text-gray-600 hover:bg-gray-100",
          )}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {showPageNumbers &&
          getVisiblePages().map((page, index) => (
            <button
              key={index}
              onClick={() => typeof page === "number" && onPageChange(page)}
              disabled={page === "..."}
              className={cn(
                "min-w-[36px] h-9 px-3 rounded-lg text-sm font-medium transition-colors",
                page === currentPage
                  ? "bg-primary-600 text-white"
                  : page === "..."
                    ? "text-gray-400 cursor-default"
                    : "text-gray-600 hover:bg-gray-100",
              )}
            >
              {page}
            </button>
          ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={cn(
            "p-2 rounded-lg transition-colors",
            currentPage === totalPages
              ? "text-gray-300 cursor-not-allowed"
              : "text-gray-600 hover:bg-gray-100",
          )}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
