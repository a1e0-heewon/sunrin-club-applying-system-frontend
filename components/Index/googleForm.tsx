import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const GoogleForm = () => {
  return (
    <Base>
      <Out>
        <Link href={`https://url.kr/5gltxo`}>
          <Over>
            <Apply>1, 2, 3 지망서</Apply>
          </Over>
        </Link>
      </Out>
    </Base>
  );
};

const Over = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: relative;
  justify-content: center;
  align-items: center;
`;

const Out = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("images/googleforms.png");
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #9700ff;
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

export default GoogleForm;
