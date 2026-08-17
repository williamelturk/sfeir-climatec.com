"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import { services, products } from "@/lib/data";

export function ServicesList() {
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  const openImage = (image?: string) => {
    if (image) setImgSrc(`/img/services/images/${image}`);
  };

  return (
    <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
      {/* Main list */}
      <div>
        <h2 className="text-2xl font-bold text-navy">What we offer</h2>
        <p className="mt-4 leading-relaxed text-ink/80">
          Bring forward win-win solutions and proactive strategies to dominate
          the air conditioning industry. Embracing the new normal shaped by the
          evolving generation X, we strive to deliver unparalleled comfort and
          efficiency for our residential and commercial clients.
        </p>

        <ul className="mt-10 space-y-8">
          {services.map((service) => (
            <li
              key={service.id}
              className="flex flex-col gap-5 rounded-2xl border border-navy/10 p-5 sm:flex-row"
            >
              <button
                type="button"
                onClick={() => openImage(service.image)}
                disabled={!service.image}
                className="relative h-40 w-full shrink-0 overflow-hidden rounded-xl sm:w-52 disabled:cursor-default"
                aria-label={`View ${service.title}`}
              >
                <Image
                  src={`/img/services/thumbs/${service.thumb}`}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                  sizes="(min-width: 640px) 13rem, 100vw"
                />
              </button>
              <div>
                <h3 className="text-lg font-bold text-navy">
                  {service.image ? (
                    <button
                      type="button"
                      onClick={() => openImage(service.image)}
                      className="text-left hover:text-brand-dark"
                    >
                      {service.title}
                    </button>
                  ) : (
                    service.title
                  )}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {service.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Sidebar */}
      <aside className="space-y-8">
        <div className="rounded-2xl bg-navy p-8 text-white">
          <h3 className="text-lg font-bold">Full list of services</h3>
          <ul className="mt-4 space-y-1">
            {products.map((product) => (
              <li key={product.name}>
                {product.image ? (
                  <button
                    type="button"
                    onClick={() => openImage(product.image)}
                    className="w-full rounded-md px-2 py-1.5 text-left text-sm text-white/90 transition-colors hover:bg-white/10 hover:text-brand"
                  >
                    {product.name}
                  </button>
                ) : (
                  <span className="block px-2 py-1.5 text-sm text-white/70">
                    {product.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-brand p-8 text-navy">
          <p className="font-semibold leading-relaxed">
            Let&apos;s get started! Get in touch with us today to receive a
            complimentary quote for your upcoming air conditioning project.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-navy px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-accent"
          >
            Request an estimate
          </Link>
        </div>
      </aside>

      <Lightbox
        open={imgSrc !== null}
        close={() => setImgSrc(null)}
        slides={imgSrc ? [{ src: imgSrc }] : []}
        render={{ iconPrev: () => null, iconNext: () => null }}
      />
    </div>
  );
}
