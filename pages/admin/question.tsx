import Head from "next/head";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Cookies } from "react-cookie";
import { get } from "lodash";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../../apollo/apollo";
import { useGetFormByClubQuery } from "../../generated";
import Questions from "../../components/Admin/question";
import Header from "../../components/Admin/Nav/Header";

const Question = ({ query }: any) => {
  const router = useRouter();
  const cookies = new Cookies();

  useEffect(() => {
    if (!cookies.get("token") || !cookies.get("club")) router.push("../login");
  });

  const id = get(query, "club");
  const { data, loading, error } = useGetFormByClubQuery({
    variables: {
      club: id,
    },
  });

  return (
    <div>
      <Header />
      <Questions question_data={data?.getFormByClub} />
    </div>
  );
};

export default withApollo(Question, { getDataFromTree });
