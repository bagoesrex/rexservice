import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import { Button } from "@/components/ui/button";
import CustomBadge from "@/components/ui/custom-badge";
import { ChevronRightIcon, Cpu } from "lucide-react";

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
          <Button variant={"hero"}>
            <span>Baca Artikel</span>
            <ChevronRightIcon />
          </Button>
          <Button variant={"heroOutline"}>
            <span>Download Firmware</span>
          </Button>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
