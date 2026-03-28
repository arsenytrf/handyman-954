export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
}

export const services: Service[] = [
  {
    id: "painting",
    title: "Interior & Exterior Painting",
    description:
      "Clean lines, smooth finishes, no mess. Walls, ceilings, trim, cabinets, accent walls, and full exterior refreshes. We prep right so the paint lasts.",
    icon: "Paintbrush",
    image: "https://images.craigslist.org/00n0n_CyO5ZPUlLq_0CI0hT_600x450.jpg",
  },
  {
    id: "mounting",
    title: "TV & Shelf Mounting",
    description:
      "TVs, floating shelves, mirrors, artwork, curtain rods — mounted flush and level. We handle drywall, studs, brick, and concrete.",
    icon: "Monitor",
    image: "https://images.craigslist.org/00y0y_b2MIsgtGKnI_0hT0CI_600x450.jpg",
  },
  {
    id: "furniture",
    title: "Furniture Assembly",
    description:
      "IKEA, Wayfair, Amazon — whatever the box says, we build it. Desks, beds, shelving units, patio sets. Fast, correct, no leftover bolts.",
    icon: "Armchair",
    image: "https://images.craigslist.org/00U0U_dpEz1SSwo59_0lM0CI_600x450.jpg",
  },
  {
    id: "flooring",
    title: "Flooring Installation",
    description:
      "Laminate, vinyl plank, tile, and hardwood. We handle subfloor prep, transitions, and baseboards. Walk-ready when we leave.",
    icon: "Layers",
    image: "https://images.craigslist.org/00d0d_gM8slJ3sS1Z_0hT0CI_600x450.jpg",
  },
  {
    id: "plumbing",
    title: "Plumbing Repairs",
    description:
      "Leaky faucets, running toilets, garbage disposals, pipe fixes, water heater help. Quick diagnosis, clean fix, no callbacks.",
    icon: "Wrench",
    image: "https://images.craigslist.org/00O0O_glqwfVJ2x8D_0t20CI_600x450.jpg",
  },
  {
    id: "electrical",
    title: "Electrical Work",
    description:
      "Outlets, switches, light fixtures, ceiling fans, dimmers, and panel upgrades. Safe, to code, done right the first time.",
    icon: "Zap",
    image: "https://images.craigslist.org/00Z0Z_lBsmesFuN1p_0hT0CI_600x450.jpg",
  },
  {
    id: "drywall",
    title: "Drywall & Plastering",
    description:
      "Patch holes, fix water damage, skim coat, hang new drywall, popcorn ceiling removal. Smooth walls ready for paint.",
    icon: "Square",
    image: "https://images.craigslist.org/00K0K_hB5uVq3sIAH_0CI0hT_600x450.jpg",
  },
  {
    id: "holiday-lighting",
    title: "Holiday Lighting",
    description:
      "Professional holiday light installation for homes and businesses. We design, install, maintain, and remove. Rooflines, trees, walkways, and custom displays.",
    icon: "Sparkles",
    image: "https://images.craigslist.org/00w0w_cSqXYsbpO6y_0hT0CI_600x450.jpg",
  },
  {
    id: "moving",
    title: "Heavy Lifting & Moving",
    description:
      "Appliance moves, furniture rearranging, garage cleanouts, junk hauling. Strong backs, careful hands, no damage.",
    icon: "Truck",
    image: "https://images.craigslist.org/00r0r_6dq5mx50BPg_0hT0CI_600x450.jpg",
  },
  {
    id: "general",
    title: "General Handyman",
    description:
      "Door adjustments, weather stripping, caulking, pressure washing, deck repairs, fence fixes — the stuff that piles up on your to-do list.",
    icon: "Hammer",
    image: "https://images.craigslist.org/00q0q_6VJ3QMZqlMi_0CI0hT_600x450.jpg",
  },
];

export const serviceCategories = [
  "All Services",
  "Painting",
  "Install & Mount",
  "Repairs",
  "Build & Assemble",
  "Electrical & Plumbing",
];
