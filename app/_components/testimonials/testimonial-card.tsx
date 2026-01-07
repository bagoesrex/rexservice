import { Card, CardContent } from "@/components/ui/card";
import { Testimonial } from "@/types/testimonial";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Quote, Star } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { name, device, service, rating, text, avatar } = testimonial;

  return (
    <Card>
      <CardContent>
        <div className="space-y-5">
          <Quote className="text-primary/70 size-9.5" />

          <p className="text-md text-foreground leading-relaxed">&quot; {text} &quot;</p>

          <div className="flex items-end justify-between">
            <div className="flex items-center gap-3">
              <div className="size-11 overflow-hidden rounded-full">
                <Avatar>
                  <AvatarImage src="" alt="" />
                  <AvatarFallback className="bg-primary/30 border-primary text-primary flex size-full items-center justify-center rounded-full border-[0.1rem] text-sm font-semibold">
                    {avatar}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="flex flex-col">
                <span className="text-foreground text-sm font-semibold">{name}</span>
                <p className="text-muted-foreground text-xs">{device}</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-[0.1rem]">
              <div className="flex gap-1">
                {[...Array(rating)].map((_, index) => (
                  <Star key={index} className="fill-primary text-primary size-3.5" />
                ))}
              </div>
              <span className="text-primary text-xs tracking-wider">{service}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
