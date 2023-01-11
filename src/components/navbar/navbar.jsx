import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <span className={styles.Nav__header}>WORKOUT</span>
      <ul className={styles.Nav__items}>
        <li className={styles.Nav__item}>EXERCISES</li>
        <li className={styles.Nav__item}>TRAINERS</li>
        <li className={styles.Nav__item}>PRICING</li>
        <li className={styles.Nav__item}>LOGIN</li>
      </ul>
    </div>
  );
};

export default Navbar;
