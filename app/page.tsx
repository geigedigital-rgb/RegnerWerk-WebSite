import { FinalCTA } from "@/components/sections/FinalCTA";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Packages } from "@/components/sections/Packages";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Trust } from "@/components/sections/Trust";
import { Why } from "@/components/sections/Why";
import { JsonLd } from "@/components/shared/JsonLd";
import { TopicCluster } from "@/components/shared/TopicCluster";
import { homeSeo } from "@/lib/content/home";
import {
  buildMetadata,
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/seo";

export const metadata = buildMetadata(homeSeo);

export default function Home() {
  return (
    <>
      <JsonLd
        data={[organizationSchema(), localBusinessSchema(), websiteSchema()]}
      />
      <Hero />
      <Trust />
      <Services />
      <Why />
      <Gallery />
      <Packages />
      <Testimonials />
      <TopicCluster />
      <FinalCTA />
    </>
  );
}
