import React, { useState, useEffect } from "react";
import styles from "./card.module.css";
import Background1 from "../../assets/image4.webp";
import Background2 from "../../assets/image7.webp";
import Background3 from "../../assets/image2.webp";
import Background4 from "../../assets/image12.webp";
import Background5 from "../../assets/image6.webp";
import Background6 from "../../assets/image3.webp";

export const Card = (props) => {
  const [key, setKey] = useState("");
  useEffect(() => {
    setKey(props.name);
  }, []);

  let background;
  switch (key) {
    case "Treadmill":
      background = Background1;
      break;
    case "Stretching":
      background = Background2;
      break;
    case "Yoga":
      background = Background3;
      break;
    case "Running":
      background = Background4;
      break;
    case "Lifting":
      background = Background5;
      break;
    case "Pushing":
      background = Background6;
      break;
    default:
      background = Background1;
      break;
  }
  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={styles.text}>
        <div className={styles.title}>
          <span className={styles.title__text}>{props.name}</span>
          <span className={styles.time}>58:24</span>
        </div>
        <div className={styles.calories}>250 est calories </div>
      </div>
    </div>
  );
};
