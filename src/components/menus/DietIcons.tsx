import veganIcon from "../../assets/vegan.png";
import vegetarianIcon from "../../assets/vegetarian.png";
import type { MenuItem } from "../../data/menu";
import styles from "./DietIcons.module.css";

interface DietIconsProps {
  item: Pick<MenuItem, "vegan" | "vegetarian">;
}

function DietIcons({ item }: DietIconsProps) {
  if (!item.vegan && !item.vegetarian) {
    return null;
  }

  return (
    <span className={styles.dietIcons}>
      {item.vegan && (
        <img className={styles.icon} src={veganIcon} alt="Vegan" title="Vegan" />
      )}
      {item.vegetarian && (
        <img
          className={styles.icon}
          src={vegetarianIcon}
          alt="Vegetarian"
          title="Vegetarian"
        />
      )}
    </span>
  );
}

export default DietIcons;
