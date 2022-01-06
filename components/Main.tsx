import React, { useState } from "react";
import styled from "styled-components";

const MainPrint = ({ club }: any) => {
  const NameClub = ["", "layer7", "unifox", "nefus", "teamlog", "emotion"];
  const ColorClub = ["", "#000000", "#AFDAE1", "#162044", "#A0A0A0", "#ffffff"];

  return (
    <Base club={NameClub[club]} color={ColorClub[club]}>
      <div>ㅇㅁㄴ</div>
    </Base>
  );
};

interface Container {
  club: string;
  color: string;
}

const Base = styled.div<Container>`
  width: 100vw;
  height: 100vh;
  background-image: url("images/${(props) => props.club}.png");
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${(props) => props.color};
  z-index: 21;
`;

export default MainPrint;
