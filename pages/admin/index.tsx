import Head from "next/head";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Cookies } from "react-cookie";
import { get } from "lodash";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../../apollo/apollo";
import { useGetAnswerByClubQuery } from "../../generated";
import Index from "../../components/Admin";
import Header from "../../components/Admin/Nav/Header";

const Admin = () => {
  const router = useRouter();
  const cookies = new Cookies();
  const id = cookies.get("club");

  useEffect(() => {
    if (!cookies.get("token") || !cookies.get("club")) router.push("../login");
  });

  const { data, loading, error } = useGetAnswerByClubQuery({
    variables: {
      club: id,
    },
  });

  console.log(data);
  if (loading) return <>로딩중입니다</>;
  if (error) return <>로딩중입니다</>;

  return (
    <div>
      <Header />
      <Index club={id} datas={data} />
    </div>
  );
};

export default withApollo(Admin, { getDataFromTree });
