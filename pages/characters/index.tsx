import { Button, Col, Input, Row, Spin } from "antd";
import React from "react";
import Background from "../../components/Background/Background";
import Cards from "../../components/Cards/Cards";
import { useAllCharactersQuery } from "../../graphql/graphql-hooks";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import Text from "antd/lib/typography/Text";
import styles from "./index.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import Link from "next/link";

type Props = {};

export default function characters({}: Props) {
  const { data, loading } = useAllCharactersQuery();

  if (loading) {
    <LoadingScreen />;
  }

  console.log(data);
  return (
    <div className={styles.container}>
      <Background />
      <SearchBar />
      <Row gutter={[16, 16]}>
        {data?.allPeople?.people?.slice(0, 18).map((val) => {
          return (
            <Col span={4} key={val?.name}>
              <Cards>
                <Text className={styles.CardText}>
                  {val?.name}, {val?.birthYear}
                </Text>
                <Link
                  href={"/characters/[character-id]"}
                  as={`/characters/${val?.name}`}
                >
                  <Button className={styles.CardButton}>See More</Button>
                </Link>
              </Cards>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
