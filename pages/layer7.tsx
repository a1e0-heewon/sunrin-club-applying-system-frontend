import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Nav/Header";
import Footer from "../components/Nav/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
};

export default Home;
