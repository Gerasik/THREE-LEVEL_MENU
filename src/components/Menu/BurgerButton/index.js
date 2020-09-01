import React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

const BurgerButton = ({ setActive, active }) => {
  return (
    <button
      className={classNames(styles["burger-button"], {
        [styles.active]: active,
      })}
      onClick={setActive}
    >
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
};

export default BurgerButton;
