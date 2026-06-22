import type { SubMenu } from "../../data/menu";
import DietIcons from "./DietIcons";
import styles from "./MenuContent.module.css";

interface MenuContentProps {
  subMenu: SubMenu;
}

function MenuContent({ subMenu }: MenuContentProps) {
  return (
    <div className={styles.menuContent}>
      {subMenu.allergyNotice && (
        <p className={styles.allergies}>{subMenu.allergyNotice}</p>
      )}
      {subMenu.servingHours && <p>{subMenu.servingHours}</p>}

      {subMenu.categories.map((category) => (
        <div key={category.name}>
          <h3>{category.name}</h3>
          {category.note && <p className={styles.note}>{category.note}</p>}

          {category.items.map((item) => (
            <div key={item.name}>
              <h4>
                {item.name} {item.price}
                <DietIcons item={item} />
              </h4>
              {item.description && <p>{item.description}</p>}
              {item.note && <p>{item.note}</p>}
            </div>
          ))}
        </div>
      ))}
      {subMenu.note && <p className={styles.note}>{subMenu.note}</p>}

      {subMenu.chipFryerNotice && (
        <p className={styles.chipFryerNotice}>{subMenu.chipFryerNotice}</p>
      )}
    </div>
  );
}
export default MenuContent;
