import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full bg-white/80 backdrop-blur-md px-0 lg:px-2 fixed">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 shadow-[0px_2px_5px_rgba(0,0,0,0.27)] rounded-xs">
                <Link href={"/"} className="flex items-center gap-3 text-xl font-semibold text-gray-800 group">
                    <Image src={"/logo.svg"} alt={"main icon"} width={32} height={32} priority />
                    <div className="flex flex-col">
                        <span className="group-hover:underline">Rex Service</span>
                        <p className="text-xs text-gray-500 font-medium">Fast and reliable service.</p>
                    </div>
                </Link>
            </div>
        </header>
    )
}