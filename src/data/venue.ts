// Shared venue details — reused by the Booking and Footer sections.
export type Venue = {
  name: string;
  addressLines: string[];
  mapUrl: string;
  phone: string;
  email: string;
};

export const venue: Venue = {
  name: "The Orchard Bar",
  addressLines: ["1-2 Howard Place, Canonmills", "Edinburgh, EH3 5JZ"],
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=The+Orchard+Bar+1-2+Howard+Place+Canonmills+Edinburgh+EH3+5JZ",
  phone: "0131 550 0850",
  email: "theorchardbar@gmail.com",
};

// Convenience helper for tel: links (strips spaces).
export const phoneHref = `tel:${venue.phone.replace(/\s/g, "")}`;
export const emailHref = `mailto:${venue.email}`;
