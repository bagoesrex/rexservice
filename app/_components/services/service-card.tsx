import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Service, ServiceColor } from "@/types/service";
import { ArrowRight, Dot } from "lucide-react";

interface ServiceCardProps {
  service: Service;
}

const serviceColorStyles: Record<
  ServiceColor,
  {
    bgColor: string;
    textColor: string;
    dotColor: string;
  }
> = {
  primary: {
    bgColor: "bg-primary/35",
    textColor: "text-primary",
    dotColor: "text-primary",
  },
  accent: {
    bgColor: "bg-accent/35",
    textColor: "text-accent",
    dotColor: "text-accent",
  },
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const { icon: Icon, title, shortTitle, description, features, price, color } = service;

  const styles = serviceColorStyles[color];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="space-y-3">
          <div className={cn(`size-fit rounded-md p-3`, styles.bgColor, styles.textColor)}>
            <Icon size={20} strokeWidth={2} />
          </div>
          <span className={cn(`block size-fit rounded-md px-1.75 py-1 text-[10px] font-light tracking-widest`, styles.bgColor, styles.textColor)}>
            {shortTitle}
          </span>
          <p>{title}</p>
        </CardTitle>
        <CardDescription>
          <p className="text-[12.5px]">{description}</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col">
          {features.map((feature, index) => (
            <div key={index} className="-ml-2 flex items-center">
              <Dot className={cn(styles.dotColor)} />
              <span className="text-muted-foreground text-[12px]">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-center justify-between">
          <span className="text-foreground font-semibold">{price}</span>
          <Button variant={"ghost"} className="hover:text-foreground hover:bg-transparent">
            <span className="font-light tracking-widest">Detail</span>
            <ArrowRight />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
