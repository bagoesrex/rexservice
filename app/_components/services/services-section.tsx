import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import { Layers, Terminal, Unlock } from "lucide-react";
import ServiceCard from "./service-card";
import { Service } from "@/types/service";

const services: Service[] = [
  {
    icon: Unlock,
    title: "Unlock Bootloader",
    shortTitle: "UBL",
    description: "Buka kunci bootloader untuk akses penuh ke sistem. Prasyarat untuk root dan custom ROM.",
    features: ["Support semua brand", "Proses aman", "Backup data"],
    price: "Mulai Rp 50K",
    color: "primary",
  },
  {
    icon: Terminal,
    title: "Root Access",
    shortTitle: "ROOT",
    description: "Dapatkan akses superuser untuk kontrol penuh. Install Magisk dan custom modules.",
    features: ["Magisk latest", "Hide root", "Safety passed"],
    price: "Mulai Rp 75K",
    color: "accent",
  },
  {
    icon: Layers,
    title: "Custom ROM",
    shortTitle: "ROM",
    description: "Install custom ROM pilihan kamu. Performa maksimal dengan fitur lengkap.",
    features: ["LineageOS", "Pixel Experience", "MIUI EU"],
    price: "Mulai Rp 100K",
    color: "primary",
  },
];

export default function ServicesSection() {
  return (
    <section id="services">
      <MaxWidthWrapper className="flex flex-col items-center justify-center gap-8 py-18 sm:gap-13">
        <div className="flex flex-col items-center justify-center gap-1.5 text-center sm:gap-3">
          <span className="text-primary block text-sm tracking-widest uppercase">Layanan Kami</span>
          <h2 className="text-[1.5rem] font-bold sm:text-4xl">
            Solusi <span className="gradient-text">Lengkap</span> untuk HP Kamu
          </h2>
          <p className="text-muted-foreground max-w-xs text-xs sm:max-w-xl sm:text-sm">
            Dari unlock bootloader hingga custom ROM, kami siap membantu mengoptimalkan device Android kamu.
          </p>
        </div>
        <div className="grid w-full max-w-6xl grid-cols-1 gap-3 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
