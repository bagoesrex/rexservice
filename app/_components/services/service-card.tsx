import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon, MoveUpRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  // link: string
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="flex h-full flex-col gap-1 shadow-xs">
      <CardHeader className="space-y-6">
        <CardTitle className="flex flex-row items-center justify-between">
          <Icon size={28} strokeWidth={2} />
          <MoveUpRight size={20} strokeWidth={1.5} />
        </CardTitle>
        <CardDescription className="text-primary text-xl font-bold">{title}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}
