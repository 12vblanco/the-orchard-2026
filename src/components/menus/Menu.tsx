import { useState } from "react";
import cornerIcon from "../../assets/menu-corner.png";
import { menus, type MenuType } from "../../data/menu";
import FeaturedCards from "./FeaturedCards";
import styles from "./Menu.module.css";
import MenuContent from "./MenuContent";
import MenuSwitch from "./MenuSwitch";

function Menu() {
  const [activeType, setActiveType] = useState<MenuType>("food");
  const [activeSubMenuId, setActiveSubMenuId] = useState("main");

  const activeSubMenu = menus.find((m) => m.id === activeSubMenuId);
  const subMenusForType = menus.filter((m) => m.type === activeType);
  if (!activeSubMenu) {
    return null;
  }

  const handleSubMenuChange = (newId: string) => {
    setActiveSubMenuId(newId);
  };

  const handleTypeChange = (newType: MenuType) => {
    setActiveType(newType);
    const firstSubMenu = menus.find((m) => m.type === newType);
    if (firstSubMenu) {
      setActiveSubMenuId(firstSubMenu.id);
    }
  };

  const sourceForFeatured =
    activeType === "food" ? activeSubMenu : menus.find((m) => m.id === "main");

  const allFeaturedItems =
    sourceForFeatured?.categories.flatMap((c) =>
      c.items.filter((item) => item.featured),
    ) ?? [];

  const max = activeSubMenu.maxFeaturedCards;
  const featuredItems =
    max !== undefined ? allFeaturedItems.slice(0, max) : allFeaturedItems;

  return (
    <section id="menu" className={styles.menuSection}>
      <div className={styles.borderTall} />
      <div className={styles.menuFrame}>
        <img
          src={cornerIcon}
          alt=""
          aria-hidden="true"
          className={`${styles.corner} ${styles.cornerTL}`}
        />
        <img
          src={cornerIcon}
          alt=""
          aria-hidden="true"
          className={`${styles.corner} ${styles.cornerTR}`}
        />
        <img
          src={cornerIcon}
          alt=""
          aria-hidden="true"
          className={`${styles.corner} ${styles.cornerBR}`}
        />
        <img
          src={cornerIcon}
          alt=""
          aria-hidden="true"
          className={`${styles.corner} ${styles.cornerBL}`}
        />
        <div className={styles.menuTopRow}>
          <div className={styles.menuHeaders}>
            <h2 className={styles.menuHeader}>The Orchard’s Menu</h2>
            <p className={styles.menuSubheading}>
              We offer a regularly changing menu with seasonal produce,
              providing classic meals with a modern twist and a wide range of
              drinks.
            </p>
          </div>
          <MenuSwitch
            activeType={activeType}
            activeSubMenuId={activeSubMenuId}
            subMenusForType={subMenusForType}
            onTypeChange={handleTypeChange}
            onSubMenuChange={handleSubMenuChange}
          />
        </div>
        <div className={styles.menuBottomRow}>
          <div className={styles.menuColumn1}>
            <MenuContent subMenu={activeSubMenu} />
          </div>
          <div className={styles.menuColumn2}>
            {featuredItems.length > 0 && (
              <FeaturedCards items={featuredItems} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
