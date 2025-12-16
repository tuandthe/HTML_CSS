import { cn } from "@/lib/utils";

interface BadgeProps {
  status: string;
  className?: string;
}

export function Badge({ status, className }: BadgeProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Processing":
        return "bg-blue-100 text-blue-700";
      case "Completed":
        return "bg-green-100 text-green-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <span
      className={cn(
        "px-2.5 py-0.5 rounded-full text-xs font-bold uppercase",
        getStatusColor(status),
        className,
      )}
    >
      {status}
    </span>
  );
}
