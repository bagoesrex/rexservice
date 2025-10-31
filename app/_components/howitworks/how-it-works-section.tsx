import MaxWidthWrapper from "@/components/layout/max-width-wrapper";

export default function HowItWorksSection() {
    return (
        <section>
            <MaxWidthWrapper className="min-h-screen px-10 py-20 space-y-10">
                <div className="flex flex-col">
                    <h2 className="text-4xl font-bold text-gray-900 max-w-xl">
                        How It Works
                    </h2>
                    <p className="mt-1 text-gray-600 max-w-xl">
                        Simple, fast, and secure process to get your Android optimized — remotely.
                    </p>
                </div>
                {/* Todo Card */}
            </MaxWidthWrapper>
        </section>
    )
}