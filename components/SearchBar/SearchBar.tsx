import { Button, Input } from "antd";
import React, { useState } from "react";
import styles from "./SearchBar.module.css";

type Props = {};

export default function SearchBar({}: Props) {
  return (
    <form className={styles.form}>
      <input className={styles.input} placeholder="Search Character..."></input>
    </form>
  );
}
