import { useState } from "react";
// PLACEHOLDER BACKGROUND: reusing the hero photo until a dedicated bar-interior
// shot is supplied. Swap this import for the real image when ready.
import bookingBG from "../../assets/heroBG.jpg";
import { bookingEmbed } from "../../data/booking";
import { emailHref, phoneHref, venue } from "../../data/venue";
import styles from "./Booking.module.css";

function Booking() {
  const [isIframeLoading, setIsIframeLoading] = useState(true);

  const handleIframeLoad = () => {
    // Small delay to avoid a flash if the iframe loads near-instantly
    setTimeout(() => setIsIframeLoading(false), 500);
  };

  return (
    <section id="booking" className={styles.bookingSection}>
      <img className={styles.bg} src={bookingBG} alt="" aria-hidden="true" />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.inner}>
        <div id="contact" className={styles.details}>
          <h2 className={styles.heading}>Secure Your Table</h2>

          <address className={styles.address}>
            {venue.addressLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
            <a
              className={styles.mapLink}
              href={venue.mapUrl}
              target="_blank"
              rel="noreferrer"
            >
              (Click to find us on the map)
            </a>
          </address>

          <p className={styles.contactLine}>
            Phone: <a href={phoneHref}>{venue.phone}</a>
          </p>
          <p className={styles.contactLine}>
            Email:{" "}
            <a className={styles.email} href={emailHref}>
              {venue.email}
            </a>
          </p>
        </div>

        <div
          className={`${styles.widgetWrapper} ${
            isIframeLoading ? styles.loading : ""
          }`}
        >
          {isIframeLoading && (
            <div className={styles.spinnerContainer}>
              <div className={styles.spinner} aria-hidden="true" />
              <p className={styles.loadingText}>Loading booking system...</p>
            </div>
          )}
          <iframe
            title={bookingEmbed.title}
            className={styles.iframe}
            src={bookingEmbed.src}
            allowTransparency
            onLoad={handleIframeLoad}
          />
        </div>
      </div>
    </section>
  );
}

export default Booking;
