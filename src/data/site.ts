/**
 * All editable site content lives here: company details, stats, services,
 * process steps, gallery items. Image keys refer to files in /photos
 * (run `npm run images` after adding a new photo).
 */
import {
  Anchor,
  ClipboardList,
  Droplets,
  Flame,
  Handshake,
  HardHat,
  Layers,
  Leaf,
  LifeBuoy,
  MapPin,
  Recycle,
  Settings2,
  Ship,
  ShieldCheck,
  Workflow,
  Wrench,
  Construction,
  Eye,
  PackageCheck,
  type LucideIcon,
} from "lucide-react";
import type imageMeta from "./image-meta.json";

export type ImageKey = keyof typeof imageMeta;

export const company = {
  name: "Fix Bolingo International Limited",
  shortName: "Fix Bolingo",
  tagline: "Maritime Experience. Practical Solutions. Reliable Delivery.",
  description:
    "Ship scrapping, marine cutting, jetty support and heavy-equipment coordination from the Kirikiri waterfront, Apapa, Lagos.",
  phoneDisplay: "+234 706 590 6404",
  phoneHref: "tel:+2347065906404",
  whatsappHref: "https://wa.me/2347065906404",
  email: "fixbolingointernational31@yahoo.com",
  address: "Kirikiri Waterside, Apapa, Lagos, Nigeria",
  addressShort: "Kirikiri Waterside, Apapa, Lagos",
  mapEmbed: "https://www.google.com/maps?q=Kirikiri%20Waterside%2C%20Apapa%2C%20Lagos%2C%20Nigeria&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Kirikiri+Waterside+Apapa+Lagos+Nigeria",
  heroVideo: {
    src: "videos/hero-wreck-removal.mp4",
    poster: "videos/hero-poster.webp",
    description: "Background video: aerial drone footage of a vessel being dismantled and removed beside a rock breakwater, with a crawler crane working from the shore.",
  },
  ceo: { name: "Ms Anthonia Ugokwe", title: "MD/CEO", image: "ceo-portrait" as ImageKey },
  serviceNote:
    "Scope, equipment availability, approvals, timelines and commercial terms are confirmed before work begins.",
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

export type Stat = {
  /** Numeric value animates as a counter; text values render as-is. */
  value: number | string;
  suffix?: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 25, suffix: "+", label: "Years Leadership Experience" },
  { value: 150, suffix: "-Ton", label: "Crane Capability" },
  { value: 8, label: "Core Services" },
  { value: "Apapa", label: "Waterfront Base" },
];

export const about = {
  intro:
    "Fix Bolingo International Limited is a Nigerian company operating in the maritime and industrial services space. Based in the Kirikiri waterfront area of Apapa, Lagos, our business interests include ship scrapping, vessel and marine repair support, marine cutting, jetty services, heavy-equipment support, water supply and related contracting services.",
  story:
    "We work to connect clients with practical waterfront capabilities, experienced personnel and the equipment required to support marine and industrial projects. Our approach is built around responsive service, collaboration and a clear understanding of each project's operational needs.",
  approach: [
    "Understand the requirement.",
    "Coordinate the right people and equipment.",
    "Deliver responsibly.",
  ],
  leadership: [
    "The company's leadership has more than 25 years of experience across ship scrapping, vessel maintenance and wreckage-removal-related activities, supported by a practical understanding of waterfront operations and marine equipment.",
    "The team's work history includes vessel and marine-asset dismantling, coordination of specialist cutting equipment and the organisation of teams for complex waterfront projects.",
  ],
};

