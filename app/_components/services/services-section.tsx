import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { MessageSquareDot } from "lucide-react";
import ServiceCard from "./service-card";

import { Lock, Smartphone, Cpu, RefreshCw, ShieldOff, Wrench, Camera, AlertTriangle, HardDrive, ArrowUpDown, UserX, KeyRound, MapPin } from "lucide-react";

export const serviceList = [
    {
        icon: Lock,
        title: "UBL Resmi / Instan",
        description: "Membuka bootloader perangkat dengan metode resmi atau instan, aman tanpa kehilangan data penting.",
        link: "/",
    },
    {
        icon: Smartphone,
        title: "Flash Custom Recovery",
        description: "Instalasi custom recovery seperti TWRP atau OrangeFox agar perangkat lebih fleksibel digunakan.",
        link: "/",
    },
    {
        icon: Cpu,
        title: "Flash Custom ROM",
        description: "Ganti sistem operasi Android dengan custom ROM pilihan untuk performa dan tampilan yang lebih segar.",
        link: "/",
    },
    {
        icon: RefreshCw,
        title: "Flash Custom Kernel",
        description: "Optimalkan performa dan daya tahan baterai dengan memasang custom kernel sesuai kebutuhan.",
        link: "/",
    },
    {
        icon: ShieldOff,
        title: "Flash Auth",
        description: "Layanan flashing khusus perangkat dengan proteksi auth, aman dan profesional.",
        link: "/",
    },
    {
        icon: Wrench,
        title: "Root / Unroot",
        description: "Akses penuh ke sistem Android atau kembalikan ke kondisi standar dengan aman dan cepat.",
        link: "/",
    },
    {
        icon: Camera,
        title: "GCam",
        description: "Instalasi Google Camera (GCam) agar hasil foto lebih maksimal dengan fitur HDR+ dan Night Sight.",
        link: "/",
    },
    {
        icon: AlertTriangle,
        title: "Fix Bootloop",
        description: "Perbaikan perangkat stuck di logo atau gagal masuk sistem tanpa kehilangan data penting.",
        link: "/",
    },
    {
        icon: HardDrive,
        title: "Fix Hardbrick",
        description: "Pemulihan total perangkat mati total (hardbrick) dengan peralatan dan firmware khusus.",
        link: "/",
    },
    {
        icon: ArrowUpDown,
        title: "Upgrade / Downgrade OS",
        description: "Naik atau turunkan versi sistem operasi sesuai kebutuhan dengan metode aman dan stabil.",
        link: "/",
    },
    {
        icon: UserX,
        title: "Clean / Bypass MI Account",
        description: "Layanan bypass atau pembersihan akun Mi Cloud untuk perangkat terkunci.",
        link: "/",
    },
    {
        icon: KeyRound,
        title: "Unlock Lockscreen / FRP",
        description: "Buka kunci layar atau FRP Google Account dengan cepat dan aman tanpa kehilangan data.",
        link: "/",
    },
    {
        icon: MapPin,
        title: "Rebuild ROM / Fake GPS",
        description: "Layanan rebuild sistem atau konfigurasi GPS palsu untuk kebutuhan pengujian dan optimasi.",
        link: "/",
    },
];

export default function ServicesSection() {
    return (
        <section>
            <MaxWidthWrapper className="min-h-screen px-10 py-20 space-y-10">
                <div className="flex flex-col">
                    <div className="flex flex-row justify-between items-center">
                        <h2 className="text-4xl font-bold text-gray-900 max-w-xl">
                            Our Services
                        </h2>
                        <Button className="mt-2.5 rounded-full py-5 flex items-center gap-2">
                            <MessageSquareDot />
                            <span className="text-md">
                                Book Now
                            </span>
                        </Button>
                    </div>
                    <p className="mt-1 text-gray-600 max-w-xl">
                        Whatever your gadget problem, Rex Service is here to help. Quick fixes, honest service, and results you can rely on.
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    {serviceList.map((service) => (
                        <ServiceCard
                            key={service.title}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            link={service.link}
                        />
                    ))}
                </div>
            </MaxWidthWrapper>
        </section >
    )
}