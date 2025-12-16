// components/ui/Avatar.tsx
import { cn } from "@/lib/utils";
import Image from "next/image";

interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export default function Avatar({
  src,
  alt = "Avatar",
  name,
  size = "md",
  className,
}: AvatarProps) {
  const sizes = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
    xl: "w-16 h-16 text-lg",
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  if (src) {
    return (
      <div
        className={cn(
          "relative rounded-full overflow-hidden",
          sizes[size],
          className,
        )}
      >
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full bg-primary-100 text-primary-700 font-medium",
        sizes[size],
        className,
      )}
    >
      {name ? getInitials(name) : "?"}
    </div>
  );
}
