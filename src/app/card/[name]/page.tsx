import type { Metadata } from "next";
import { team } from "@/lib/data";

export const metadata: Metadata = {
  title: "Business Card",
};

export default async function CardPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const decoded = decodeURIComponent(name);

  const member = team.find(
    (m) =>
      m.slug === decoded.toLowerCase() ||
      m.name.toLowerCase() === decoded.toLowerCase()
  );

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-mist px-4 py-16">
      <div className="w-full max-w-md rounded-2xl bg-white p-10 text-center shadow-xl">
        <h1 className="text-3xl font-bold text-navy">
          {member?.name ?? decoded}
        </h1>
        <p className="mt-1 text-lg text-ink/60">{member?.title ?? "Title"}</p>

        {member ? (
          <dl className="mt-8 space-y-5 text-sm">
            <div>
              <dt className="font-bold text-navy">Address</dt>
              <dd className="mt-1 text-ink/70">{member.address}</dd>
            </div>
            <div>
              <dt className="font-bold text-navy">Phone</dt>
              <dd className="mt-1 text-ink/70">{member.phone}</dd>
            </div>
            <div>
              <dt className="font-bold text-navy">Email</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${member.email}`}
                  className="text-accent hover:underline"
                >
                  {member.email}
                </a>
              </dd>
            </div>
          </dl>
        ) : (
          <p className="mt-8 text-sm text-ink/60">No additional info available.</p>
        )}
      </div>
    </div>
  );
}
