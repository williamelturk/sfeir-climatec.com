import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About Us",
};

const pillars = [
  {
    title: "Client Focus",
    description:
      "At Sfeir Climatec, we prioritize our clients and aim to exceed their expectations. We listen attentively to their needs, understand their requirements, and tailor our solutions accordingly. By providing personalized attention and delivering high-quality products and services, we ensure utmost satisfaction for our valued clients.",
  },
  {
    title: "Innovation",
    description:
      "We believe in pushing boundaries and constantly seeking innovative solutions. By fostering a culture of creativity and embracing cutting-edge technologies, we aim to stay at the forefront of the air conditioning industry. Through continuous research and development, we deliver advanced, energy-efficient systems that enhance comfort and promote sustainability.",
  },
  {
    title: "Responsible Behaviour",
    description:
      "Our employees are our greatest asset, and we invest in their growth and development. By providing a supportive and inclusive work environment, we empower our team members to reach their full potential. Through training, mentorship, and career advancement opportunities, we nurture a skilled workforce that is passionate, knowledgeable, and dedicated to delivering excellence.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Us" />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-ink/80">
            Sfeir Climatec is a leading air conditioning company dedicated to
            delivering exceptional service and performance. Our company is built
            upon a strong commitment to cultivating a culture of Excellence
            Plus, which serves as the foundation for all our operations
            worldwide. By embracing the four key elements of Excellence Plus
            performance—Client Focus, Innovation, Responsible Behavior, and
            People Development—we strive to fulfill our vision of becoming the
            preferred choice for all stakeholders.
          </p>
        </div>
      </section>

      <section className="bg-mist py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-dark">
            You have a reason
          </span>
          <h2 className="mt-2 text-3xl font-bold text-navy">Just Choose Us!</h2>
          <p className="mt-6 leading-relaxed text-ink/80">
            Choose Sfeir Climatec for your air conditioning needs and experience
            the unparalleled excellence we bring to the industry. We are
            committed to providing innovative solutions, outstanding client
            service, and sustainable practices that make a difference.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl space-y-10 px-4 sm:px-6 lg:px-8">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="border-l-4 border-brand pl-6">
              <h3 className="text-xl font-bold text-navy">{pillar.title}</h3>
              <p className="mt-3 leading-relaxed text-ink/80">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
