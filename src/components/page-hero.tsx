import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function PageHero({ title }: { title: string }) {
  return (
    <section className="bg-navy py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
        <nav aria-label="Breadcrumb" className="mt-4">
          <ol className="flex items-center gap-2 text-sm text-white/70">
            <li>
              <Link href="/" className="hover:text-brand">
                Sfeir Home
              </Link>
            </li>
            <li aria-hidden>
              <ChevronRight className="size-4" />
            </li>
            <li className="font-semibold text-brand">{title}</li>
          </ol>
        </nav>
      </div>
    </section>
  );
}
