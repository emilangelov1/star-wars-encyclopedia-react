import React from "react";
import { useGesture, useHover } from "react-use-gesture";
import { ReactEventHandlers } from "react-use-gesture/dist/types";
import { Card } from "antd";
import { config } from "process";
import { animated, to, useSpring } from "react-spring";
import styles from "./Cards.module.css";
import useMeasure, { RectReadOnly } from "react-use-measure";

type Props = {};

export default function Cards({ children }: any) {
  const [ref, bounds] = useMeasure();
  const calculateBoxCenterY = () => bounds.top + bounds.height / 2;
  const calculateBoxCenterX = () => bounds.left + bounds.width / 2;
  const calcX = (y: number, ly: number) =>
    -(y - ly - calculateBoxCenterY()) / 80;
  const calcY = (x: number, lx: number) =>
    (x - lx - calculateBoxCenterX()) / 80;
  const [{ scale, rotateX, rotateY, zoom, x, y }, set] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    x: 0,
    y: 0,
    scale: 1,
    zoom: 0,
  }));

  const bind = useGesture({
    onMove: ({ xy: [px, py], hovering }) => {
      if (hovering) {
        const rotateX = calcX(py, y.get());
        const rotateY = calcY(px, x.get());
        // console.log({ rotateX, rotateY });
        set({
          rotateX,
          rotateY,
          scale: 1.1,
        });
      }
    },
    onHover: ({ hovering }) => {
      !hovering && set({ rotateX: 0, rotateY: 0, scale: 1 });
    },
  });

  // console.log(bounds);

  return (
    <div ref={ref}>
      <animated.div
        className={styles.Card}
        {...bind()}
        style={{
          transform: "perspective(600px)",
          scale: to([scale, zoom], (s, z) => s + z),
          rotateX,
          rotateY,
        }}
      >
        {children}
      </animated.div>
    </div>
  );
}
