import emailImg from "../../assets/decor-3f9.png";
import logoWht from "../../assets/logo_wht 2.png";
import facebookIcon from "../../assets/social/facebook.svg";
import instagramIcon from "../../assets/social/instagram.svg";
import tripadvisorIcon from "../../assets/social/tripadvisor.svg";
import twitterIcon from "../../assets/social/twitter.svg";
import {
  footerMeta,
  footerNav,
  openingHours,
  socialLinks,
  type SocialPlatform,
} from "../../data/footer";
import { decodeEmail, emailHref, phoneHref, venue } from "../../data/venue";
import styles from "./Footer.module.css";

const socialIcons: Record<SocialPlatform, string> = {
  facebook: facebookIcon,
  twitter: twitterIcon,
  instagram: instagramIcon,
  tripadvisor: tripadvisorIcon,
};

// Split the nav into two columns under one heading: Home–Art, then the rest.
const navColumns = [footerNav.slice(0, 4), footerNav.slice(4)];

function Footer() {
  const currentYear = new Date().getFullYear();

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
              Phone: {venue.phone}
            </a>
            <a
              className={styles.contactLink}
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
                  <img
                    className={styles.socialIcon}
                    src={socialIcons[social.platform]}
                    alt=""
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation — one heading, two columns of links */}
        <nav className={styles.column} aria-label="Footer">
          <h3 className={styles.columnTitle}>Navigation</h3>
          <div className={styles.navColumns}>
            {navColumns.map((items) => (
              <ul key={items[0].label} className={styles.list}>
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      className={
                        item.highlight ? styles.navLinkActive : styles.navLink
                      }
                      href={item.path}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </nav>

        {/* Opening hours */}
        <div className={styles.column2}>
          <h3 className={styles.columnTitle}>Opening Hours</h3>
          <p className={styles.hoursRow}>{openingHours}</p>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p className={styles.colophon}>
          © {currentYear} {footerMeta.businessName} -{" "}
          <a className={styles.author} href={footerMeta.authorUrl}>
            Website by {footerMeta.author}
          </a>{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
