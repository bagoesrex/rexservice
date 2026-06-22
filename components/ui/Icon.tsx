import { cn } from "@/lib/utils";

interface IconProps {
  name: string;
  size?: "sm" | "md" | "lg" | "xl";
  filled?: boolean;
  className?: string;
}

const sizeMap = {
  sm: "text-[18px]",
  md: "text-[24px]",
  lg: "text-[32px]",
  xl: "text-[48px]",
};

export default function Icon({
  name,
  size = "md",
  filled = false,
  className,
}: IconProps) {
  return (
    <span
      className={cn("material-symbols-outlined", sizeMap[size], className)}
      style={filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}
