import styled from "@emotion/styled";
import { Spin } from "antd";
import React from "react";
import Background from "../Background/Background";

type Props = {};

const Spinner = styled(Spin)`
  align-items: center;
  justify-content: center;
  color: white;
`;

export default function LoadingScreen({}: Props) {
  return (
    <div>
      <Background />
      <Spinner size="large"></Spinner>
    </div>
  );
}
