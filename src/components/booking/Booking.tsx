import { useState } from "react";

import emailImg from "../../assets/decor-3f9.png";
import bookingBG from "../../assets/home0.jpg";
import { bookingEmbed } from "../../data/booking";
import { decodeEmail, emailHref, phoneHref, venue } from "../../data/venue";
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
            {" "}
            <a
              className={styles.email}
              href={emailHref}
              onClick={(e) => {
                e.currentTarget.href = decodeEmail(e.currentTarget.href);
              }}
            >
              <img
                className={styles.emailImg}
                src={emailImg}
                alt="Email The Orchard Bar"
              />
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
            title="Book a table"
            src={bookingEmbed.src}
            onLoad={handleIframeLoad}
            style={{
              border: "none",
              width: 280,
              height: 362,
              colorScheme: "light",
              opacity: isIframeLoading ? 0 : 1,
              transition: "opacity 0.3s ease",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Booking;
