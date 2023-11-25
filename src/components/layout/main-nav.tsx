"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">Salaatify</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/prayers"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/prayers")
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          Prayer times
        </Link>
        <Link
          href="/allah-names"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/allah-names")
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          Allah Names
        </Link>
        <Link
          href="/qibla"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/qibla")
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          Qibla
        </Link>
        <Link
          href="/sunnah"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/sunnah")
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          Sunnah
        </Link>
      </nav>
    </div>
  );
}
