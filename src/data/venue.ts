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
  // Stored in obfuscated token form so the literal address stays out of the
  // source/bundle (deters scrapers). Decode with decodeEmail() before display.
  // "AhT" -> "@", "DhOT" -> "."
  email: "theorchardbarAhTgmailDhOTcom",
};

// Decodes the obfuscated email tokens back to a real address.
export const decodeEmail = (value: string): string =>
  value.replace("AhT", "@").replace("DhOT", ".");

// Convenience helper for tel: links (strips spaces).
export const phoneHref = `tel:${venue.phone.replace(/\s/g, "")}`;
// Kept obfuscated — the address is shown as an image and the href is decoded
// on click (see Booking/Footer), so it never appears in the DOM as text.
export const emailHref = `mailto:${venue.email}`;
