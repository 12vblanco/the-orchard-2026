import promoImg from "../assets/cover-img.webp";

export type BannerMessage = {
  text: string;
  text2: string;
  endDate: string;
  startDate?: string;
};
export type PromoConfig = {
  image: string;
  alt: string;
  banners: BannerMessage[];
};

export const worldCup2026: PromoConfig = {
  image: promoImg,
  alt: "Quiz night promo image",
  banners: [
    {
      text: "Friday Night Quiz!! - Every Fortnight from June 26th",
      text2: "Click here for more info!",
      endDate: "2026-08-21T23:59:59",
    },
  ],
};
