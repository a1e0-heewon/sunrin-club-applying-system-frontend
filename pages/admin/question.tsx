import Head from "next/head";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Cookies } from "react-cookie";
import Link from "next/link";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../../apollo/apollo";
import { useGetFormByClubQuery } from "../../generated";
import Questions from "../../components/Admin/question";
import Header from "../../components/Admin/Nav/Header";
import Loading from "../../components/loading";

const Question = ({ query }: any) => {
  const router = useRouter();
  const cookies = new Cookies();

  useEffect(() => {
    if (!cookies.get("token") || !cookies.get("club")) router.push("../login");
  });

  const id = cookies.get("club");
  const { data, loading, error } = useGetFormByClubQuery({
    variables: {
      club: id,
    },
  });

  if (loading) return <Loading />;
  if (error) return <Link href={"../../logout"} />;

  return (
    <div>
      <Header />
      <Questions question_data={data?.getFormByClub} />
    </div>
  );
};

export default withApollo(Question, { getDataFromTree });
