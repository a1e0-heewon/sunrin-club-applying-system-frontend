import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../apollo/apollo";
import Index from "../components/Index";

const Home: NextPage = () => {
  return <Index />;
};

export default withApollo(Home, { getDataFromTree });
