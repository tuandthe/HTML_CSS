// components/ui/Input.tsx
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ className, label, id, ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 mb-1.5"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn(
          "w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#007042] focus:border-transparent transition-all placeholder:text-gray-400",
          className,
        )}
        {...props}
      />
    </div>
  );
}
