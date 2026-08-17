import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/data";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact" />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
            <div>
              <h2 className="text-2xl font-bold text-navy">
                Get in Touch With Us
              </h2>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <aside className="space-y-8">
              <div className="rounded-2xl bg-mist p-8">
                <div className="flex items-center gap-3">
                  <Image
                    src="/img/svg/location.svg"
                    alt=""
                    width={36}
                    height={48}
                  />
                  <h3 className="text-lg font-bold text-navy">Beirut Office</h3>
                </div>
                <ul className="mt-6 space-y-4 text-sm text-ink/80">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-brand-dark" />
                    {siteConfig.address}
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 size-4 shrink-0 text-brand-dark" />
                    <a href={siteConfig.phoneHref} className="hover:text-brand-dark">
                      {siteConfig.phone}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 size-4 shrink-0 text-brand-dark" />
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="hover:text-brand-dark"
                    >
                      {siteConfig.email}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-navy p-8 text-white">
                <div className="flex items-center gap-3">
                  <Clock className="size-5 text-brand" />
                  <h3 className="text-lg font-bold">Working Hours</h3>
                </div>
                <p className="mt-4 text-sm text-white/70">
                  We are happy to meet you during our working hours. Please make
                  an appointment.
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  {siteConfig.workingHours.map((slot) => (
                    <li key={slot.days} className="flex justify-between">
                      <span className="text-white/80">{slot.days}:</span>
                      <span className="font-semibold">{slot.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl bg-brand p-8 text-center font-bold text-navy transition-colors hover:bg-brand-dark"
              >
                Message us on WhatsApp
                <span className="mt-1 block text-lg">{siteConfig.phone}</span>
              </a>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
