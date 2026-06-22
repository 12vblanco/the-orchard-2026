// Content for the site footer.
export type FooterNavItem = { label: string; path: string; highlight?: boolean };

export const footerNav: FooterNavItem[] = [
  { label: "Home", path: "/" },
  { label: "Menus", path: "/#menu" },
  { label: "Contact", path: "/#contact" },
  { label: "Art", path: "/#art" },
  { label: "Policies", path: "/#policies" },
  { label: "Bookings", path: "/#booking" },
  { label: "Terms", path: "/terms", highlight: true },
];

export type OpeningHour = { day: string; hours: string };

export const openingHours: OpeningHour[] = [
  { day: "Monday", hours: "12:00 - 23:00" },
  { day: "Tuesday", hours: "12:00 - 23:00" },
  { day: "Wednesday", hours: "12:00 - 23:00" },
  { day: "Thursday", hours: "12:00 - 23:00" },
  { day: "Friday", hours: "12:00 - 23:00" },
  { day: "Saturday", hours: "12:00 - 23:00" },
  { day: "Sunday", hours: "12:00 - 23:00" },
];

export type SocialPlatform = "facebook" | "twitter" | "instagram" | "tripadvisor";
export type SocialLink = { platform: SocialPlatform; label: string; href: string };

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
  year: number;
  businessName: string;
};

export const footerMeta: FooterMeta = {
  author: "Victor Blanco",
  authorUrl: "#",
  year: 2026,
  businessName: "The Orchard Bar",
};
