"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function IntroSection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-brand-dark">
              Let us introduce
            </span>
            <h2 className="mt-2 text-3xl font-bold text-navy sm:text-4xl">
              Sfeir Climatec
            </h2>
            <p className="mt-6 max-w-2xl leading-relaxed text-ink/80">
              The Sfeir family has been cultivating enduring relationships and
              delivering lasting projects for more than 47 years. Our commitment
              extends beyond air conditioning technology as we construct secure
              environments and implement eco-friendly solutions within the
              communities we serve. Above all, we foster strong connections that
              empower us to construct anything, anywhere. Regardless of the task
              at hand, we consistently surpass expectations.
            </p>
            <button
              type="button"
              onClick={() => setShowVideo(true)}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-accent"
            >
              <Play className="size-4 fill-current" />
              Watch our video
            </button>
          </div>

          <div className="rounded-2xl bg-navy p-8 text-white shadow-xl">
            <p className="max-w-56 text-sm font-semibold text-white/80">
              The Lebanese Forefront of Air Conditioning Technology
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
        </div>
      </div>

      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/90 p-4">
          <button
            type="button"
            onClick={() => setShowVideo(false)}
            className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Close video"
          >
            <X className="size-6" />
          </button>
          <div className="aspect-video w-full max-w-4xl">
            <iframe
              className="h-full w-full rounded-xl"
              src={siteConfig.youtubeVideo}
              title="Sfeir Climatec video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
