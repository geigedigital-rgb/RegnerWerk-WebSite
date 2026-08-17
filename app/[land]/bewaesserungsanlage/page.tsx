import { notFound } from "next/navigation";
import { CityPage } from "@/components/shared/CityPage";
import { cities, cityPath, getCity } from "@/lib/content/cities";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return cities.map((city) => ({ land: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ land: string }>;
}) {
  const { land: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  return buildMetadata({
    title: city.seo.title,
    description: city.seo.description,
    path: cityPath(city.slug),
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ land: string }>;
}) {
  const { land: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();
  return <CityPage city={city} />;
}
