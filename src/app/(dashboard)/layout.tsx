import Menu from "@/components/Menu";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import AdminPage from "./admin/page";
export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return ( 
    <div className="h-screen flex">
{/* Left */}
<div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]" >
<Link href="/"  className="flex items-center justify-center lg:justify-start gap-2">
<Image src="/logo.png" alt="logo" height={32} width={32} />
<span className="hidden lg:block">Juhi AI</span>
</Link>
<Menu/>
</div>

{/* Right */}
<div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F9FA] overflowX-scroll">
<Navbar/>
<AdminPage/>
</div>
    </div>
    )
  }
  