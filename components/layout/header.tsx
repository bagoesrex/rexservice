import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed w-full bg-white/80 px-0 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-xs border-b px-4 py-2.5">
        <Link href={"/"} className="group flex items-center gap-3 text-xl font-semibold text-gray-800">
          <Image src={"/logo.svg"} alt={"main icon"} width={32} height={32} priority />
          <div className="flex flex-col">
            <span className="group-hover:underline">Rex Service</span>
            <p className="text-xs font-medium text-gray-500">Fast and reliable service.</p>
          </div>
        </Link>
      </div>
    </header>
  );
}
