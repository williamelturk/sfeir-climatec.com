"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import Lightbox from "yet-another-react-lightbox";
import { PackageSearch } from "lucide-react";
import { products } from "@/lib/data";
import { cn } from "@/lib/utils";

/**
 * Replaces the old vertical topbar/sidebar "Products" widget:
 * a slide-over panel listing all products, with a lightbox preview
 * for products that have an image.
 */
export function ProductsDrawer({ triggerClassName }: { triggerClassName?: string }) {
  const [open, setOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-navy transition-colors hover:text-brand-dark",
          triggerClassName
        )}
      >
        <PackageSearch className="size-4" />
        Products
      </button>

      {/* Portal to <body>: the sticky header's backdrop-blur creates a new
          containing block, which would trap this fixed overlay inside it. */}
      {open &&
        createPortal(
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-navy/60"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <aside className="absolute right-0 top-0 flex h-full w-80 max-w-[85vw] flex-col bg-navy p-6 text-white shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold">Our Products</h3>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md p-1 text-white/70 hover:text-white"
                aria-label="Close products panel"
              >
                ✕
              </button>
            </div>
            <ul className="flex-1 space-y-1 overflow-y-auto">
              {products.map((product) => (
                <li key={product.name}>
                  {product.image ? (
                    <button
                      type="button"
                      onClick={() => setImgSrc(`/img/services/images/${product.image}`)}
                      className="w-full rounded-md px-3 py-2 text-left text-sm text-white/90 transition-colors hover:bg-white/10 hover:text-brand"
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
          </aside>
        </div>,
        document.body
      )}

      <Lightbox
        open={imgSrc !== null}
        close={() => setImgSrc(null)}
        slides={imgSrc ? [{ src: imgSrc }] : []}
        render={{ iconPrev: () => null, iconNext: () => null }}
      />
    </>
  );
}
