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
import IndexTeacher from "../../components/Admin_Teacher";
import Header from "../../components/Admin/Nav/Header";
import HeaderTeacher from "../../components/Admin_Teacher/Nav/Header";
import Loading from "../../components/loading";

const Admin = () => {
  const [cursor, setCursor] = useState(null);
  const [studentId, setStudentId] = useState(undefined);
  const [club, SetClub] = useState(0);
  const router = useRouter();
  const cookies = new Cookies();
  const id = cookies.get("club");
  const NameClub: any = ["LAYER7", "UNIFOX", "NEFUS", "TEAMLOG", "EMOTION"];

  const onClub = (value: number) => {
    if (club != value) SetClub(value);
    else SetClub(0);
  };

  if (id != "TEACHER") {
    var {
      data: dataClub,
      loading: loadingClub,
      error: errorClub,
      refetch: refetchClub,
      fetchMore: fetchMoreClub,
    } = useGetAnswerByClubQuery({
      variables: {
        club: id,
        limit: 10,
      },
    });
  } else {
    var {
      data: dataTeacher,
      loading: loadingTeacher,
      error: errorTeacher,
      refetch: refetchTeacher,
      fetchMore: fetchMoreTeacher,
    } = useGetAnswerByClubQuery({
      variables: {
        club: NameClub[club],
        limit: 10,
      },
    });
  }

  const readMoreClub = () => {
    fetchMoreClub({
      variables: {
        club: id,
        limit: 10,
        cursor: dataClub?.getAnswerByClub.pageInfo.endCursor,
      },
      updateQuery: (previousResult: any, { fetchMoreResult }) => {
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

  const readMoreTeacher = () => {
    fetchMoreTeacher({
      variables: {
        club: NameClub[club],
        limit: 10,
        cursor: dataTeacher?.getAnswerByClub.pageInfo.endCursor,
      },
      updateQuery: (previousResult: any, { fetchMoreResult }) => {
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

  if (loadingClub || loadingTeacher) return <Loading />;
  if (errorClub || errorTeacher)
    return (
      <Link href={"../../logout"}>
        <div></div>
      </Link>
    );

  if (id === "TEACHER") {
    return (
      <div>
        <HeaderTeacher click={(e: any) => onClub(e)} club={club} />
        <IndexTeacher
          club={NameClub[club]}
          dataClub={dataTeacher}
          readMoreClub={readMoreTeacher}
        />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Index club={id} dataClub={dataClub} readMoreClub={readMoreClub} />
    </div>
  );
};

export default withApollo(Admin, { getDataFromTree });
