import logoBk from "../../assets/logo_black.png";
import type { NavItems } from "../../data/navigation";
import styles from "./Navigation.module.css";

interface NavigationProps {
  navLinks: NavItems;
}

function Navigation({ navLinks }: NavigationProps) {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <a href="/">
            <img className={styles.logo} alt="The Orchard Bar" src={logoBk} />
          </a>
        </div>
        <ul className={styles.navLinks}>
          {navLinks.map((navLink) => (
            <li key={navLink.label} className="navLink">
              <a href={navLink.path}>{navLink.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
