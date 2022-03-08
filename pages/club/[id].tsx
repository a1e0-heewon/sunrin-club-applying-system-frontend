import Head from "next/head";
import { get } from "lodash";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../../apollo/apollo";
import { useGetFormByClubQuery } from "../../generated";
import Index from "../../components/Club";
import Error from "../../components/Club/Error";
import Close from "../../components/Club/close";
import Loading from "../../components/loading";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Club = ({ query }: any) => {
  const router = useRouter();
  const id = get(query, "id");
  const { data, loading, error } = useGetFormByClubQuery({
    variables: {
      club: id,
    },
  });
  const [time, SetTime] = useState("");
  const [isOpen, SetisOpen] = useState(true);

  useEffect(() => {
    fetch("http://worldtimeapi.org/api/timezone/Asia/Seoul")
      .then(function (response) {
        return response.json();
      })
      .then(function (time) {
        SetTime(JSON.stringify(time.datetime));
      });

    if (time !== "") {
      const now = new Date(time.split(".")[0].substr(1));
      const openTime = new Date("2022-03-09T00:00:00");
      const closeTime = new Date("2022-03-15T23:59:59");

      if (openTime > now || closeTime < now) {
        SetisOpen(false);
      }
    }
  });

  if (time !== "") {
    if (!isOpen) return <Close />;
    if (loading) return <Loading />;
    if (error || data?.getFormByClub.__typename == "InvalidFormError")
      return <Error />;

    return <Index club={id} datas={data} />;
  }

  return <Loading />;
};

export default withApollo(Club, { getDataFromTree });
