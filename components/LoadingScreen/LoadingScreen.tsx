import { Spin } from "antd";
import React from "react";
import Background from "../Background/Background";

type Props = {};

export default function loadingScreen({}: Props) {
  return (
    <div>
      <Background />
      <Spin size="large"></Spin>
    </div>
  );
}
