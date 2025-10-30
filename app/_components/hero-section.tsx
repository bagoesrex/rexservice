import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section>
            <MaxWidthWrapper className="min-h-screen py-18 grid grid-cols-7">
                <div className="col-span-4 px-10 py-20">
                    <h1 className="text-5xl font-bold text-gray-900 max-w-xl">
                        Professional Fast Reliable Device Repair Services for Your Gadget
                    </h1>
                    <p className="mt-4 text-gray-600 max-w-xl">
                        At Rex Service, we fix your gadgets quickly and professionally - ensuring every repair is handled with care, precision, and affordability.
                    </p>
                </div>
                <div className="col-span-3 h-100 flex justify-center items-center pt-20">
                    <Image src={"/hero-image.avif"} alt={"hero-image"} width={500} height={500} />
                </div>
            </MaxWidthWrapper>
        </section>
    )
}