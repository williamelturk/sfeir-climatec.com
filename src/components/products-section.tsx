"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { products } from "@/lib/data";

export function ProductsSection() {
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  return (
    <section className="bg-navy py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[auto_1fr]">
          <div className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10">
            <p className="text-sm font-bold uppercase tracking-widest text-brand">
              Our Products
            </p>
            <div className="mt-6 flex items-end gap-3">
              <span className="text-6xl font-bold text-brand">53</span>
              <span className="pb-2 text-sm font-semibold text-white/80">
                Years of
                <br />
                experience
              </span>
            </div>
          </div>

          <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <li key={product.name}>
                {product.image ? (
                  <button
                    type="button"
                    onClick={() => setImgSrc(`/img/services/images/${product.image}`)}
                    className="w-full rounded-md px-3 py-2 text-left text-sm font-semibold text-white/90 transition-colors hover:bg-white/10 hover:text-brand"
                  >
                    {product.name}
                  </button>
                ) : (
                  <span className="block px-3 py-2 text-sm text-white/70">
                    {product.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Lightbox
        open={imgSrc !== null}
        close={() => setImgSrc(null)}
        slides={imgSrc ? [{ src: imgSrc }] : []}
        render={{ iconPrev: () => null, iconNext: () => null }}
      />
    </section>
  );
}
