import artImg from "../../assets/new9.jpg";
import { artContent } from "../../data/art";
import styles from "./Art.module.css";

function Art() {
  const { heading, paragraphs, contact } = artContent;

  return (
    <section id="art" className={styles.artSection}>
      <div className={styles.inner}>
        <div className={styles.media}>
          <div className={styles.overlay} aria-hidden="true" />
          <img
            className={styles.image}
            src={artImg}
            alt="Image of the back room with art"
          />
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
            <a
              className={styles.link}
              href={`mailto:${contact.email}`}
              onClick={(e) => {
                e.currentTarget.href = e.currentTarget.href
                  .replace("AhT", "@")
                  .replace("DhOT", ".");
              }}
            >
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
