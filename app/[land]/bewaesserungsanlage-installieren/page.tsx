import { notFound } from "next/navigation";
import { LandInstallPage } from "@/components/shared/LandInstallPage";
import {
  bundeslaender,
  getBundesland,
  landInstallPath,
} from "@/lib/content/regions";
import { buildMetadata } from "@/lib/seo";
export function generateStaticParams() {
  return bundeslaender.map((land) => ({ land: land.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ land: string }>;
}) {
  const { land: slug } = await params;
  const land = getBundesland(slug);
  if (!land) return {};
  return buildMetadata({
    title: land.seo.title,
    description: land.seo.description,
    path: landInstallPath(land.slug),
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ land: string }>;
}) {
  const { land: slug } = await params;
  const land = getBundesland(slug);
  if (!land) notFound();
  return <LandInstallPage land={land} />;
}
