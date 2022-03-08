import { Button } from "antd";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Background from "../components/Background/Background";
import DelayedButton from "../components/DelayedButton/DelayedButton";
import ScrollingText from "../components/ScrollingText/ScrollingText";
import styles from "../styles/Home.module.css";

type SoundFn = () => HTMLAudioElement | undefined;
const soundFn: SoundFn = () => {
  if (typeof window !== "undefined") {
    return new Audio("/sounds/audio.mp3");
  }
};

const sound = soundFn();

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Background />
      <DelayedButton>
        <div className={styles.buttonWrapper}>
          <Button
            onClick={() => {
              sound?.play?.();
              setTimeout(() => {
                router.push("/search");
              }, 1200);
            }}
            className={styles.button}
          >
            ENTER
          </Button>
        </div>
      </DelayedButton>
      <ScrollingText />
    </div>
  );
};

export default Home;
