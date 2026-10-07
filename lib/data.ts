export const business = {
  name: "Percept Interior Solutions",
  location: {
    locality: "Banjara Hills",
    city: "Hyderabad",
    region: "Telangana",
    country: "India",
    countryCode: "IN",
  },
  phoneDisplay: "+91 90000 04706",
  phoneTel: "+919000004706",
  whatsappNumber: "919000004706",
  rating: 4.9,
  reviewCount: 316,
  pricing: "Contact for pricing",
  hours: "Contact for current opening hours.",
} as const;

export type ServiceCategory = "Residential" | "Commercial" | "Kitchens";

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: "home" | "building" | "chef" | "layers";
};

export const services: Service[] = [
  {
    slug: "residential-interiors",
    title: "Residential Interiors",
    shortDescription:
      "Thoughtful homes shaped around light, material, and the way you live.",
    description:
      "From apartments to villas in Hyderabad, we design residential interiors that feel considered and calm. Spatial planning, material palettes, and detailing are developed together so every room supports daily life without visual noise.",
    icon: "home",
  },
  {
    slug: "commercial-interiors",
    title: "Commercial Interiors",
    shortDescription:
      "Workplaces and hospitality spaces with presence, flow, and restraint.",
    description:
      "We plan commercial interiors that balance brand presence with practical circulation. Reception, work zones, and gathering areas are composed as a single spatial story, using durable materials suited to Hyderabad's climate and use.",
    icon: "building",
  },
  {
    slug: "modular-kitchens",
    title: "Modular Kitchens",
    shortDescription:
      "Kitchens planned for cooking, storage, and a quiet architectural finish.",
    description:
      "Modular kitchen design focused on workflow, storage, and finish quality. Layouts are drawn around how you cook, with material selections that hold up to daily use while remaining visually quiet.",
    icon: "chef",
  },
  {
    slug: "turnkey-execution",
    title: "Turnkey Execution",
    shortDescription:
      "One studio from concept through site, so design intent survives construction.",
    description:
      "Turnkey execution covers coordination from approved drawings through site finish. We keep design decisions aligned with craft, sequencing, and material availability so the completed space matches what was agreed.",
    icon: "layers",
  },
];

export type Project = {
  slug: string;
  title: string;
  category: ServiceCategory;
  location: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    slug: "banjara-hills-apartment",
    title: "Apartment Living Room",
    category: "Residential",
    location: "Banjara Hills, Hyderabad",
    description:
      "A quiet living room composed around natural light, warm stone, and low furniture.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
    imageAlt:
      "Sunlit living room with warm stone flooring, linen sofa, and architectural millwork",
  },
  {
    slug: "hyderabad-villa-suite",
    title: "Villa Bedroom Suite",
    category: "Residential",
    location: "Hyderabad",
    description:
      "A bedroom suite with layered textiles, timber joinery, and a restrained brass accent.",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=80",
    imageAlt:
      "Bedroom with upholstered bed, timber nightstands, and warm ambient lighting",
  },
  {
    slug: "city-dining-room",
    title: "Dining Room in Travertine",
    category: "Residential",
    location: "Hyderabad",
    description:
      "Dining space anchored by a stone table, plaster walls, and a sculptural pendant.",
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1600&q=80",
    imageAlt:
      "Dining room with stone table, plaster walls, and a large pendant light",
  },
  {
    slug: "studio-workspace",
    title: "Studio Workspace",
    category: "Commercial",
    location: "Hyderabad",
    description:
      "An open studio with timber desks, acoustic calm, and a measured material palette.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    imageAlt:
      "Open commercial studio with timber desks, large windows, and calm interior finishes",
  },
  {
    slug: "hospitality-lounge",
    title: "Hospitality Lounge",
    category: "Commercial",
    location: "Hyderabad",
    description:
      "A lounge composed for conversation, with low seating and warm architectural lighting.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
    imageAlt:
      "Interior lounge with low seating, warm lighting, and architectural stone surfaces",
  },
  {
    slug: "meeting-gallery",
    title: "Meeting Gallery",
    category: "Commercial",
    location: "Banjara Hills, Hyderabad",
    description:
      "A meeting room that reads as a gallery: quiet walls, long table, and controlled light.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80",
    imageAlt:
      "Meeting room with a long table, large windows, and a restrained commercial interior",
  },
  {
    slug: "linear-kitchen",
    title: "Linear Kitchen",
    category: "Kitchens",
    location: "Hyderabad",
    description:
      "A linear kitchen with continuous stone counters and handleless cabinetry.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1600&q=80",
    imageAlt:
      "Modern kitchen with stone counters, handleless cabinets, and warm under-cabinet lighting",
  },
  {
    slug: "island-kitchen",
    title: "Island Kitchen",
    category: "Kitchens",
    location: "Hyderabad",
    description:
      "A kitchen island planned for prep and gathering, finished in warm timber and stone.",
    image:
      "https://images.unsplash.com/photo-1600489000022-c2086d79c9d4?auto=format&fit=crop&w=1600&q=80",
    imageAlt:
      "Kitchen island with stone countertop, timber cabinetry, and pendant lighting",
  },
  {
    slug: "open-kitchen-living",
    title: "Open Kitchen Living",
    category: "Kitchens",
    location: "Banjara Hills, Hyderabad",
    description:
      "Kitchen and living planned as one volume, with a quiet threshold in stone and timber.",
    image:
      "https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=1600&q=80",
    imageAlt:
      "Open kitchen adjoining a living area with stone, timber, and natural light",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery and Spatial Audit",
    description:
      "We begin on site in Hyderabad: measuring, observing light, and understanding how the property is used. This audit becomes the brief for planning.",
  },
  {
    step: "02",
    title: "3D Visualization",
    description:
      "Spatial options are developed in three dimensions so proportion, circulation, and material intent can be reviewed before construction.",
  },
  {
    step: "03",
    title: "Material Selection",
    description:
      "Stone, timber, metals, and textiles are sampled together. Selections are made for climate, wear, and a coherent visual temperature.",
  },
  {
    step: "04",
    title: "Turnkey Execution",
    description:
      "Approved drawings move to site. Sequencing, craft, and finish are coordinated so the completed interior matches the agreed design.",
  },
] as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;
