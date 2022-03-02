import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const Index = ({ club, data }: any) => {
  console.log(data);
  const edges = data.getAnswerByClub.edges;
  return (
    <Base>
      {edges.map((data: any) => (
        <div>{data.node.name}</div>
      ))}
    </Base>
  );
};

const Base = styled.div`
  margin-top: 80px;
  padding: 10px 30px;
`;

export default Index;
