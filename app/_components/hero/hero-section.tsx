import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import { Button } from "@/components/ui/button";
import CustomBadge from "@/components/ui/custom-badge";
import { Rocket, Shield, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero">
      <MaxWidthWrapper className="flex min-h-screen flex-col items-center justify-center gap-5 pt-30 pb-18 text-center">
        <CustomBadge icon={Zap} label={"Unlock Potensi HP Kamu"} />
        <h1 className="text-[2.1rem] leading-10 font-bold sm:text-5xl sm:leading-12.75">
          <span className="text-foreground">Oprek Hp </span>
          <span className="gradient-text">Profesional</span>
          <br />
          <span className="text-foreground">& </span>
          <span className="gradient-text-accent">Terpercaya</span>
        </h1>
        <p className="sm:text-md text-muted-foreground mx-auto mb-3 max-w-xs text-sm sm:max-w-xl">
          Layanan UBL, Root, dan Custom ROM untuk semua jenis smartphone Android. Maksimalkan performa device kamu dengan aman.
        </p>
        <div className="flex w-full max-w-xs flex-col justify-center gap-4 sm:w-fit sm:flex-row">
          <Button variant={"hero"}>
            <Rocket className="size-4" />
            <span className="uppercase">Mulai Sekarang</span>
          </Button>
          <Button variant={"heroOutline"}>
            <Shield className="size-4" />
            <span className="uppercase">Lihat Layanan</span>
          </Button>
        </div>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          <div className="text-muted-foreground flex items-center gap-2">
            <div className="size-2 animate-pulse rounded-full bg-green-500" />
            <span className="text-sm">300+ Device Berhasil</span>
          </div>
          <div className="text-muted-foreground flex items-center gap-2">
            <div className="bg-primary size-2 animate-pulse rounded-full" />
            <span className="text-sm">Garansi Service</span>
          </div>
          <div className="text-muted-foreground flex items-center gap-2">
            <div className="bg-accent size-2 animate-pulse rounded-full" />
            <span className="text-sm">Support 24/7</span>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
