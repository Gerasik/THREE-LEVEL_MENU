import React, { useRef, useState } from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";
import MenuLevelTwo from "../MenuLevelTwo";

const MenuLevelOne = ({ menuItemOne, dropDownStatus, setDropDownStatus }) => {
  const divEl = useRef(null);
  const [dropDownSubStatus, setDropDownSubStatus] = useState("");
  console.log(dropDownSubStatus);
  return (
    <>
      <div className={styles["link-wrap"]} ref={divEl}>
        <a className={styles.link} href={`#${menuItemOne.title}`}>
          {menuItemOne.title}
        </a>
        {menuItemOne.subMenu ? (
          <button
            className={classNames(styles["drop-down"], {
              [styles.active]: dropDownStatus,
            })}
            onClick={() => {
              divEl.current.scrollIntoView();
              setDropDownStatus();
            }}
          ></button>
        ) : null}
      </div>
      {menuItemOne.subMenu ? (
        <ul
          className={classNames(styles["menu-level-two"], {
            [styles.active]: dropDownStatus,
          })}
        >
          {menuItemOne.subMenu.map((i) => (
            <li key={i.title}>
              <MenuLevelTwo
                menuItemTwo={i}
                dropDownSubStatus={dropDownSubStatus === i.title}
                setDropDownSubStatus={() =>
                  dropDownSubStatus === i.title
                    ? setDropDownSubStatus("")
                    : setDropDownSubStatus(i.title)
                }
              />
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default MenuLevelOne;
