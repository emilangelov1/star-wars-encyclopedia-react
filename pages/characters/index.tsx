import { Button, Card, Col, Row } from "antd";
import React from "react";
import Background from "../../components/Background/Background";
import Cards from "../../components/Cards/Cards";
import { useAllCharactersQuery } from "../../graphql/graphql-hooks";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import Text from "antd/lib/typography/Text";
import SearchBar from "../../components/SearchBar/SearchBar";
import Link from "next/link";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-direction: column;
`;

const CardText = styled(Text)`
  font-size: 1.2rem;
  color: rgb(226, 226, 226);
  font-weight: bold;
  text-align: center;
`;

const CardButton = styled(Button)`
  position: absolute;
  top: 80%;
  border: none;
  color: rgba(0, 0, 0, 0.6);
  font-size: 1.2rem;
  display: flex;
  align-items: center;
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

export default function Characters({}: Props) {
  const { data, loading } = useAllCharactersQuery();

  if (loading) {
    <LoadingScreen />;
  }

  console.log(data);
  return (
    <Container>
      <Background />
      <SearchBar />
      <Row gutter={[16, 16]}>
        {data?.allPeople?.people?.slice(0, 18).map((val) => {
          return (
            <Col span={4} key={val?.name}>
              <Cards>
                <CardText>
                  {val?.name}, {val?.birthYear}
                </CardText>
                <Link
                  href={"/characters/[character-id]"}
                  as={`/characters/${val?.name}`}
                >
                  <CardButton>See More</CardButton>
                </Link>
              </Cards>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
