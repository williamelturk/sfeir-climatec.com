import { principles } from "@/lib/data";

export function PrinciplesSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Our Guiding Principles
            </h2>
            <p className="mt-6 leading-relaxed text-ink/80">
              For over 35 years, the Sfeir family has been forging lasting
              relationships and delivering exceptional projects. As a diversified
              air conditioning company, Sfeir Climatec is renowned as one of the
              leading providers in the air conditioning industry, serving Lebanon
              and beyond.
            </p>
            <p className="mt-4 leading-relaxed text-ink/80">
              With an extensive portfolio of long-term clients, we are a team of
              seasoned professionals with a wealth of experience and expertise in
              air conditioning solutions across various sectors. Our commitment
              to excellence and customer satisfaction sets us apart as a trusted
              partner in delivering top-quality cooling solutions.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="relative overflow-hidden rounded-2xl border border-navy/10 bg-mist p-6"
              >
                <span className="absolute -right-2 -top-4 text-7xl font-bold text-navy/10">
                  {principle.number}
                </span>
                <h3 className="text-lg font-bold text-navy">{principle.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
