// Content for the site footer.
export type FooterNavItem = {
  label: string;
  path: string;
  highlight?: boolean;
};

export const footerNav: FooterNavItem[] = [
  { label: "Home", path: "/" },
  { label: "Menus", path: "/#menu" },
  { label: "Contact", path: "/#contact" },
  { label: "Art", path: "/#art" },
  { label: "Policies", path: "/#policies" },
  { label: "Bookings", path: "/#booking" },
  { label: "Terms", path: "/terms", highlight: true },
];

// Same hours every day, so a single line covers it.
export const openingHours = "Everyday 12:00 to 23:00";

export type SocialPlatform =
  | "facebook"
  | "twitter"
  | "instagram"
  | "tripadvisor";
export type SocialLink = {
  platform: SocialPlatform;
  label: string;
  href: string;
};

// PLACEHOLDER hrefs — swap "#" for the real profile URLs.
export const socialLinks: SocialLink[] = [
  { platform: "facebook", label: "Facebook", href: "#" },
  { platform: "twitter", label: "Twitter", href: "#" },
  { platform: "instagram", label: "Instagram", href: "#" },
  { platform: "tripadvisor", label: "TripAdvisor", href: "#" },
];

export type FooterMeta = {
  author: string;
  authorUrl: string;
  businessName: string;
};

// The copyright year is computed dynamically in Footer.tsx.
export const footerMeta: FooterMeta = {
  author: "Victor Blanco",
  authorUrl: "https://victorblancoweb.com/",
  businessName: "The Orchard Bar",
};
