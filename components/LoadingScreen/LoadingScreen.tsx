import { Spin } from "antd";
import React from "react";
import Background from "../Background/Background";
import styles from "./LoadingScreen.module.css";

type Props = {};

export default function loadingScreen({}: Props) {
  return (
    <div>
      <Background />
      <Spin className={styles.loading} size="large"></Spin>
    </div>
  );
}
