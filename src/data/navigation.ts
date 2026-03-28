export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerServices = [
  { label: "Interior & Exterior Painting", href: "/services#painting" },
  { label: "TV & Shelf Mounting", href: "/services#mounting" },
  { label: "Furniture Assembly", href: "/services#furniture" },
  { label: "Plumbing Repairs", href: "/services#plumbing" },
  { label: "Electrical Work", href: "/services#electrical" },
  { label: "View All Services", href: "/services" },
];

export const footerCompany = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Get a Quote", href: "/contact#quote" },
];
