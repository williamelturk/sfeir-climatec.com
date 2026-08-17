import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <nav>
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-semibold uppercase tracking-wide text-white/80 transition-colors hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="text-center text-sm text-white/60 md:text-right">
            <p>
              {siteConfig.address} ·{" "}
              <a href={siteConfig.phoneHref} className="hover:text-brand">
                {siteConfig.phone}
              </a>{" "}
              ·{" "}
              <a href={`mailto:${siteConfig.email}`} className="hover:text-brand">
                {siteConfig.email}
              </a>
            </p>
            <p className="mt-2">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-white/80">Sfeir Climatec</span>. All
              rights reserved.
            </p>
            <p className="mt-3 text-[0.78rem] text-white/60">
              Built by{" "}
              <a
                href="https://wa.me/96171718971"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold tracking-[0.5px] text-brand hover:underline"
              >
                WT Dev
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
