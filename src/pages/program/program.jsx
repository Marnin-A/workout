import React from "react";
import styles from "./program.module.css";
import Trainer1 from "../../assets/image9.webp";
import Trainer3 from "../../assets/image10.webp";
import Trainer2 from "../../assets/image11.webp";
export const Program = () => {
  return (
    <section className={styles.program}>
      {/* Top section */}
      <div className={styles.program__top}>
        <p className={styles.top__left}>Workout Program Made For You</p>
        <div className={styles.top__right}>
          <div className={styles.top__right__content}>
            <p className={styles.top__right__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
              consectetur adipiscing.
            </p>
            <button className={styles.btn__area}>Get Started</button>
          </div>
        </div>
      </div>
      {/*  Bottom section*/}
      <div className={styles.program__bottom}>
        <div className={styles.trainer1}>
          <img src={Trainer1} alt="A woman meditating" />
          <span>
            <p className={styles.trainer__name}>Samantha William</p>
            <p className={styles.trainer__title}>Trainer</p>
          </span>
        </div>
        <div className={styles.trainer2}>
          <img src={Trainer2} alt="A woman running" />
          <span>
            <p className={styles.trainer__name}>Karen Summer</p>
            <p className={styles.trainer__title}>Trainer</p>
          </span>
        </div>
        <div className={styles.trainer3}>
          <img src={Trainer3} alt="A man doing leg raises" />
          <span>
            <p className={styles.trainer__name}>Jonathan Wise</p>
            <p className={styles.trainer__title}>Trainer</p>
          </span>
        </div>
      </div>
    </section>
  );
};
