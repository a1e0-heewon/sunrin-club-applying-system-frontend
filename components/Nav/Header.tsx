import React, { useState } from "react";
import styled from "styled-components";
import ClubContent from "./ClubContent";

type ClubProps = {
  click: any;
  club: number;
};

const Header = ({ click, club }: ClubProps) => {
  return (
    <Mainframe>
      <Content>
        <Title>동아리 지원 페이지</Title>
        <Clubs>
          <Club onClick={(e: any) => click(1)}>
            <ClubContent
              isClicked={club == 1}
              clubName="L"
              color={{ background: "rgb(0, 0, 0, 0.7)" }}
            />
          </Club>
          <Club onClick={(e: any) => click(2)}>
            <ClubContent
              isClicked={club == 2}
              clubName="U"
              color={{ background: "rgb(246, 179, 61, 0.7)" }}
            />
          </Club>
          <Club onClick={(e: any) => click(3)}>
            <ClubContent
              isClicked={club == 3}
              clubName="N"
              color={{ background: "rgb(0, 0, 108, 0.7)" }}
            />
          </Club>
          <Club onClick={(e: any) => click(4)}>
            <ClubContent
              isClicked={club == 4}
              clubName="T"
              color={{ background: "rgb(255, 0, 0, 0.7)" }}
            />
          </Club>
          <Club onClick={(e: any) => click(5)}>
            <ClubContent
              isClicked={club == 5}
              clubName="E"
              color={{ background: "rgb(12, 0, 255, 0.7)" }}
            />
          </Club>
        </Clubs>
      </Content>
    </Mainframe>
  );
};

const Mainframe = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  z-index: 999;
`;

const Content = styled.div`
  width: 60%;
  margin: 0 50px;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: bolder;
  margin-right: 10%;
`;

const Clubs = styled.div`
  width: 40%;
  display: flex;
`;

const Club = styled.div`
  margin-right: 40px;
`;

export default Header;
