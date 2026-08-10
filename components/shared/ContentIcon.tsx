import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  BookImage,
  Camera,
  CircleAlert,
  ClipboardList,
  Clock3,
  Crosshair,
  DraftingCompass,
  Droplets,
  EyeOff,
  FileText,
  Filter,
  Gauge,
  GitBranch,
  Home,
  LandPlot,
  Layers,
  LayoutGrid,
  MapPin,
  Package,
  PencilRuler,
  Pipette,
  Radius,
  Settings,
  Shield,
  Shovel,
  SlidersHorizontal,
  Smartphone,
  Snowflake,
  Sprout,
  Trees,
  User,
  Wrench,
} from "lucide-react";

/** Semantic icons for marketing blocks — Lucide only, topic-matched. */
export type RwIcon =
  | "clock"
  | "person"
  | "droplets"
  | "grid"
  | "timer"
  | "target"
  | "eyeOff"
  | "badgeCheck"
  | "ruler"
  | "gauge"
  | "trees"
  | "camera"
  | "layers"
  | "phone"
  | "filter"
  | "wrench"
  | "snow"
  | "file"
  | "shield"
  | "map"
  | "alert"
  | "clipboard"
  | "package"
  | "sprout"
  | "branch"
  | "home"
  | "pipette"
  | "compass"
  | "shovel"
  | "radius"
  | "bookImage"
  | "sliders"
  | "landPlot"
  | "settings";

const map: Record<RwIcon, LucideIcon> = {
  clock: Clock3,
  person: User,
  droplets: Droplets,
  grid: LayoutGrid,
  timer: Clock3,
  target: Crosshair,
  eyeOff: EyeOff,
  badgeCheck: BadgeCheck,
  ruler: PencilRuler,
  gauge: Gauge,
  trees: Trees,
  camera: Camera,
  layers: Layers,
  phone: Smartphone,
  filter: Filter,
  wrench: Wrench,
  snow: Snowflake,
  file: FileText,
  shield: Shield,
  map: MapPin,
  alert: CircleAlert,
  clipboard: ClipboardList,
  package: Package,
  sprout: Sprout,
  branch: GitBranch,
  home: Home,
  pipette: Pipette,
  compass: DraftingCompass,
  shovel: Shovel,
  radius: Radius,
  bookImage: BookImage,
  sliders: SlidersHorizontal,
  landPlot: LandPlot,
  settings: Settings,
};

export function ContentIcon({
  name,
  className = "h-5 w-5 text-aqua-deep",
  strokeWidth = 1.75,
  filled = false,
}: {
  name: RwIcon;
  className?: string;
  strokeWidth?: number;
  /** Soft solid mass for watermarks — fill + short stroke, no wireframe stacking. */
  filled?: boolean;
}) {
  const Icon = map[name];
  if (filled) {
    return (
      <Icon
        className={className}
        aria-hidden
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    );
  }
  return <Icon className={className} aria-hidden strokeWidth={strokeWidth} />;
}
