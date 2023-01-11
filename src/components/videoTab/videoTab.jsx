import styles from "./videoTab.module.css";
import Arrow from "../../assets/right-arrow.webp";
import React from "react";

const VideoTab = (props) => {
  return (
    <div className={styles.videoTab}>
      <div className={styles.videoTab__top}>
        <span className={styles.sno}>{props.sno}</span>
        <div className={styles.text}>
          <span className={styles.text}>{props.text}</span>
          <span className={styles.videno}>{props.videoNo} videos</span>
        </div>
        <span className={styles.videno}>
          <img src={Arrow} alt="an arrow" />
        </span>
      </div>
      <hr />
    </div>
  );
};

export default VideoTab;
