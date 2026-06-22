import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import { homeHero } from "@/content/home";
import Image from "next/image";

export default function HomeHero() {
  return (
    <section id="hero">
      <MaxWidthWrapper className="flex gap-4 pt-30 pb-20 ">
        <div className="relative overflow-hidden bg-linear-to-br from-[#f2f3fe] to-[#e1e2ec] min-h-90 rounded-[50px] p-15 grid grid-cols-2 gap-4">
          <div className="absolute -top-24 -right-24 h-100 w-100 lg:h-125 lg:w-125 rounded-full bg-(--color-primary-fixed) opacity-25 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 h-75 w-75 lg:h-100 lg:w-100 rounded-full bg-(--color-secondary-fixed) opacity-20 blur-[100px] pointer-events-none" />

          <div className="">
            <div className="max-w-100">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-(--color-primary) border border-primary/20">
                <span className="text-[14px] font-bold">{homeHero.badge}</span>
              </div>

              <h1 className="mb-6 text-[50px] leading-[1.1] font-extrabold tracking-tight  ">
                {homeHero.title}
              </h1>
            </div>
            <p className="mb-10 max-w-xl text-lg leading-relaxed">
              {homeHero.description}
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative z-10 w-full max-w-md">
              <div className="aspect-[15px] overflow-hidden rounded-[2.5rem] bg-white p-4 shadow-2xl">
                <Image
                  src={homeHero.heroImage}
                  alt="Visualisasi layanan modifikasi Android Rex Service"
                  width={480}
                  height={600}
                  priority
                  className="h-full w-full rounded-4xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}