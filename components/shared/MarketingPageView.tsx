import Link from "next/link";
import Image from "next/image";
import { CtaBand } from "@/components/shared/CtaBand";
import { CtaMediaBand } from "@/components/shared/CtaMediaBand";
import { ChecklistBlock } from "@/components/shared/ChecklistBlock";
import { CompareBand } from "@/components/shared/CompareBand";
import { ContentIcon } from "@/components/shared/ContentIcon";
import { FaqBand } from "@/components/shared/FaqBand";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHero } from "@/components/shared/PageHero";
import { PhotoAtmosphere } from "@/components/shared/PhotoAtmosphere";
import { ProcessSteps } from "@/components/shared/ProcessSteps";
import { RelatedLinks } from "@/components/shared/RelatedLinks";
import { StageGallery } from "@/components/shared/StageGallery";
import { Container } from "@/components/ui/Container";
import type { ContentBlock, MarketingPage } from "@/lib/content/pages";
import { konfiguratorEntryUrl } from "@/lib/site";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
  webPageSchema,
} from "@/lib/seo";

type BlockGroup =
  | { kind: "inline"; blocks: ContentBlock[] }
  | { kind: "media"; block: Extract<ContentBlock, { type: "media" }> }
  | { kind: "ctaMedia"; block: Extract<ContentBlock, { type: "ctaMedia" }> }
  | {
      kind: "stageGallery";
      block: Extract<ContentBlock, { type: "stageGallery" }>;
    }
  | { kind: "compare"; block: Extract<ContentBlock, { type: "compare" }> };

function groupBlocks(blocks: ContentBlock[]): BlockGroup[] {
  const groups: BlockGroup[] = [];
  for (const block of blocks) {
    if (block.type === "media") {
      groups.push({ kind: "media", block });
      continue;
    }
    if (block.type === "ctaMedia") {
      groups.push({ kind: "ctaMedia", block });
      continue;
    }
    if (block.type === "stageGallery") {
      groups.push({ kind: "stageGallery", block });
      continue;
    }
    if (block.type === "compare") {
      groups.push({ kind: "compare", block });
      continue;
    }
    const last = groups[groups.length - 1];
    if (last?.kind === "inline") {
      last.blocks.push(block);
    } else {
      groups.push({ kind: "inline", blocks: [block] });
    }
  }
  return groups;
}

