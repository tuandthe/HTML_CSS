"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  options: (SelectOption | string)[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  label?: string;
}

export function Select({
  options,
  value,
  onChange,
  placeholder = "Select option",
  className,
  label,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const normalizedOptions: SelectOption[] = options.map((opt) =>
    typeof opt === "string" ? { label: opt, value: opt } : opt,
  );

  // Find label
  const selectedLabel =
    normalizedOptions.find((opt) => opt.value === value)?.label || value;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={cn("relative", className)} ref={containerRef}>
      {/* Label */}
      <div className="flex items-center gap-3">
        {label && (
          <span className="font-medium text-sm text-gray-900 whitespace-nowrap">
            {label}
          </span>
        )}

        {/* Button Trigger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "relative w-full bg-white rounded-lg py-2.5 pl-4 pr-10 text-left text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#007042] transition-all",
            isOpen
              ? "border-[#007042] ring-1 ring-[#007042]"
              : "hover:border-gray-400",
          )}
        >
          <span className={cn("block truncate", !value && "text-gray-500")}>
            {value ? selectedLabel : placeholder}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ChevronDown
              size={16}
              className={cn(
                "text-gray-500 transition-transform",
                isOpen && "rotate-180",
              )}
            />
          </span>
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-50 mt-1 w-full min-w-[180px] right-0 bg-white rounded-lg shadow-lg border border-gray-200 py-1 max-h-60 overflow-auto focus:outline-none animate-in fade-in zoom-in-95 duration-100">
          {normalizedOptions.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={cn(
                "relative cursor-pointer select-none py-2.5 pl-4 pr-9 text-sm transition-colors",
                "hover:bg-[#007042] hover:text-white",
                value === option.value
                  ? "text-[#007042] font-semibold bg-green-50 hover:bg-[#007042] hover:text-white"
                  : "text-gray-900",
              )}
            >
              <span className="block truncate">{option.label}</span>

              {value === option.value && (
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#007042] ui-hover:text-white">
                  <Check size={16} />
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
