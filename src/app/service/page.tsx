import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ServicesList } from "@/components/services-list";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicePage() {
  return (
    <>
      <PageHero title="Services" />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ServicesList />
        </div>
      </section>
    </>
  );
}
