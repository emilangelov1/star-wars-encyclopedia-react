import React, { useEffect, useState } from "react";
import { animated, useSpring, useTransition } from "react-spring";
import styles from "./DelayedButton.module.css";

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
  return (
    <animated.div className={styles.animatedButton} style={transition}>
      {children}
    </animated.div>
  );
}
