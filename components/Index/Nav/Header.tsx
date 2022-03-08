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
      <Club onClick={(e: any) => click(0)}>
        <ClubContent
          isClicked={club == 0}
          clubName="H"
          color={{ background: "rgb(151, 0, 255, 0.7)" }}
        />
      </Club>
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
    </Mainframe>
  );
};

const Mainframe = styled.div`
  width: 100%;
  height: 100px;
  padding: 0 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
  z-index: 999;
`;

const Club = styled.div``;

export default Header;
