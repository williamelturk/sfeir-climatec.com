"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/lib/data";

export function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative bg-navy text-white">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {heroSlides.map((slide, i) => (
            <div key={i} className="relative min-w-0 flex-[0_0_100%]">
              <div className="relative h-[70vh] min-h-[480px] w-full">
                <Image
                  src={slide.img}
                  alt=""
                  fill
                  priority={i === 0}
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-navy/20" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Static overlay content (all slides share the same copy, as before) */}
      <div className="pointer-events-none absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold leading-tight sm:text-5xl">
              {heroSlides[selected].header}
            </h1>
            <p className="mt-6 text-sm leading-relaxed text-white/85 sm:text-base">
              {heroSlides[selected].content}
            </p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 right-6 flex items-center gap-3">
        <span className="text-sm font-semibold tabular-nums text-white/80">
          0{selected + 1} / 0{heroSlides.length}
        </span>
        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          className="rounded-full border border-white/40 p-2 transition-colors hover:bg-brand hover:text-navy"
          aria-label="Previous slide"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => emblaApi?.scrollNext()}
          className="rounded-full border border-white/40 p-2 transition-colors hover:bg-brand hover:text-navy"
          aria-label="Next slide"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </section>
  );
}
