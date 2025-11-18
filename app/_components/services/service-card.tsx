import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon, MoveUpRight } from "lucide-react";

interface ServiceCardProps {
    icon: LucideIcon
    title: string
    description: string
    // link: string
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
    return (
        <Card className="shadow-xs flex flex-col h-full gap-1">
            <CardHeader className="space-y-6">
                <CardTitle className="flex flex-row justify-between items-center">
                    <Icon size={28} strokeWidth={2} />
                    <MoveUpRight size={20} strokeWidth={1.5} />
                </CardTitle>
                <CardDescription className="text-xl font-bold text-primary">
                    {title}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm">{description}</p>
            </CardContent>
        </Card >
    )
}