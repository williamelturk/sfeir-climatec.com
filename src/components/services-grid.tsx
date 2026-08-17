import Image from "next/image";
import { homeServices } from "@/lib/data";

export function ServicesGrid() {
  return (
    <section className="bg-mist py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homeServices.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
            >
              <Image
                src={service.icon}
                alt=""
                width={64}
                height={62}
                className="transition-transform group-hover:scale-110"
              />
              <h3 className="mt-6 text-lg font-bold text-navy">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
