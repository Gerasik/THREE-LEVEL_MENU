import React from "react";

import MenuLevelOne from "./MenuLevelOne";
import styles from "./styles.module.scss";

const Menu = ({ menuList }) => {
  return (
    <>
      <div className={styles.wrap}>
        <nav className={styles.menu}>
          <ul className={styles["menu-level-one"]}>
            {menuList.map((i) => (
              <li key={i.title}>
                <MenuLevelOne menuItemOne={i} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={styles.backdrop} />
    </>
  );
};

export default Menu;
