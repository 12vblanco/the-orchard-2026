import { useEffect, useState } from "react";
import heroBG from "../../assets/heroBG.jpg";
import { policies } from "../../data/hero";
import { worldCup2026 } from "../../data/promos";
import type { Ctas } from "../button/Button";
import EventPromo from "./EventPromo";
import styles from "./Hero.module.css";

interface HeroProps {
  ctas: Ctas;
}

function Hero({ ctas }: HeroProps) {
  const [policyIndex, setPolicyIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setPolicyIndex((prev) => (prev + 1) % policies.length);
    }, 8000);
    return () => clearInterval(intervalId);
  }, []);
  const currentPolicy = policies[policyIndex];
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay} />

      <img
        className={styles.heroBG}
        src={heroBG}
        alt="A picture of the bar with a selection of whiskeys"
      />
      <EventPromo config={worldCup2026} />
      <div className={styles.heroContent}>
        <h1 className={styles.heroHeading}>Welcome to The Orchard Bar</h1>
        <p className={styles.heroSubheading}>
          A casual, relaxed restaurant and bar located in Canonmills just a few
          minutes' walk from the botanic gardens.
        </p>
        <div className={styles.buttonRow}>
          {ctas.map((cta) => (
            <a
              key={cta.label}
              href={cta.path}
              className={
                cta.variant === "primary"
                  ? styles.buttonPrimary
                  : styles.buttonSecondary
              }
            >
              {cta.label}
            </a>
          ))}
        </div>
      </div>

      <div className={styles.heroPolicy} key={policyIndex}>
        {currentPolicy.prefix}{" "}
        <span className={styles.heroPolicySpan}>{currentPolicy.emphasis}</span>{" "}
        {currentPolicy.suffix}
      </div>
    </section>
  );
}

export default Hero;
