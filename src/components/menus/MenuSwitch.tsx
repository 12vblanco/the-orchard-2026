import vegan from "../../assets/vegan.png";
import vegetarian from "../../assets/vegetarian.png";
import type { MenuType, SubMenu } from "../../data/menu";
import styles from "./MenuSwitch.module.css";

interface MenuSwitchProps {
  activeType: MenuType;
  activeSubMenuId: string;
  subMenusForType: SubMenu[];
  onTypeChange: (newType: MenuType) => void;
  onSubMenuChange: (newId: string) => void;
}

function MenuSwitch({
  activeType,
  activeSubMenuId,
  subMenusForType,
  onTypeChange,
  onSubMenuChange,
}: MenuSwitchProps) {
  return (
    <>
      <div>
        <div className={styles.menuTopSection}>
          <div className={styles.menuSelection}>
            <button
              className={activeType === "food" ? styles.activeTab : styles.tab}
              onClick={() => onTypeChange("food")}
            >
              Food menu
            </button>
            <button
              className={
                activeType === "drinks" ? styles.activeTab : styles.tab
              }
              onClick={() => onTypeChange("drinks")}
            >
              Drinks Menu
            </button>
          </div>
          <ul className={styles.menuLegend}>
            <li className={styles.dietary}>
              Vegetarian <img src={vegetarian} alt="Icon vegetarian" />
            </li>
            <li className={styles.dietary}>
              Vegan
              <img src={vegan} alt="Icon vegan" />
            </li>
          </ul>
        </div>

        <div className={styles.menuSubSelection}>
          {subMenusForType.map((subMenu) => (
            <button
              className={
                subMenu.id === activeSubMenuId
                  ? styles.activeSubTab
                  : styles.subTab
              }
              key={subMenu.id}
              onClick={() => onSubMenuChange(subMenu.id)}
            >
              {subMenu.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default MenuSwitch;
