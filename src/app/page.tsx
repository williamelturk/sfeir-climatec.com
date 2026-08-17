import { HeroSlider } from "@/components/hero-slider";
import { IntroSection } from "@/components/intro-section";
import { ServicesGrid } from "@/components/services-grid";
import { ProductsSection } from "@/components/products-section";
import { PrinciplesSection } from "@/components/principles-section";
import { PhotoGallery } from "@/components/photo-gallery";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <IntroSection />
      <ServicesGrid />
      <ProductsSection />
      <PrinciplesSection />
      <section className="bg-white pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PhotoGallery />
        </div>
      </section>
    </>
  );
}
