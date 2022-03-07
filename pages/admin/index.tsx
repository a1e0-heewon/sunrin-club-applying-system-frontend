import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Cookies } from "react-cookie";
import { get } from "lodash";
import Link from "next/link";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../../apollo/apollo";
import { useGetAnswerByClubQuery } from "../../generated";
import Index from "../../components/Admin";
import Header from "../../components/Admin/Nav/Header";
import Loading from "../../components/loading";

const Admin = () => {
  const [cursor, setCursor] = useState(null);
  const router = useRouter();
  const cookies = new Cookies();
  const id = cookies.get("club");
  const { data, loading, error, refetch, fetchMore } = useGetAnswerByClubQuery({
    variables: {
      club: id,
      limit: 3,
    },
  });

  const readMore = () => {
    fetchMore({
      variables: {
        club: id,
        limit: 3,
        cursor: data?.getAnswerByClub.pageInfo.endCursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        console.log(previousResult);
        console.log(fetchMoreResult);
        console.log(previousResult?.getAnswerByClub.pageInfo.endCursor);
        console.log(fetchMoreResult?.getAnswerByClub.pageInfo.endCursor);
        console.log(
          Object.assign({}, fetchMoreResult, {
            getAnswerByClub: {
              edges: [
                ...previousResult.getAnswerByClub.edges,
                ...fetchMoreResult.getAnswerByClub.edges,
              ],
              pageInfo: fetchMoreResult.getAnswerByClub.pageInfo,
              totalCount: fetchMoreResult.getAnswerByClub.totalCount,
            },
          })
        );

        if (!fetchMoreResult) return previousResult;
        return Object.assign({}, fetchMoreResult, {
          getAnswerByClub: {
            edges: [
              ...previousResult.getAnswerByClub.edges,
              ...fetchMoreResult.getAnswerByClub.edges,
            ],
            pageInfo: fetchMoreResult.getAnswerByClub.pageInfo,
            totalCount: fetchMoreResult.getAnswerByClub.totalCount,
            __typename: fetchMoreResult.getAnswerByClub.__typename,
          },
        });
      },
    });
  };

  useEffect(() => {
    if (!cookies.get("token") || !cookies.get("club")) router.push("../login");
  });

  if (loading) return <Loading />;
  if (error)
    return (
      <Link href={"../../logout"}>
        <div></div>
      </Link>
    );

  return (
    <div>
      <Header />
      <Index club={id} datas={data} readMore={readMore} />
    </div>
  );
};

export default withApollo(Admin, { getDataFromTree });
