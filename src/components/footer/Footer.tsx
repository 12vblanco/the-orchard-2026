import logoWht from "../../assets/logo_wht 2.png";
import {
  footerMeta,
  footerNav,
  openingHours,
  socialLinks,
  type SocialPlatform,
} from "../../data/footer";
import { emailHref, phoneHref, venue } from "../../data/venue";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Brand + contact + socials */}
        <div className={styles.brand}>
          <img className={styles.logo} src={logoWht} alt="The Orchard Bar" />

          <address className={styles.contact}>
            {venue.addressLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
            <a className={styles.contactLink} href={phoneHref}>
              {venue.phone}
            </a>
            <a className={styles.contactLink} href={emailHref}>
              {venue.email}
            </a>
          </address>

          <ul className={styles.socials}>
            {socialLinks.map((social) => (
              <li key={social.platform}>
                <a
                  className={styles.socialLink}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  <SocialIcon platform={social.platform} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        <nav className={styles.column} aria-label="Footer">
          <h3 className={styles.columnTitle}>Navigation</h3>
          <ul className={styles.list}>
            {footerNav.map((item) => (
              <li key={item.label}>
                <a
                  className={item.highlight ? styles.navLinkActive : styles.navLink}
                  href={item.path}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Opening hours */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Opening Hours</h3>
          <ul className={styles.list}>
            {openingHours.map((entry) => (
              <li key={entry.day} className={styles.hoursRow}>
                {entry.day} {entry.hours}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p className={styles.colophon}>
          <a className={styles.author} href={footerMeta.authorUrl}>
            Website by {footerMeta.author}
          </a>{" "}
          © {footerMeta.year} {footerMeta.businessName}
        </p>
      </div>
    </footer>
  );
}

/* ----- Inline brand icons (tinted via currentColor) ----- */
function SocialIcon({ platform }: { platform: SocialPlatform }) {
  switch (platform) {
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
        </svg>
      );
    case "twitter":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
      );
    case "tripadvisor":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.964 2.135a5.997 5.997 0 0 0 4.04 10.43 5.976 5.976 0 0 0 4.075-1.6L12 19.705l1.92-2.09a5.972 5.972 0 0 0 4.072 1.598 6 6 0 0 0 6.004-5.998 5.99 5.99 0 0 0-1.953-4.43l1.957-2.137h-4.35a13.573 13.573 0 0 0-7.644-2.353zM12 6.255c1.53 0 3.062.303 4.504.903C13.942 8.138 12 10.43 12 13.107c0-2.678-1.943-4.969-4.504-5.949A11.756 11.756 0 0 1 12 6.255zM6.002 9.157a3.997 3.997 0 0 1 4.026 3.94v.057a4 4 0 1 1-4.026-3.997zm11.996 0a4 4 0 1 1 .002 7.998 4 4 0 0 1-.002-7.998zm-11.99 1.92a2.077 2.077 0 1 0-.001 4.154 2.077 2.077 0 0 0 0-4.153zm11.984 0a2.077 2.077 0 1 0 0 4.155 2.077 2.077 0 0 0 0-4.155z" />
        </svg>
      );
  }
}

export default Footer;
