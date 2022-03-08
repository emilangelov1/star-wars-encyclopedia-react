import React from "react";
import styles from "./ScrollingText.module.css";

type Props = {};

export default function ScrollingText({}: Props) {
  return (
    <div className={styles.wholeText}>
      <p>Episode I</p>
      <h1>STAR WARS</h1>
      <p>
        Welcome to my Star Wars Encyclopedia App. Feel free to look around and
        make yourself at home.
      </p>
    </div>
  );
}
