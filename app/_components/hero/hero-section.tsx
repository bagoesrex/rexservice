import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import { Button } from "@/components/ui/button";
import CustomBadge from "@/components/ui/custom-badge";
import { ChevronRightIcon, Cpu, Wrench } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero">
      <MaxWidthWrapper className="flex min-h-screen flex-col items-center justify-center gap-4 pt-30 pb-18 text-center">
        <CustomBadge icon={Cpu} label={"REXSERVICE BLOG"} />
        <h1 className="text-[2.1rem] leading-10 font-bold sm:text-5xl sm:leading-12.75">
          <span className="text-foreground">Tips & </span>
          <span className="gradient-text">Trick</span>
          <br />
          <span className="text-foreground">Seputar </span>
          <span className="gradient-text-accent">Android</span>
        </h1>
        <p className="sm:text-md text-muted-foreground mx-auto mb-3 max-w-xs text-sm sm:max-w-xl">
          Kumpulan tutorial oprek Android, custom ROM, root, dan download firmware terbaru untuk berbagai device.
        </p>
        <div className="flex w-full max-w-xs flex-col justify-center gap-4 sm:w-fit sm:flex-row">
          <Button variant={"hero"} disabled>
            <span>Baca Artikel</span>
            <ChevronRightIcon />
          </Button>
          <Button variant={"heroOutline"} disabled className="relative">
            <span>Download Firmware</span>
            <div className="absolute -top-2 -right-2 z-10">
              <span className="flex items-center gap-1 rounded-md bg-orange-500 px-2 py-1 text-xs font-semibold text-white shadow-md">
                <Wrench size={12} />
                Maintenance
              </span>
            </div>
          </Button>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
