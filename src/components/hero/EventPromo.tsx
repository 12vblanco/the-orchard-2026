import { useEffect, useState } from "react";
import type { PromoConfig } from "../../data/promos";
import styles from "./EventPromo.module.css";

interface EventPromoProps {
  config: PromoConfig;
}

function EventPromo({ config: { image, alt, banners } }: EventPromoProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Lock background scroll while the image overlay is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const now = new Date();
  const activeBanner = banners.find((b) => {
    const notYetStarted = b.startDate && new Date(b.startDate) > now;
    const alreadyEnded = new Date(b.endDate) < now;
    return !notYetStarted && !alreadyEnded;
  });

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <>
      {activeBanner && (
        <button type="button" className={styles.banner} onClick={open}>
          {activeBanner.text}
        </button>
      )}

      <button
        type="button"
        className={styles.promo}
        onClick={open}
        aria-label="View event details"
      >
        <img src={image} alt={alt} />
      </button>

      {isOpen && (
        <div
          className={styles.modal}
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            className={styles.close}
            onClick={close}
            aria-label="Close"
          >
            <span className={styles.closeLine} />
            <span className={styles.closeLine} />
          </button>
          <img className={styles.modalImg} src={image} alt={alt} />
        </div>
      )}
    </>
  );
}

export default EventPromo;
