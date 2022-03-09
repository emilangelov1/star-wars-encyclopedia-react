import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

const crawl = keyframes`
    0% {
    opacity: 1;
    color: #feda4a;
    transform: rotateX(18deg) translate(0, 150vh);
  }
  95% {
    opacity: 1;
    transform: rotateX(25deg) translate(0, -300vh);
    color: #feda4a;
  }
  95.1% {
    opacity: 0;
    display: none;
  }
  98% {
    opacity: 0;
    display: none;
  }
`;

const WholeTextContainer = styled.div`
  transform: translate(0, 600vh);
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #feda4a;
  opacity: 0;
  font-family: "Pathway Gothic One", sans-serif;
  font-size: 4rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  text-align: center;
  animation: ${crawl} 13s linear;
  & > h1 {
    color: #feda4a;
  }
`;

type Props = {};

export default function ScrollingText({}: Props) {
  return (
    <WholeTextContainer>
      <p>Episode I</p>
      <h1>STAR WARS</h1>
      <p>
        Welcome to my Star Wars Encyclopedia App. Feel free to look around and
        make yourself at home.
      </p>
    </WholeTextContainer>
  );
}
