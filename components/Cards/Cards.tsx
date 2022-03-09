import React from "react";
import { useGesture } from "react-use-gesture";
import { animated, to, useSpring } from "react-spring";
import useMeasure from "react-use-measure";
import styled from "@emotion/styled";

const AnimatedButton = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 50px;
  max-width: 90%;
  width: 200px;
  max-height: 90%;
  height: 400px;
  border-radius: 20px;
  background-color: rgba(128, 128, 128, 0.4);
  backdrop-filter: blur(2px);
  transition: 0.2s;
`;

type Props = {};

export default function Cards({ children }: any) {
  const [ref, bounds] = useMeasure();
  const calculateBoxCenterY = () => bounds.top + bounds.height / 2;
  const calculateBoxCenterX = () => bounds.left + bounds.width / 2;
  const calcX = (y: number, ly: number) =>
    -(y - ly - calculateBoxCenterY()) / 60;
  const calcY = (x: number, lx: number) =>
    (x - lx - calculateBoxCenterX()) / 60;
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
      <AnimatedButton
        {...bind()}
        style={{
          transform: "perspective(600px)",
          scale: to([scale, zoom], (s, z) => s + z),
          rotateX,
          rotateY,
        }}
      >
        {children}
      </AnimatedButton>
    </div>
  );
}
