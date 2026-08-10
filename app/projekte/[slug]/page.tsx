import Image from "next/image";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/shared/CtaBand";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/ui/Container";
import { calcHref } from "@/lib/content/nav";
import { getProject, projects } from "@/lib/content/projects";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return buildMetadata({
    title: project.title,
    description: project.task,
    path: `/projekte/${project.slug}/`,
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Start", path: "/" },
          { name: "Projekte", path: "/projekte/" },
          { name: project.ort },
        ])}
      />
      <PageHero
        h1={project.title}
        lead={project.task}
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Projekte", href: "/projekte/" },
          { label: project.ort },
        ]}
        image={project.image}
        imageAlt={project.imageAlt}
      />
      <section className="bg-white py-14 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            {project.placeholder ? (
              <p className="rounded-2xl bg-mint px-4 py-3 text-sm font-medium text-forest">
                Platzhalter-Fallstudie – Kennzahlen und Fotos werden durch
                freigegebene Projekte ersetzt.
              </p>
            ) : null}
            <div>
              <h2 className="text-2xl font-bold text-forest">Ausgangslage</h2>
              {(project.body || []).map((p) => (
                <p key={p} className="mt-4 leading-relaxed text-gray-600">
                  {p}
                </p>
              ))}
            </div>
            {project.solution ? (
              <div>
                <h2 className="text-2xl font-bold text-forest">Lösung</h2>
                <p className="mt-4 leading-relaxed text-gray-600">
                  {project.solution}
                </p>
              </div>
            ) : null}
            {project.installed?.length ? (
              <div>
                <h2 className="text-2xl font-bold text-forest">
                  Was installiert wurde
                </h2>
                <ul className="mt-4 space-y-2">
                  {project.installed.map((item) => (
                    <li key={item} className="flex gap-3 text-gray-600">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-lime" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          <aside className="h-fit space-y-4 rounded-3xl border border-gray-100 bg-ice p-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                className="object-cover"
                sizes="400px"
              />
            </div>
            {project.gallery?.map((shot) => (
              <div
                key={shot.src}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>
            ))}
            <dl className="space-y-3 text-sm">
              <Row label="Ort" value={`${project.ort}, ${project.region}`} />
              <Row label="Gartentyp" value={project.gardenType} />
              <Row label="Fläche" value={`${project.areaM2} m²`} />
              <Row label="Zonen" value={String(project.zones)} />
              {project.waterSource ? (
                <Row label="Wasser" value={project.waterSource} />
              ) : null}
              {project.duration ? (
                <Row label="Dauer" value={project.duration} />
              ) : null}
              {project.aftercare ? (
                <Row label="Danach" value={project.aftercare} />
              ) : null}
            </dl>
            {project.constraints?.length ? (
              <div>
                <p className="text-sm font-semibold text-forest">Einschränkungen</p>
                <ul className="mt-2 space-y-1 text-sm text-gray-600">
                  {project.constraints.map((c) => (
                    <li key={c}>• {c}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </aside>
        </Container>
      </section>
      <CtaBand
        title={`Bewässerung in der Region ${project.region} anfragen`}
        primaryLabel="Garten berechnen"
        primaryHref={calcHref}
        secondaryLabel="Kontakt"
        secondaryHref="/kontakt/"
      />
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-gray-100 pb-2">
      <dt className="text-gray-600">{label}</dt>
      <dd className="text-right font-medium text-forest">{value}</dd>
    </div>
  );
}
