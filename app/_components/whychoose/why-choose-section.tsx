import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import { Award, Clock, Headphones, Heart, Shield, Wrench } from "lucide-react";
import FeatureCard from "./feature-card";

const features = [
  {
    icon: Shield,
    title: "100% Aman",
    description: "Proses oprek yang aman dengan mitigasi resiko yang kemungkinan terjadi.",
  },
  {
    icon: Clock,
    title: "Proses Cepat",
    description: "Pengerjaan cepat kurang lebih 45 menit untuk semua proses jika tidak ada kendala.",
  },
  {
    icon: Award,
    title: "Garansi Service",
    description: "Garansi hingga 1 minggu untuk setiap layanan yang kami kerjakan.",
  },
  {
    icon: Headphones,
    title: "Support 24/7",
    description: "Kami siap membantu kapan saja via WhatsApp atau Telegram.",
  },
  {
    icon: Wrench,
    title: "Teknisi Berpengalaman",
    description: "Dikerjakan oleh teknisi dengan pengalaman lebih dari 3 tahun.",
  },
  {
    icon: Heart,
    title: "Harga Bersahabat",
    description: "Harga transparan tanpa biaya tersembunyi dengan kualitas terjamin.",
  },
];

export default function WhyChooseSection() {
  return (
    <section id="whychoose">
      <MaxWidthWrapper className="flex flex-col items-center justify-center gap-13 py-18">
        <div className="space-y-3 text-center">
          <span className="text-primary block text-sm tracking-widest uppercase">Mengapa Memilih Kami</span>
          <h2 className="text-4xl font-bold">
            <span className="gradient-text">Keunggulan </span> REXSERVICE
          </h2>
          <p className="text-muted-foreground max-w-xl text-sm">Kami berkomitmen memberikan layanan terbaik dengan hasil yang memuaskan.</p>
        </div>
        <div className="grid w-full grid-cols-3 gap-3 px-10">
          {features.map((feature, index) => (
            <FeatureCard feature={feature} key={index} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
