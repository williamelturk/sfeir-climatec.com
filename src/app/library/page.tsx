import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PhotoGallery } from "@/components/photo-gallery";

export const metadata: Metadata = {
  title: "Library",
};

export default function LibraryPage() {
  return (
    <>
      <PageHero title="Library" />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PhotoGallery />
        </div>
      </section>
    </>
  );
}
