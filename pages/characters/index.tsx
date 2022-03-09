import { Button, Card, Col, Pagination, Row } from "antd";
import React, { Dispatch, SetStateAction, useState } from "react";
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
  font-size: 1.5rem;
  max-width: 70%;
  width: 100px;
  color: rgb(226, 226, 226);
  font-weight: bold;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const CardButton = styled(Button)`
  position: absolute;
  top: 80%;
  width: 80%;
  border: none;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.6);
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  text-align: center;
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.212);
  transition: 0.2s;
  &:hover {
    color: rgba(0, 0, 0, 0.9);
    box-shadow: 1px 1px 40px 1px rgba(0, 0, 0, 0.4);
    transform: scale(102%);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 50px;
  width: 30%;
`;

const PrevNext = styled(Button)`
  justify-content: space-around;
  border: none;
  display: none;
  width: 35%;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.6);
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  text-align: center;
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
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
  const [page, setPage] = useState(18);
  const [initialPage, setInitialPage] = useState(0);

  if (loading) {
    <LoadingScreen />;
  }

  const nextPageHandler = () => {
    if (data?.allPeople?.people && data?.allPeople?.people.length > page) {
      setPage(page + 18);
      setInitialPage(initialPage + 18);
    }
  };

  const prevPageHandler = () => {
    if (initialPage > 17 && page > 17) {
      setPage(page - 18);
      setInitialPage(initialPage - 18);
    }
  };

  console.log(data);
  return (
    <Container>
      <Background />
      <SearchBar />
      <Row gutter={[16, 16]}>
        {data?.allPeople?.people?.slice(initialPage, page).map((val) => {
          return (
            <Col span={4} key={val?.name}>
              <Cards>
                <CardText>
                  <div>{val?.name}</div>
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
      <ButtonContainer>
        <PrevNext
          onClick={() => {
            prevPageHandler();
          }}
        >
          Previous Page
        </PrevNext>
        <PrevNext
          onClick={() => {
            nextPageHandler();
          }}
        >
          Next Page
        </PrevNext>
      </ButtonContainer>
      {/* <Pagination
        style={{ zIndex: 1 }}
        responsive
        // simple
        showSizeChanger={false}
        onChange={nextPageHandler}
        defaultCurrent={1}
        current={page}
        total={data?.allPeople?.people?.length}
      /> */}
    </Container>
  );
}
