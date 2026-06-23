import Image from "next/image";
import Link from "next/link";

const navbars = [
  { name: "Layanan", href: "#services" },
  { name: "Tentang", href: "#whychoose" },
  { name: "Testimoni", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
];

export default function Header() {
  return (
    <header className="fixed w-full z-50 border-b bg-white/20 px-0 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-xs px-4 py-2.75">
        <Link href={"/"} className="flex items-center gap-3">
          <div className="bg-primary/20 relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-md">
            <Image
              src="/logo.png"
              alt="main icon"
              width={32}
              height={32}
              priority
              className="absolute scale-125"
            />
          </div>
          <div className="flex flex-col">
            <p className="tracking-wide uppercase font-extrabold">
              <span className="text-primary ">Rex</span>
              Service
            </p>
            <p className="text-muted-foreground text-xs font-medium tracking-[0.4px]">
              Jasa Oprek Android.
            </p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 sm:flex">
          {navbars.map((navbar, index) => (
            <a
              key={index}
              href={navbar.href}
              className="text-muted-foreground hover:text-primary text-sm font-medium tracking-wider uppercase transition-colors duration-300"
            >
              {navbar.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
