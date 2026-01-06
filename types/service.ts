import { LucideIcon } from "lucide-react";

export type ServiceColor = "primary" | "accent";

export interface Service {
  icon: LucideIcon;
  title: string;
  shortTitle: string;
  description: string;
  features: string[];
  price: string;
  color: ServiceColor;
}
