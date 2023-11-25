import { links } from "@/config/site";
import { Button } from "../ui/button";
import Link from "next/link";
import { Separator } from "../ui/separator";

export function SiteFooter() {
  return (
    <footer className="mt-6 py-6 md:py-0">
      <Separator />
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="flex items-center text-center text-sm leading-loose text-muted-foreground md:text-left ">
          Built By{" "}
          <Button asChild variant="link">
            <Link locale={false} href={links.portfolio}>
              Mohamed Lifa
            </Link>
          </Button>
        </p>
      </div>
    </footer>
  );
}
