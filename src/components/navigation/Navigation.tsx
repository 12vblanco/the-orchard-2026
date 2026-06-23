import { useEffect, useState } from "react";
import logoBk from "../../assets/logo_black.png";
import type { NavItems } from "../../data/navigation";
import styles from "./Navigation.module.css";

interface NavigationProps {
  navLinks: NavItems;
}

function Navigation({ navLinks }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock background scroll while the full-screen menu is open.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <a href="/" onClick={closeMenu}>
            <img className={styles.logo} alt="The Orchard Bar" src={logoBk} />
          </a>
        </div>

        <button
          type="button"
          className={`${styles.burger} ${isMenuOpen ? styles.burgerOpen : ""}`}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </button>

        <ul
          className={`${styles.navLinks} ${
            isMenuOpen ? styles.navLinksOpen : ""
          }`}
        >
          {navLinks.map((navLink) => (
            <li key={navLink.label} className={styles.navLink}>
              <a href={navLink.path} onClick={closeMenu}>
                {navLink.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
