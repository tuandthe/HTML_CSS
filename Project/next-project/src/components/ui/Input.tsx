// components/ui/Input.tsx
import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, type = "text", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            {label}
          </label>
        )}
        <input
          type={type}
          ref={ref}
          className={cn(
            "w-full px-4 py-2.5 border rounded-lg outline-none transition-all duration-200",
            "focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
            "placeholder:text-gray-400",
            error
              ? "border-red-500 focus:ring-red-500 focus:border-red-500"
              : "border-gray-300",
            className,
          )}
          {...props}
        />
        {error && <p className="mt-1.5 text-sm text-red-600">{error}</p>}
        {helperText && !error && (
          <p className="mt-1.5 text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
export default Input;
