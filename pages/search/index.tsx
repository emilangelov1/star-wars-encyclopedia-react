import styled from "@emotion/styled";
import { Button } from "antd";
import Text from "antd/lib/typography/Text";
import Link from "next/link";
import React from "react";
import Background from "../../components/Background/Background";
import Cards from "../../components/Cards/Cards";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const CardImage = styled.img`
  object-fit: contain;
  margin: 0 auto;
  padding: 0;
`;

const CardText = styled(Text)`
  font-size: 2rem;
  font-weight: bolder;
  color: white;
  margin: 10px;
  text-shadow: 1px 1px 10px rgb(0, 0, 0);
`;

const CardButton = styled(Button)`
  border: none;
  width: 80%;
  color: rgba(0, 0, 0, 0.6);
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.212);
  transition: 0.2s;
  &:hover {
    color: rgba(0, 0, 0, 0.9);
    box-shadow: 1px 1px 40px 1px rgba(0, 0, 0, 0.4);
    transform: scale(102%);
  }
`;

type Props = {};

export default function index({}: Props) {
  return (
    <Container>
      <Background />

      <Cards>
        <CardImage src="https://static.wikia.nocookie.net/starwars/images/6/63/BossNass-SWCT.png" />
        <CardText>Characters</CardText>
        <Link href={"/characters"} passHref>
          <CardButton>See More</CardButton>
        </Link>
      </Cards>
      <Cards></Cards>
      <Cards></Cards>
    </Container>
  );
}
