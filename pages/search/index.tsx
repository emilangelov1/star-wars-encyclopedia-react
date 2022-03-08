import { Button } from "antd";
import Text from "antd/lib/typography/Text";
import Link from "next/link";
import React from "react";
import Background from "../../components/Background/Background";
import Cards from "../../components/Cards/Cards";
import styles from "./index.module.css";

type Props = {};

export default function index({}: Props) {
  return (
    <div className={styles.container}>
      <Background />

      <Cards>
        <img
          className={styles.CardImage}
          src="https://static.wikia.nocookie.net/starwars/images/6/63/BossNass-SWCT.png"
        />
        <Text className={styles.CardText}>Characters</Text>
        <Link href={"/characters"} passHref>
          <Button className={styles.CardButton}>See More</Button>
        </Link>
      </Cards>
      <Cards></Cards>
      <Cards></Cards>
    </div>
  );
}
