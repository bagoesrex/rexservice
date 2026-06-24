import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import { homeHero } from "@/content/home";
import { createWhatsappUrl } from "@/lib/routes";
import {
  ArrowRight,
  BadgeCheck,
  MessageSquareText,
  SquareTerminal,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  const waUrl = createWhatsappUrl(homeHero.primaryCtaMessage);

  return (
    <section id="hero">
      <MaxWidthWrapper className="flex gap-4 pt-30 pb-20">
        <div className="relative overflow-hidden bg-linear-to-br from-surface-container-low to-[#e1e2ec] min-h-90 rounded-t-[30px] rounded-b-[15px] md:rounded-[50px] p-5 md:px-15 md:py-10 w-full grid grid-cols-1 md:grid-cols-2 md:gap-8">
          <div className="absolute -top-24 -right-24 h-100 w-100 lg:h-125 lg:w-125 rounded-full bg-(--color-primary-fixed) opacity-25 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 h-75 w-75 lg:h-100 lg:w-100 rounded-full bg-(--color-secondary-fixed) opacity-20 blur-[100px] pointer-events-none" />

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-(--color-primary) border border-primary/20">
              <span className="text-[14px] font-bold">{homeHero.badge}</span>
            </div>

            <h1 className="max-w-full md:max-w-150 mb-6 text-[30px] md:text-[50px] leading-[1.1] font-extrabold tracking-tight [word-spacing:6px]">
              {homeHero.title}
            </h1>
            <p className="mb-5 md:mb-10 max-w-120 text-sm text-(--color-on-surface-variant) md:text-lg leading-relaxed ">
              {homeHero.description}
            </p>
            <div className="flex flex-wrap text-sm md:justify-start justify-center md:text-lg gap-4 mb-5">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-(--color-primary) px-5 py-2.5 md:px-8 md:py-4 font-semibold text-(--color-on-primary) shadow-lg shadow-(--color-primary)/30 transition-all hover:brightness-110 hover:-translate-y-0.5 active:scale-95"
              >
                <MessageSquareText />
                {homeHero.primaryCtaLabel}
              </a>
              <Link
                href={homeHero.secondaryCtaHref}
                className="inline-flex items-center gap-2 rounded-full border-2 border-(--color-primary) px-5 py-2.5 md:px-8 md:py-4 font-semibold text-(--color-primary) transition-all hover:bg-(--color-primary)/10 active:scale-95"
              >
                {homeHero.secondaryCtaLabel}
                <ArrowRight />
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative z-10 w-full max-w-md">
              <div className="relative aspect-[15px] rounded-[2.5rem] bg-white p-4 shadow-2xl">
                <Image
                  src={homeHero.heroImage}
                  alt="Visualisasi layanan modifikasi Android Rex Service"
                  width={480}
                  height={600}
                  priority
                  className="h-full w-full rounded-4xl object-cover"
                />

                <div className="absolute -top-2 -right-2 md:-top-5 md:-right-5 rounded-md md:rounded-2xl glass-card p-2.5 md:p-4 shadow-2xl">
                  <SquareTerminal className="text-primary" strokeWidth={2.2} />
                </div>
                <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-6 glass-card rounded-md md:rounded-2xl p-2.5 md:p-4 shadow-xl border border-(--color-outline-variant)">
                  <div className="flex items-center gap-3">
                    <div className="flex size-5 md:size-10 items-center justify-center rounded-full bg-(--color-primary)/10">
                      <BadgeCheck className="text-primary" strokeWidth={2.2} />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-[14px] font-bold leading-tight text-(--color-on-surface)">
                        Teknisi Terverifikasi
                      </p>
                      <p className="text-[8px] md:text-[12px] text-(--color-on-surface-variant)">
                        Layanan Bergaransi
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
