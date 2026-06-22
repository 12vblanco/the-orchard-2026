import type { MenuItem } from "../../data/menu";
import DietIcons from "./DietIcons";
import styles from "./FeaturedCards.module.css";

interface FeatureCardProps {
  items: MenuItem[];
}

function FeaturedCards({ items }: FeatureCardProps) {
  return (
    <div className={styles.cardContainer}>
      {items.map((item) => (
        <article className={styles.cardItem} key={item.name}>
          <h4 className={styles.cardTitle}>
            {item.name} {item.price}
            <DietIcons item={item} />
          </h4>
          <p className={styles.cardSubTitle}>{item.description}</p>
        </article>
      ))}
    </div>
  );
}

export default FeaturedCards;
