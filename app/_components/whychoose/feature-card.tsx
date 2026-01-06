import { Card, CardContent } from "@/components/ui/card";
import { Feature } from "@/types/feature";

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  const { icon: Icon, title, description } = feature;

  return (
    <Card>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-3.5">
            <div className="bg-primary/35 text-primary size-fit rounded-md p-3">
              <Icon size={20} strokeWidth={2} />
            </div>
            <span className="text-foreground font-semibold">{title}</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
