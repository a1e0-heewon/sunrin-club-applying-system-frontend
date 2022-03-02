import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const Main = ({ club }: any) => {
  const NameClub = ["", "LAYER7", "UNIFOX", "NEFUS", "TEAMLOG", "EMOTION"];
  const ColorClub = ["", "#000000", "#AFDAE1", "#162044", "#A0A0A0", "#FFFFFF"];

  return (
    <Base>
      <Out club={NameClub[club].toLowerCase()} color={ColorClub[club]}>
        <Link href={`/club/${NameClub[club]}`}>
          <Over>
            <Apply>지원하기</Apply>
          </Over>
        </Link>
      </Out>
    </Base>
  );
};

interface Base {
  club: string;
  color: string;
}

const Over = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: relative;
  justify-content: center;
  align-items: center;
`;

const Out = styled.div<Base>`
  width: 100%;
  height: 100%;
  background-image: url("images/${(props) => props.club}.png");
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${(props) => props.color};
`;

const Base = styled.div`
  width: 100%;
  height: 100%;
  &:hover {
    ${Over} {
      display: flex;
    }
  }
`;

const Apply = styled.div`
  color: #ffffff;
  font-size: 50px;
  font-weight: bolder;
`;

export default Main;
