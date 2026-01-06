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
      <MaxWidthWrapper className="flex flex-col items-center justify-center gap-13 py-18">
        <div className="space-y-3 text-center">
          <span className="text-primary block text-sm tracking-widest uppercase">Layanan Kami</span>
          <h2 className="text-4xl font-bold">
            Solusi <span className="gradient-text">Lengkap</span> untuk HP Kamu
          </h2>
          <p className="text-muted-foreground max-w-xl text-sm">
            Dari unlock bootloader hingga custom ROM, kami siap membantu mengoptimalkan device Android kamu.
          </p>
        </div>
        <div className="grid w-full grid-cols-3 gap-8 px-10">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
