import MaxWidthWrapper from "@/components/layout/max-width-wrapper";

export default function HowItWorksSection() {
  return (
    <section>
      <MaxWidthWrapper className="min-h-screen space-y-10 px-10 py-20">
        <div className="flex flex-col">
          <h2 className="max-w-xl text-4xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-1 max-w-xl text-gray-600">Simple, fast, and secure process to get your Android optimized — remotely.</p>
        </div>
        {/* Todo Card */}
      </MaxWidthWrapper>
    </section>
  );
}
