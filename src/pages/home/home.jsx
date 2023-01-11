import React from "react";
import styles from "./home.module.css";

export const Home = () => {
  return (
    <div>
      <section className={styles.hero}>
        {/* New bubble */}
        <div id={styles.note}>
          <span id={styles.new}>New</span>
          <span id={styles.note__text}>
            High Intensity workout to burn calories
          </span>
        </div>

        <div className={styles.intro}>
          <div className={styles.intro__top}>
            <div className={styles.cardio}>Cardio Exercise</div>
            <div className={styles.time__and__calories}>
              <div className={styles.info__bubble}>
                <div className={styles.time}>
                  <span id={styles.time}>38:14</span>
                  TIME
                </div>
              </div>
              <div className={styles.info__bubble}>
                <div className={styles.calories}>
                  <span id={styles.calories}>165</span>
                  EST CALORIES
                </div>
              </div>
            </div>
          </div>
          <div className={styles.intro__bottom}>
            <div className={styles.intro__bottom__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className={styles.intro__btns}>
              <button className={styles.get__started}>Get Started</button>
              <button className={styles.preview}>Preview</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
