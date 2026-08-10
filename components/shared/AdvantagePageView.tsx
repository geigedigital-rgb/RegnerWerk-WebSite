import Image from "next/image";
import { CtaBand } from "@/components/shared/CtaBand";
import { FaqBand } from "@/components/shared/FaqBand";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHero } from "@/components/shared/PageHero";
import { ProcessSteps } from "@/components/shared/ProcessSteps";
import { RelatedLinks } from "@/components/shared/RelatedLinks";
import { Container } from "@/components/ui/Container";
import { advantageVisuals } from "@/lib/content/advantage-visuals";
import type { AdvantagePage } from "@/lib/content/advantages";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo";

export function AdvantagePageView({
  page,
  breadcrumbs,
}: {
  page: AdvantagePage;
  breadcrumbs: { label: string; href?: string }[];
}) {
  const visual = advantageVisuals[page.seo.path];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: page.h1,
            description: page.promise.body,
            path: page.seo.path,
          }),
          breadcrumbSchema(
            breadcrumbs.map((b) => ({ name: b.label, path: b.href })),
          ),
          ...(page.faqs.length ? [faqSchema(page.faqs)] : []),
        ]}
      />
      <PageHero
        h1={page.h1}
        lead={page.promise.body}
        breadcrumbs={breadcrumbs}
        image={visual?.heroImage}
        imageAlt={visual?.heroImageAlt}
      />
      <section className="rw-section bg-white">
        <Container className="space-y-12 lg:space-y-14">
          <div className="rw-measure">
            <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] font-bold leading-tight tracking-[-0.02em] text-forest">{page.problem.title}</h2>
            <p className="mt-4 text-[1.0625rem] leading-[1.7] text-gray-600">{page.problem.body}</p>
          </div>
          <div className="rw-measure">
            <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] font-bold leading-tight tracking-[-0.02em] text-forest">{page.promise.title}</h2>
            <p className="mt-4 text-[1.0625rem] leading-[1.7] text-gray-600">{page.promise.body}</p>
          </div>
          <div>
            <div className="rw-measure">
              <h2 className="mb-2 text-[clamp(1.5rem,2.4vw,2rem)] font-bold leading-tight tracking-[-0.02em] text-forest">{page.how.title}</h2>
              <p className="mb-6 text-[1.0625rem] leading-[1.7] text-gray-600">{page.how.body}</p>
            </div>
            <ProcessSteps
              steps={page.how.steps.map((title, i) => ({
                number: String(i + 1).padStart(2, "0"),
                title,
              }))}
            />
          </div>
          <div className="rw-measure">
            <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] font-bold leading-tight tracking-[-0.02em] text-forest">{page.outcome.title}</h2>
            <p className="mt-4 text-[1.0625rem] leading-[1.7] text-gray-600">{page.outcome.body}</p>
          </div>
          <div className="rw-measure">
            <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] font-bold leading-tight tracking-[-0.02em] text-forest">{page.checks.title}</h2>
            <ul className="mt-4 space-y-3">
              {page.checks.items.map((item) => (
                <li key={item} className="flex gap-3 text-[1.0625rem] leading-[1.65] text-gray-600">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua-deep" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rw-measure">
            <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] font-bold leading-tight tracking-[-0.02em] text-forest">
              {page.boundaries.title}
            </h2>
            <p className="mt-4 text-[1.0625rem] leading-[1.7] text-gray-600">
              {page.boundaries.body}
            </p>
          </div>
          <div className="rw-measure rounded-3xl border border-dashed border-gray-100 bg-ice p-6 text-[0.9875rem] leading-[1.65] text-gray-600">
            {page.exampleNote}
          </div>
        </Container>
      </section>

      {visual ? (
        <section className="bg-ice py-14 lg:py-16">
          <Container>
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
                <Image
                  src={visual.band.image}
                  alt={visual.band.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-bold text-forest">
                  {visual.band.title}
                </h2>
                <p className="mt-4 leading-relaxed text-gray-600">
                  {visual.band.body}
                </p>
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      {page.faqs.length ? <FaqBand faqs={page.faqs} /> : null}
      <RelatedLinks items={page.related} />
      <CtaBand
        title={page.cta.title}
        primaryLabel={page.cta.primaryLabel}
        primaryHref={page.cta.primaryHref}
      />
    </>
  );
}
