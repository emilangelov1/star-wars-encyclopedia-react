import { useRouter } from "next/router";
import React from "react";
import { useSinglePersonQuery } from "../../graphql/singlequery-hooks";

type Props = {};

export default function SingleCharacter({}: Props) {
  const router = useRouter();
  const { data, loading } =
    useSinglePersonQuery();
    // {
    //   variables: {
    //     personId:
    //   }
    // }
  return <div>asdasd</div>;
}
