import React, { useState } from "react";
import styled from "styled-components";

const Main = ({ club }: any) => {
  const NameClub = ["", "LAYER7", "UNIFOX", "NEFUS", "TEAMLOG", "EMOTION"];

  return (
    <Base>
      <Title>{NameClub[club]}</Title>
    </Base>
  );
};

const Base = styled.div`
  padding: 40px;
  text-
`;

const Title = styled.div`
  text-align: center;
  font-size: 50px;
  font-weight: 500;
  color: #3b3d40;
`;

export default Main;
