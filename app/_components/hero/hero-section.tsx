import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section>
      <MaxWidthWrapper className="grid min-h-screen grid-cols-7 py-18">
        <div className="col-span-4 px-10 py-20">
          <h1 className="max-w-xl text-5xl font-bold text-gray-900">Professional Fast Reliable Device Repair Services for Your Gadget</h1>
          <p className="mt-4 max-w-xl text-gray-600">
            At Rex Service, we fix your gadgets quickly and professionally - ensuring every repair is handled with care, precision, and affordability.
          </p>
        </div>
        <div className="col-span-3 flex h-100 items-center justify-center pt-20">
          <Image src={"/hero-image.avif"} alt={"hero-image"} width={500} height={500} />
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