function InlineBlock({ block }: { block: ContentBlock }) {
  if (block.type === "text") {
    return (
      <div className="rw-measure">
        <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] font-bold leading-tight tracking-[-0.02em] text-forest">
          {block.title}
        </h2>
        <p className="mt-4 text-[1.0625rem] leading-[1.7] text-gray-600">
          {block.body}
        </p>
      </div>
    );
  }

  if (block.type === "prose") {
    return (
      <div className="rw-prose">
        <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] font-bold leading-tight tracking-[-0.02em] text-forest">
          {block.title}
        </h2>
        <div className="mt-4 space-y-4">
          {block.paragraphs.map((p) => (
            <p
              key={p.slice(0, 48)}
              className="text-[1.0625rem] leading-[1.7] text-gray-600"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    );
  }

  if (block.type === "list") {
    return (
      <div className="rw-measure">
        <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] font-bold leading-tight tracking-[-0.02em] text-forest">
          {block.title}
        </h2>
        {block.intro ? (
          <p className="mt-4 text-[1.0625rem] leading-[1.7] text-gray-600">
            {block.intro}
          </p>
        ) : null}
        <ul className="mt-5 space-y-3">
          {block.items.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-[1.0625rem] leading-[1.65] text-gray-600"
            >
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua-deep" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (block.type === "checklist") {
    return (
      <ChecklistBlock
        title={block.title}
        intro={block.intro}
        items={block.items}
      />
    );
  }

  if (block.type === "steps") {
    return (
      <div>
        <h2 className="mb-6 text-2xl font-bold text-forest">{block.title}</h2>
        <ProcessSteps steps={block.steps} />
      </div>
    );
  }

  if (block.type === "mistakes") {
    return (
      <div className="rw-measure-wide">
        <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] font-bold leading-tight tracking-[-0.02em] text-forest">
          {block.title}
        </h2>
        {block.intro ? (
          <p className="mt-4 text-[1.0625rem] leading-[1.7] text-gray-600">
            {block.intro}
          </p>
        ) : null}
        <ol className="mt-7 space-y-5">
          {block.items.map((item, i) => (
            <li key={item.title} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest text-sm font-bold text-lime">
                {i + 1}
              </span>
              <div className="min-w-0 pt-0.5">
                <h3 className="font-bold tracking-[-0.01em] text-forest">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[1.0625rem] leading-[1.65] text-gray-600">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  if (block.type === "cards") {
    return (
      <div>
        <h2 className="rw-measure text-[clamp(1.5rem,2.4vw,2rem)] font-bold leading-tight tracking-[-0.02em] text-forest">
          {block.title}
        </h2>
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {block.cards.map((card) => {
            const inner = (
              <>
                <div className="flex items-start gap-3">
                  {card.icon ? (
                    <ContentIcon
                      name={card.icon}
                      className="mt-0.5 h-5 w-5 shrink-0 text-aqua-deep"
                    />
                  ) : null}
                  <div>
                    <h3 className="font-bold tracking-[-0.01em] text-forest">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-[0.9875rem] leading-[1.65] text-gray-600">
                      {card.body}
                    </p>
                  </div>
                </div>
              </>
            );
            const className =
              "rounded-2xl border border-gray-100 bg-ice/70 p-5 transition hover:border-aqua-deep/35 hover:bg-mint/40 sm:p-6";
            return card.href ? (
              <Link key={card.title} href={card.href} className={className}>
                {inner}
              </Link>
            ) : (
              <div key={card.title} className={className}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
}

export function MarketingPageView({
  page,
  breadcrumbs,
  children,
}: {
  page: MarketingPage;
  breadcrumbs: { label: string; href?: string }[];
  children?: React.ReactNode;
}) {
  const primaryHref =
    page.cta.primaryHref === "CONFIGURATOR"
      ? konfiguratorEntryUrl
      : page.cta.primaryHref;

  const crumbSchema = breadcrumbSchema(
    breadcrumbs.map((b) => ({
      name: b.label,
      path: b.href,
    })),
  );

  const groups = groupBlocks(page.blocks);
  let lastInlineIndex = -1;
  for (let i = 0; i < groups.length; i++) {
    if (groups[i].kind === "inline") lastInlineIndex = i;
  }

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: page.h1,
            description: page.lead,
            path: page.seo.path,
          }),
          serviceSchema({
            name: page.h1,
            description: page.lead,
            path: page.seo.path,
          }),
          crumbSchema,
          ...(page.faqs.length ? [faqSchema(page.faqs)] : []),
        ]}
      />
      <PageHero
        h1={page.h1}
        lead={page.lead}
        breadcrumbs={breadcrumbs}
        image={page.heroImage}
        imageAlt={page.heroImageAlt}
      />

      {groups.map((group, gi) => {
        if (group.kind === "media") {
          const block = group.block;
          return (
            <PhotoAtmosphere
              key={block.title}
              variant="light"
              image={block.image}
              className="rw-section"
            >
              <Container>
                <div
                  className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                    block.reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/50 shadow-soft">
                    <Image
                      src={block.image}
                      alt={block.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width:1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className="rounded-[1.75rem] border border-white/60 bg-white/85 p-6 backdrop-blur-[2px] lg:p-8">
                    <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] font-bold leading-tight tracking-[-0.02em] text-forest">
                      {block.title}
                    </h2>
                    <p className="mt-4 text-[1.0625rem] leading-[1.7] text-gray-600">
                      {block.body}
                    </p>
                  </div>
                </div>
              </Container>
            </PhotoAtmosphere>
          );
        }

        if (group.kind === "ctaMedia") {
          const block = group.block;
          const href =
            block.primaryHref === "CONFIGURATOR"
              ? konfiguratorEntryUrl
              : block.primaryHref;
          return (
            <CtaMediaBand
              key={block.title}
              title={block.title}
              body={block.body}
              image={block.image}
              imageAlt={block.imageAlt}
              reverse={block.reverse}
              primaryLabel={block.primaryLabel}
              primaryHref={href}
              secondaryLabel={block.secondaryLabel}
              lead={block.lead}
            />
          );
        }

        if (group.kind === "stageGallery") {
          const block = group.block;
          return (
            <StageGallery
              key={block.title}
              title={block.title}
              intro={block.intro}
              stages={block.stages}
              focus={block.focus}
            />
          );
        }

        if (group.kind === "compare") {
          const block = group.block;
          return (
            <CompareBand
              key={block.title}
              title={block.title}
              intro={block.intro}
              left={block.left}
              right={block.right}
            />
          );
        }

        const isLastInline = lastInlineIndex === gi;

        return (
          <section key={`inline-${gi}`} className="rw-section bg-white">
            <Container className="space-y-12 lg:space-y-16">
              {group.blocks.map((block) => (
                <InlineBlock
                  key={`${block.type}-${block.title}`}
                  block={block}
                />
              ))}
              {isLastInline ? children : null}
            </Container>
          </section>
        );
      })}

      {children && !groups.some((g) => g.kind === "inline") ? (
        <section className="rw-section bg-white">
          <Container>{children}</Container>
        </section>
      ) : null}

      {page.faqs.length ? (
        <FaqBand
          faqs={page.faqs}
          image={page.faqImage}
          imageAlt={page.faqImageAlt}
        />
      ) : null}

      <RelatedLinks items={page.related} />
      <CtaBand
        title={page.cta.title}
        primaryLabel={page.cta.primaryLabel}
        primaryHref={primaryHref}
        secondaryLabel={page.cta.secondaryLabel}
        secondaryHref={page.cta.secondaryHref}
      />
    </>
  );
}