export type Service = {
  slug: string;
  number: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  image: ImageKey;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "ship-scrapping",
    number: "01",
    title: "Ship Scrapping & Vessel Dismantling",
    short: "Dismantling and recovery of vessels and marine assets.",
    description:
      "Dismantling and recovery of vessels and marine assets, with reusable scrap materials separated for onward use or recycling.",
    icon: Ship,
    image: "crane-lifting-deck",
    imageAlt: "Crawler crane on the breakwater lifting cut sections from a vessel being dismantled",
  },
  {
    slug: "wreckage-removal",
    number: "02",
    title: "Marine Wreckage & Vessel Removal Support",
    short: "Removal, recovery and clearance of wrecked or unwanted vessels.",
    description:
      "Removal, recovery and clearance of wrecked or unwanted vessels and marine structures, subject to project scope and applicable approvals.",
    icon: LifeBuoy,
    image: "wreck-removal-aerial",
    imageAlt: "Aerial view of a vessel being dismantled beside a rock breakwater, with a crawler crane working from the shore",
  },
  {
    slug: "marine-cutting",
    number: "03",
    title: "Marine Cutting & Underwater Cutting Support",
    short: "Cutting support for steel and vessel components.",
    description:
      "Cutting support for steel and vessel components, including Broco underwater cutting rods/equipment where suitable.",
    icon: Flame,
    image: "deck-cutting-crew",
    imageAlt: "Cutting crew with gas cylinders and hoses working on a vessel deck",
  },
  {
    slug: "vessel-repair",
    number: "04",
    title: "Vessel Repair & Maintenance Support",
    short: "Vessel repair, maintenance and related waterfront works.",
    description:
      "Vessel repair, maintenance and related waterfront works, coordinated to suit client requirements.",
    icon: Wrench,
    image: "yacht-slipway-crane",
    imageAlt: "Sailing yacht on the slipway beside a crawler crane at the waterfront",
  },
  {
    slug: "jetty-space",
    number: "05",
    title: "Jetty Space & Waterfront Facilities",
    short: "Jetty-space and waterfront support for approved activities.",
    description:
      "Jetty-space and waterfront support for approved vessel, equipment and project activities, subject to availability and site requirements.",
    icon: Anchor,
    image: "barge-waterfront",
    imageAlt: "Flat-deck barge berthed at the Kirikiri waterfront",
  },
  {
    slug: "heavy-equipment",
    number: "06",
    title: "Heavy Equipment & Lifting Support",
    short: "Heavy-duty equipment and lifting coordination, including a 150-ton crane.",
    description:
      "Heavy-duty equipment and lifting coordination for marine and industrial operations, including a 150-ton crane (availability confirmed per project).",
    icon: Construction,
    image: "zoomlion-crane-2",
    imageAlt: "Zoomlion ZCC1500V crawler crane on site",
  },
  {
    slug: "water-supply",
    number: "07",
    title: "Water Supply & General Contracting",
    short: "Water supply, general contracting and allied services.",
    description:
      "Water supply, general contracting and allied services for marine, industrial and other clients.",
    icon: Droplets,
    image: "breakwater-causeway",
    imageAlt: "Aerial view of heavy haulage along a rock breakwater causeway",
  },
  {
    slug: "marine-scrap",
    number: "08",
    title: "Marine Scrap & Materials",
    short: "Sourcing and supply of ship scrap and recoverable materials.",
    description:
      "Sourcing and supply of ship scrap and recoverable materials for industrial buyers, subject to specification and availability.",
    icon: Recycle,
    image: "scrap-truck-loading",
    imageAlt: "Excavator loading recovered steel scrap onto a haulage truck",
  },
];

export const process = [
  {
    number: "01",
    title: "Understand the job",
    text: "We clarify the scope, location, timelines, access requirements and expected deliverables with the client.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Assess and plan",
    text: "We identify suitable personnel, equipment, site arrangements and any project-specific approvals or safety controls required.",
    icon: Layers,
  },
  {
    number: "03",
    title: "Coordinate operations",
    text: "We coordinate the work and communicate with the client on progress, practical constraints and agreed milestones.",
    icon: Workflow,
  },
  {
    number: "04",
    title: "Complete and hand over",
    text: "We aim to complete the agreed scope responsibly and confirm the handover requirements with the client.",
    icon: PackageCheck,
  },
];

export const whyUs = [
  {
    title: "Maritime-sector experience",
    text: "Company leadership brings long-standing experience in ship scrapping, marine maintenance and wreckage-related work.",
    icon: HardHat,
  },
  {
    title: "Waterfront base in Apapa",
    text: "Our Kirikiri, Apapa location places the company within Lagos' active maritime and industrial environment.",
    icon: MapPin,
  },
  {
    title: "Broad service coordination",
    text: "Ship scrapping, marine cutting, jetty support, equipment coordination and general contracting can be discussed through one point of contact.",
    icon: Settings2,
  },
  {
    title: "Collaboration-led approach",
    text: "We seek practical partnerships with vessel owners, contractors, industrial buyers and other service providers.",
    icon: Handshake,
  },
  {
    title: "Value recovery",
    text: "Ship-scrapping and scrap-material activities can help recover reusable materials from assets that have reached the end of their service life.",
    icon: Recycle,
  },
];

