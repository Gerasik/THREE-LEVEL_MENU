import React, { useState } from "react";
import classNames from "classnames";

import MenuLevelOne from "./MenuLevelOne";
import BurgerButton from "./BurgerButton";
import styles from "./styles.module.scss";

const Menu = ({ menuList }) => {
  const [active, setActive] = useState(false);
  const [dropDownStatus, setDropDownStatus] = useState("");

  return (
    <>
      <div className={styles.wrap}>
        <nav className={styles.menu}>
          <ul
            className={classNames(styles["menu-level-one"], {
              [styles.active]: active,
            })}
          >
            {menuList.map((i) => (
              <li key={i.title}>
                <MenuLevelOne
                  menuItemOne={i}
                  dropDownStatus={dropDownStatus === i.title}
                  setDropDownStatus={() =>
                    dropDownStatus === i.title
                      ? setDropDownStatus("")
                      : setDropDownStatus(i.title)
                  }
                />
              </li>
            ))}
          </ul>
          <BurgerButton setActive={() => setActive(!active)} active={active} />
        </nav>
      </div>
      <div
        className={classNames(styles.backdrop, {
          [styles.active]: active,
        })}
      />
    </>
  );
};

export default Menu;
