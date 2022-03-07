import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Cookies } from "react-cookie";

const Logout: NextPage = () => {
  const router = useRouter();
  const cookies = new Cookies();

  useEffect(() => {
    cookies.remove("club");
    cookies.remove("token");

    router.push("login");
  }, []);
  return <></>;
};

export default Logout;