export const commitments = [
  {
    title: "Safety-minded planning",
    text: "Clarify hazards, access, work sequence and controls before mobilisation.",
    icon: ShieldCheck,
  },
  {
    title: "Environmental awareness",
    text: "Handle recovered materials and waste responsibly, with appropriate controls for oils, fuels and other potentially hazardous substances.",
    icon: Leaf,
  },
  {
    title: "Transparent coordination",
    text: "Keep scope, responsibilities, timelines and handover expectations clear.",
    icon: Eye,
  },
];

export const commitmentIntro =
  "Marine and industrial work requires careful planning, competent personnel and attention to site conditions. We aim to agree the scope clearly, use equipment appropriate to the task, communicate with clients and follow applicable site rules and regulatory requirements.";


export const galleryCategories = ["All", "Ship Scrapping", "Equipment", "Waterfront & Jetty"] as const;
export type GalleryCategory = Exclude<(typeof galleryCategories)[number], "All">;

export type GalleryItem = {
  /** Thumbnail, or the poster frame when `video` is set */
  image: ImageKey;
  caption: string;
  category: GalleryCategory;
  /** Optional video (path under public/), played in the lightbox */
  video?: string;
};

export const gallery: GalleryItem[] = [
  // The first six also appear on the home page
  {
    image: "drone-video-frame",
    video: "videos/hero-wreck-removal.mp4",
    caption: "Drone footage of vessel removal at the breakwater",
    category: "Ship Scrapping",
  },
  { image: "wreck-removal-aerial", caption: "Aerial view of vessel removal at the breakwater", category: "Ship Scrapping" },
  { image: "scrap-loading-beach", caption: "Excavator loading recovered steel onto a haulage truck", category: "Equipment" },
  { image: "deck-cutting-crew", caption: "Cutting crew at work on the vessel deck", category: "Ship Scrapping" },
  { image: "vessel-superstructure-aerial", caption: "Aerial view of the vessel's superstructure and stern", category: "Ship Scrapping" },
  { image: "crawler-crane-breakwater", caption: "Crawler crane on the breakwater supporting dismantling", category: "Equipment" },
  { image: "breakwater-causeway", caption: "Heavy haulage along the breakwater causeway", category: "Waterfront & Jetty" },
  { image: "crane-lifting-deck", caption: "Crane lifting cut sections from the vessel", category: "Ship Scrapping" },
  { image: "scrap-truck-loading", caption: "Recovered scrap loaded for onward transport", category: "Equipment" },
  { image: "vessel-stern-coastline", caption: "Vessel stern with the breakwater and coastline beyond", category: "Waterfront & Jetty" },
  { image: "hull-breakwater-close", caption: "Partially dismantled hull alongside the rock breakwater", category: "Ship Scrapping" },
  { image: "scrap-yard-excavator", caption: "Excavator beside a hull section filled with cut steel", category: "Equipment" },
  { image: "wreck-aerial-side", caption: "Vessel alongside the breakwater during dismantling", category: "Ship Scrapping" },
  { image: "scrap-haulage-seafront", caption: "Scrap haulage at the seafront work site", category: "Equipment" },
  { image: "beach-site-wide", caption: "Shoreline work site with excavator, haulage truck and crew", category: "Waterfront & Jetty" },
  { image: "ship-dismantling-crane", caption: "Vessel dismantling with crawler-crane support", category: "Ship Scrapping" },
  { image: "zoomlion-crane-1", caption: "Zoomlion crawler crane and excavator on site", category: "Equipment" },
  { image: "dismantling-site-1", caption: "Dismantling yard, Kirikiri waterfront", category: "Ship Scrapping" },
  { image: "barge-waterfront", caption: "Barge berthed at the waterfront", category: "Waterfront & Jetty" },
  { image: "zoomlion-crane-2", caption: "150-ton class crawler crane", category: "Equipment" },
  { image: "dismantling-site-3", caption: "Steel sections recovered from a vessel", category: "Ship Scrapping" },
  { image: "vessel-hulk-jetty", caption: "Vessel hulk alongside the jetty", category: "Waterfront & Jetty" },
  { image: "excavator-yard", caption: "Excavator handling recovered materials", category: "Equipment" },
  { image: "yacht-slipway-crane", caption: "Yacht on the slipway with lifting support", category: "Waterfront & Jetty" },
  { image: "dismantling-site-2", caption: "Cutting and separation of vessel components", category: "Ship Scrapping" },
  { image: "site-yard-containers", caption: "Prepared site yard and site containers", category: "Waterfront & Jetty" },
  { image: "dismantling-site-4", caption: "Crew working on the dismantling yard", category: "Ship Scrapping" },
];
