import promoImg from "../assets/cover-img.webp";

export type BannerMessage = {
  text: string;
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
  alt: "World cup 2026 promo image",
  banners: [
    {
      text: "World Cup 2026 - Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿 Vs. Brazil 🇧🇷 24th June - Click here for more info!",
      endDate: "2026-06-24T23:59:59",
    },
  ],
};
