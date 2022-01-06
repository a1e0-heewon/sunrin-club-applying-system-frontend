import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import Header from "../components/Nav/Header";
import Footer from "../components/Nav/Footer";
import Main from "../components/Main";

const Home: NextPage = () => {
  const [club, SetClub] = useState(0);

  const onClub = (value: number) => {
    console.log(value);
    if (club != value) SetClub(value);
    else SetClub(0);
  };

  return (
    <div>
      <Header click={(e: any) => onClub(e)} club={club} />
      <Main club={club} />
      <Footer />
    </div>
  );
};

export default Home;
