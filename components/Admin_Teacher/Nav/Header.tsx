import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import ClubContent from "./ClubContent";

type ClubProps = {
  click: any;
  club: number;
};

const Header = ({ click, club }: ClubProps) => {
  return (
    <Mainframe>
      <Base>
        <Title>
          <Club onClick={(e: any) => click(0)}>
            <ClubContent
              isClicked={club == 0}
              clubName="L"
              color={{ background: "rgb(0, 0, 0, 0.7)" }}
            />
          </Club>
          <Club onClick={(e: any) => click(1)}>
            <ClubContent
              isClicked={club == 1}
              clubName="U"
              color={{ background: "rgb(246, 179, 61, 0.7)" }}
            />
          </Club>
          <Club onClick={(e: any) => click(2)}>
            <ClubContent
              isClicked={club == 2}
              clubName="N"
              color={{ background: "rgb(0, 0, 108, 0.7)" }}
            />
          </Club>
          <Club onClick={(e: any) => click(3)}>
            <ClubContent
              isClicked={club == 3}
              clubName="T"
              color={{ background: "rgb(255, 0, 0, 0.7)" }}
            />
          </Club>
          <Club onClick={(e: any) => click(4)}>
            <ClubContent
              isClicked={club == 4}
              clubName="E"
              color={{ background: "rgb(12, 0, 255, 0.7)" }}
            />
          </Club>
        </Title>
        <Content>
          <Link href="../../logout">
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
  z-index: 999;
  width: 100%;
  height: 100px;
  padding: 0 50px;
  display: flex;
  justify-content: space-around;
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
  width: 35%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
  z-index: 999;
`;

const Content = styled.div`
  display: flex;
`;

const Click = styled.div`
  margin-left: 15px;
  text-align: center;
  font-size: 20px;
  font-weight: 900;
  cursor: pointer;
`;

const Club = styled.div``;

export default Header;
