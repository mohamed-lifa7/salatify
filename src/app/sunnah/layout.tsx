import type { Metadata } from "next";

import { Separator } from "@/components/ui/separator";
import { SidebarNav } from "@/components/layout/side-bar";

export const metadata: Metadata = {
  title: "Sunnah Collection",
  description:
    "Explore the teachings of Prophet Muhammad (peace be upon him) through various Hadith collections.",
};

const sidebarNavItems = [
  {
    title: "Sahih al-Bukhari",
    href: "/sunnah/sahih-bukhari",
  },
  {
    title: "Sahih Muslim",
    href: "/sunnah/sahih-muslim",
  },
  {
    title: "Sunan an-Nasa'i",
    href: "/sunnah/sunan-nasai",
  },
  {
    title: "Sunan Abi Dawud",
    href: "/sunnah/abu-dawood",
  },
  {
    title: "Jami` at-Tirmidhi",
    href: "/sunnah/al-tirmidhi",
  },
  {
    title: "Sunan Ibn Majah",
    href: "/sunnah/ibn-e-majah",
  },
  // {
  //   title: "Muwatta Malik",
  //   href: "/sunnah/malik",
  // },
  {
    title: "Musnad Ahmad",
    href: "/sunnah/musnad-ahmad",
  },
  // {
  //   title: "Sunan ad-Darimi",
  //   href: "/sunnah/darimi",
  // },
];

interface SunnahLayoutProps {
  children: React.ReactNode;
}

export default function SunnahLayout({ children }: SunnahLayoutProps) {
  return (
    <>
      <div className="space-y-6 p-10 pb-16">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Sunnah</h2>
          <p className="text-muted-foreground">
            &quot;The teachings of Prophet{" "}
            <span className="text-primary">Muhammad</span> (peace be upon him)
            are easily accessible to you&quot;
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 hidden md:block lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </>
  );
}
