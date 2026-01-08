import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import { Stat } from "@/types/stat";
import StatItem from "./stat-item";

const stats: Stat[] = [
  { value: 300, suffix: "+", label: "Device Berhasil" },
  { value: 10, suffix: "+", label: "Brand Supported" },
  { value: 99, suffix: "%", label: "Success Rate" },
  { value: 24, suffix: "/7", label: "Support Aktif" },
];

export default function StatsSection() {
  return (
    <section id="stats">
      <MaxWidthWrapper className="grid grid-cols-2 gap-8 py-15 sm:grid-cols-4">
        {stats.map((stat, index) => (
          <StatItem stat={stat} key={index} />
        ))}
      </MaxWidthWrapper>
    </section>
  );
}
