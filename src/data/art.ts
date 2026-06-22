// Content for the "Exhibitions" art section.
//
// PLACEHOLDER IMAGE: we don't yet have the side-room exhibition photo, so this
// reuses an existing asset. Swap the import below for the real photo when ready.
import exhibitionImg from "../assets/heroBG.jpg";

export type ArtContact = {
  before: string;
  linkText: string;
  email: string;
  after: string;
};

export type ArtContent = {
  heading: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
  contact: ArtContact;
};

export const artContent: ArtContent = {
  heading: "Exhibitions",
  image: exhibitionImg,
  imageAlt: "The Orchard's side room set up for an art exhibition",
  paragraphs: [
    "In our side room, we hold regular art exhibitions across the year supporting local artists and art students to showcase their work. Since we are close to the Botanical Gardens in Edinburgh, we encourage natural art, Edinburgh city-scapes, & photography.",
  ],
  contact: {
    before: "If you would like to hold an exhibition at The Orchard, please email Lorraine ",
    linkText: "here",
    email: "theorchardbar@gmail.com",
    after: " with your details.",
  },
};
