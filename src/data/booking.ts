// Configuration for the TableSense booking embed shown in the Booking section.
export type BookingEmbed = {
  src: string;
  width: number;
  height: number;
  title: string;
};

export const bookingEmbed: BookingEmbed = {
  src: "https://booking.tablesense.com/organisation/2096cf8b-3ec7-4e08-9394-eb84a9d04a3d/business/e09741e3-14c8-4b31-9c06-64b197b16a9b/venue/06c3abe8-2ce4-4535-a07f-1c65d6836104/launcher?dm=true",
  width: 280,
  height: 362,
  title: "Book a table at The Orchard Bar",
};
