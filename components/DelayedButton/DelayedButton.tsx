import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { animated, useSpring, useTransition } from "react-spring";

const AnimatedButtonDiv = styled(animated.div)`
  position: absolute;
  perspective: 400px;
`;

type Props = {
  children: React.ReactElement;
  waitBeforeShow?: number;
};

export default function DelayedButton({
  children,
  waitBeforeShow = 5000,
}: Props) {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    console.log(waitBeforeShow);
    const timer = setTimeout(() => {
      setShown(true);
    }, waitBeforeShow);
    return () => {
      clearTimeout(timer);
    };
  }, [waitBeforeShow]);
  const transition = useSpring({
    to: shown
      ? {
          transform: "translate(0px, 0px)",
        }
      : {
          transform: "translate(-10000px, 0px)",
        },
  });
  return <AnimatedButtonDiv style={transition}>{children}</AnimatedButtonDiv>;
}
