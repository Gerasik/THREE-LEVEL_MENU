import React, { useRef } from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

const MenuLevelTwo = ({
  menuItemTwo,
  dropDownSubStatus,
  setDropDownSubStatus,
}) => {
  const divEl = useRef(null);
  return (
    <>
      <div className={styles["link-wrap"]} ref={divEl}>
        <a className={styles.link} href={`#${menuItemTwo.title}`}>
          {menuItemTwo.title}
        </a>
        {menuItemTwo.subMenu ? (
          <button
            className={classNames(styles["drop-down"], {
              [styles.active]: dropDownSubStatus,
            })}
            onClick={() => {
              divEl.current.scrollIntoView();
              setDropDownSubStatus();
            }}
          ></button>
        ) : null}
      </div>
      {menuItemTwo.subMenu ? (
        <ul
          className={classNames(styles["menu-level-three"], {
            [styles.active]: dropDownSubStatus,
          })}
        >
          {menuItemTwo.subMenu.map((i) => (
            <li key={i.title}>
              <a href={`#${i.title}`}>{i.title}</a>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default MenuLevelTwo;
