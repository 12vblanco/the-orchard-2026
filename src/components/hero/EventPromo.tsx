import { useState } from "react";
import type { PromoConfig } from "../../data/promos";
import styles from "./EventPromo.module.css";

interface EventPromoProps {
  config: PromoConfig;
}

function EventPromo({ config: { image, alt, banners } }: EventPromoProps) {
  const [isBannerExpanded, setIsBannerExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isOpen = isBannerExpanded || isHovered;

  const handleBannerClick = () => {
    setIsBannerExpanded((prev) => !prev);
  };

  const now = new Date();
  const activeBanner = banners.find((b) => {
    const notYetStarted = b.startDate && new Date(b.startDate) > now;
    const alreadyEnded = new Date(b.endDate) < now;
    return !notYetStarted && !alreadyEnded;
  });

  return (
    <>
      {activeBanner && (
        <div className={styles.banner} onClick={handleBannerClick}>
          {activeBanner.text}
        </div>
      )}
      <div
        className={`${styles.promo} ${isOpen ? styles.expanded : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={image} alt={alt} />
      </div>
    </>
  );
}
export default EventPromo;
