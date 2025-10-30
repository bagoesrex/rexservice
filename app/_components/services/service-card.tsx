import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
    icon: LucideIcon
    title: string
    description: string
    link: string
}

export default function ServiceCard({ icon: Icon, title, description, link }: ServiceCardProps) {
    return (
        <Card className="shadow-xs flex flex-col h-full gap-3">
            <CardHeader>
                <CardTitle>
                    <Icon size={28} strokeWidth={3} />
                </CardTitle>
                <CardDescription className="text-xl font-bold text-primary">
                    {title}
                </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
                <p className="text-sm">{description}</p>
            </CardContent>
            <CardFooter className="mt-2">
                <Link href={link} className=" hover:underline underline-offset-4 flex flex-row items-center justify-center gap-1.5">
                    <span className="font-semibold">
                        Learn More
                    </span>
                    <ChevronRight size={20} className="mt-0.5" strokeWidth={3} />
                </Link>
            </CardFooter>
        </Card >
    )
}