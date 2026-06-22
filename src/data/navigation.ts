export type NavItem = { label: string; path: string };
export type NavItems = NavItem[];

export const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Menu", path: "/#menu" },
  { label: "Art", path: "/#art" },
  { label: "Contact", path: "/#contact" },
  { label: "Booking", path: "/#booking" },
  // { label: "Terms", path: "/terms" },
];
