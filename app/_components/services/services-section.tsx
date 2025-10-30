import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { MessageSquareDot } from "lucide-react";

export default function ServicesSection() {
    return (
        <section>
            <MaxWidthWrapper className="min-h-screen px-10 py-20">
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 max-w-xl">
                            Our Services
                        </h2>
                        <p className="mt-4 text-gray-600 max-w-xl">
                            Whatever your gadget problem, Rex Service is here to help. Quick fixes, honest service, and results you can rely on.
                        </p>
                    </div>
                    <Button className="mt-5 rounded-full py-5 flex items-center gap-2">
                        <MessageSquareDot />
                        <span className="text-md">
                            Book Now
                        </span>
                    </Button>
                </div>
            </MaxWidthWrapper>
        </section >
    )
}