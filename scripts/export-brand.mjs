/**
 * Rasterize logo-assets SVGs into favicon / Apple / OG / PWA sizes.
 * Usage: node scripts/export-brand.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const assets = path.join(root, "logo-assets");
const brand = path.join(root, "public", "brand");
const pub = path.join(root, "public");
const appDir = path.join(root, "app");

const FOREST = { r: 11, g: 36, b: 20, alpha: 1 };
const CREAM = { r: 247, g: 246, b: 241, alpha: 1 };
const markSvg = fs.readFileSync(path.join(assets, "regnerwerk-mark.svg"));
const onDarkSvg = fs.readFileSync(
  path.join(assets, "regnerwerk-logo-horizontal-on-dark.svg"),
);

async function svgPng(input, size, dest, { contain = true } = {}) {
  await sharp(input, { density: 384 })
    .resize(size, size, {
      fit: contain ? "contain" : "cover",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png({ compressionLevel: 9 })
    .toFile(dest);
}

async function paddedMark(size, pad, dest, background) {
  const inner = size - pad * 2;
  const fg = await sharp(markSvg, { density: 384 })
    .resize(inner, inner, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();
  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background,
    },
  })
    .composite([{ input: fg, left: pad, top: pad }])
    .png({ compressionLevel: 9 })
    .toFile(dest);
}

async function ogImage(dest) {
  const w = 1200;
  const h = 630;
  const logoW = 820;
  const logo = await sharp(onDarkSvg, { density: 240 })
    .resize(logoW, null, { fit: "inside" })
    .png()
    .toBuffer();
  const meta = await sharp(logo).metadata();
  const left = Math.round((w - (meta.width ?? logoW)) / 2);
  const top = Math.round((h - (meta.height ?? 200)) / 2);
  await sharp({
    create: { width: w, height: h, channels: 4, background: FOREST },
  })
    .composite([{ input: logo, left, top }])
    .png({ compressionLevel: 9 })
    .toFile(dest);
}

await fs.promises.mkdir(brand, { recursive: true });
await fs.promises.mkdir(appDir, { recursive: true });

await svgPng(markSvg, 32, path.join(pub, "favicon-32.png"));
await svgPng(markSvg, 48, path.join(brand, "favicon-48.png"));
await paddedMark(180, 28, path.join(pub, "apple-touch-icon.png"), CREAM);
await paddedMark(192, 28, path.join(pub, "icon-192.png"), CREAM);
await paddedMark(512, 72, path.join(pub, "icon-512.png"), CREAM);
await paddedMark(512, 72, path.join(appDir, "icon.png"), CREAM);
await paddedMark(180, 28, path.join(appDir, "apple-icon.png"), CREAM);
await ogImage(path.join(pub, "og.png"));

// Crawler-friendly wordmark PNG
await sharp(fs.readFileSync(path.join(assets, "regnerwerk-logo-horizontal.svg")), {
  density: 192,
})
  .resize(800, null, { fit: "inside" })
  .png({ compressionLevel: 9 })
  .toFile(path.join(brand, "logo-horizontal.png"));

console.log("Brand rasters written.");
for (const f of [
  "public/favicon-32.png",
  "public/apple-touch-icon.png",
  "public/icon-192.png",
  "public/icon-512.png",
  "public/og.png",
  "app/icon.png",
  "app/apple-icon.png",
  "public/brand/logo-horizontal.png",
]) {
  const st = fs.statSync(path.join(root, f));
  console.log(`  ${f}  ${(st.size / 1024).toFixed(1)} KB`);
}
