import { artContent } from "../../data/art";
import styles from "./Art.module.css";

function Art() {
  const { image, imageAlt, heading, paragraphs, contact } = artContent;

  return (
    <section id="art" className={styles.artSection}>
      <div className={styles.inner}>
        <div className={styles.media}>
          <img className={styles.image} src={image} alt={imageAlt} />
        </div>

        <div className={styles.body}>
          <h2 className={styles.heading}>{heading}</h2>

          {paragraphs.map((para) => (
            <p key={para.slice(0, 24)} className={styles.paragraph}>
              {para}
            </p>
          ))}

          <p className={styles.paragraph}>
            {contact.before}
            <a className={styles.link} href={`mailto:${contact.email}`}>
              {contact.linkText}
            </a>
            {contact.after}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Art;
