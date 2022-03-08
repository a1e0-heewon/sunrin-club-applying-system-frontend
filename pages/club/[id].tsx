import Head from "next/head";
import { get } from "lodash";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../../apollo/apollo";
import { useGetFormByClubQuery, useHealthLiveQuery } from "../../generated";
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
  const {
    data: timedata,
    loading: timeloading,
    error: timeerror,
  } = useHealthLiveQuery({
    variables: {},
  });
  const [time, SetTime] = useState("");
  const [isOpen, SetisOpen] = useState(true);

  useEffect(() => {
    SetTime(timedata?.healthLive.healthLive);

    if (time !== "") {
      const now = new Date(timedata?.healthLive.split(".")[0]);
      const openTime = new Date("2022-03-09T00:00:00");
      const closeTime = new Date("2022-03-15T23:59:59");

      now.setHours(now.getHours() + 9);

      if (openTime > now || closeTime < now) {
        SetisOpen(false);
      }
    }
  });

  if (!isOpen) return <Close />;
  if (loading || timeloading) return <Loading />;
  if (error || data?.getFormByClub.__typename == "InvalidFormError")
    return <Error />;

  return <Index club={id} datas={data} />;
};

export default withApollo(Club, { getDataFromTree });
