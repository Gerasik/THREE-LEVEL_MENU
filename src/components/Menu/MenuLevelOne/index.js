import React from "react";

import styles from "./styles.module.scss";
import MenuLevelTwo from "../MenuLevelTwo";

const MenuLevelOne = ({ menuItemOne }) => {
  console.log(styles);
  return (
    <>
      <a className={styles.link} href="#">
        {menuItemOne.title}
      </a>
      {menuItemOne.subMenu ? (
        <ul className={styles["menu-level-two"]}>
          {menuItemOne.subMenu.map((i) => (
            <li key={i.title}>
              <MenuLevelTwo menuItemTwo={i} />
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default MenuLevelOne;
