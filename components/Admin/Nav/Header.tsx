import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { Cookies } from "react-cookie";

const Header = () => {
  const cookies = new Cookies();
  const club = cookies.get("club");

  return (
    <Mainframe>
      <Base>
        <Title>
          <Link href={"/admin"}>
            <Click>{club} ADMIN PAGE</Click>
          </Link>
        </Title>
        <Content>
          <Link href={"/admin/question?club=" + club}>
            <Click>QUESTION</Click>
          </Link>
          <Link href="/logout">
            <Click>LOGOUT</Click>
          </Link>
        </Content>
      </Base>
    </Mainframe>
  );
};

const Mainframe = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  z-index: 999;
`;

const Base = styled.div`
  width: 100%;
  margin: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  text-align: center;
  font-size: 25px;
  font-weight: 900;
`;

const Content = styled.div`
  display: flex;
`;

const Click = styled.div`
  margin-left: 15px;
  text-align: center;
  font-size: 20px;
  font-weight: 900;
`;

export default Header;
