import { Stat } from "@/types/stat";

interface StatItemProps {
  stat: Stat;
}

export default function StatItem({ stat }: StatItemProps) {
  const { value, suffix, label } = stat;

  return (
    <div className="text-center">
      <div className="font-display gradient-text text-3xl font-bold">
        {value}
        <span className="text-primary">{suffix}</span>
      </div>
      <p className="text-muted-foreground text-sm tracking-wider uppercase">{label}</p>
    </div>
  );
}
