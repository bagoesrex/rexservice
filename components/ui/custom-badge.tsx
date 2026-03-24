import { LucideIcon } from "lucide-react";
import { Badge } from "./badge";
import { cn } from "@/lib/utils";

interface BadgeCustom {
  icon: LucideIcon;
  label: string;
  className?: string;
}

export default function CustomBadge({ icon: Icon, label, className }: BadgeCustom) {
  return (
    <Badge className={cn(`bg-primary/5 border-primary/80 text-primary gap-2 border-[0.2px] px-3.5 py-2.25 ${className}`)}>
      <Icon />
      <span className="leading-none">{label}</span>
    </Badge>
  );
}
