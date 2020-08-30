import React from "react";

import styles from "./styles.module.scss";

const MenuLevelTwo = ({ menuItemTwo }) => {
  return (
    <>
      <a className={styles.link} href="#">
        {menuItemTwo.title}
      </a>
      {menuItemTwo.subMenu ? (
        <ul className={styles["menu-level-three"]}>
          {menuItemTwo.subMenu.map((i) => (
            <li key="i.title">
              <a href="#">{i.title}</a>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default MenuLevelTwo;
