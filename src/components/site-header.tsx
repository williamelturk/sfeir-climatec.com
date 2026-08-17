"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";
import { ProductsDrawer } from "@/components/products-drawer";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" aria-label="Sfeir Climatec home">
          <Image
            src="/img/desktop-logo.png"
            alt="Sfeir Climatec"
            width={212}
            height={82}
            className="h-14 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-semibold uppercase tracking-wide transition-colors hover:text-brand",
                pathname === link.href ? "text-brand" : "text-white/90"
              )}
            >
              {link.label}
            </Link>
          ))}
          <ProductsDrawer triggerClassName="text-white/90 hover:text-brand" />
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-bold text-navy transition-colors hover:bg-brand-dark"
          >
            <Phone className="size-4" />
            {siteConfig.phone}
          </a>
        </nav>

        {/* Mobile trigger */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-white md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-white/10 bg-navy px-4 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block rounded-md px-3 py-2 text-base font-semibold",
                    pathname === link.href
                      ? "bg-white/10 text-brand"
                      : "text-white/90 hover:bg-white/10"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="px-3 py-2">
              <ProductsDrawer triggerClassName="text-white/90 hover:text-brand" />
            </li>
            <li className="mt-3">
              <a
                href={siteConfig.phoneHref}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-4 py-2.5 text-sm font-bold text-navy"
              >
                <Phone className="size-4" />
                {siteConfig.phone}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
