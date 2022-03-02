import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../apollo/apollo";
import Index from "../components/Login";

const Login: NextPage = () => {
  return <Index />;
};

export default withApollo(Login, { getDataFromTree });
