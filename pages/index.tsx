import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Button } from "antd";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Background from "../components/Background/Background";
import DelayedButton from "../components/DelayedButton/DelayedButton";
import ScrollingText from "../components/ScrollingText/ScrollingText";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 400px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const ButtonWrapper = styled.div`
  perspective: 400px;
`;

const buttonanim = keyframes`
    0% {
    transform: rotateY(20deg) rotateX(-5deg);
  }
  100% {
    transform: rotateY(-20deg) rotateX(10deg);
  }
`;

const ButtonAntd = styled(Button)`
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  transition: 0.1s;
  font-family: "Pathway Gothic One", sans-serif;
  font-weight: bold;
  font-size: 3em;
  background-color: rgb(255, 255, 255);
  animation: ${buttonanim} 3s ease-in-out infinite alternate;
  /* transform: rotate(0, 5deg); */
  &:hover {
    /* width: 110%; */
    /* height: 110%; */
    color: rgba(0, 0, 0, 0.479);
    box-shadow: 0px 0px 50px rgba(255, 255, 255, 0.137);
    transform: rotateX(10deg);
    /* font-size: 3.5em; */
  }
`;

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
    <Container>
      <Background />
      <DelayedButton>
        <ButtonWrapper>
          <ButtonAntd
            onClick={() => {
              sound?.play?.();
              setTimeout(() => {
                router.push("/search");
              }, 1200);
            }}
          >
            ENTER
          </ButtonAntd>
        </ButtonWrapper>
      </DelayedButton>
      <ScrollingText />
    </Container>
  );
};

export default Home;
