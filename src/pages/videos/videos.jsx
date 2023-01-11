import React from "react";
import VideoTab from "../../components/videoTab/videoTab";
import styles from "./videos.module.css";

export const Videos = () => {
  return (
    <section className={styles.videos}>
      <VideoTab sno="01" text="Workout at Home" videoNo="15" />
      <VideoTab sno="02" text="Stay Strong and Fit" videoNo="15" />
      <VideoTab sno="03" text="High Intensity" videoNo="15" />
      <VideoTab sno="04" text="Simple Workout" videoNo="15" />
      <VideoTab sno="05" text="Burn Calories" videoNo="15" />
    </section>
  );
};
