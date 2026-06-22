import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MaxWidthWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function MaxWidthWrapper({ children, className }: MaxWidthWrapperProps) {
  return <div className={cn("mx-auto w-full max-w-7xl px-5.5", className)}>{children}</div>;
}