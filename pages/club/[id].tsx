import Head from "next/head";
import { get } from "lodash";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../../apollo/apollo";
import { useGetFormByClubQuery } from "../../generated";
import Index from "../../components/Club";
import Error from "../../components/Club/Error";
import Loading from "../../components/loading";

const Club = ({ query }: any) => {
  const id = get(query, "id");
  const { data, loading, error } = useGetFormByClubQuery({
    variables: {
      club: id,
    },
  });

  if (loading) return <Loading />;
  if (error || data?.getFormByClub.__typename == "InvalidFormError")
    return <Error />;
  return <Index club={id} datas={data} />;
};

export default withApollo(Club, { getDataFromTree });
