import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "./Nav/Header";
import Infos from "./info";
import Applys from "./apply";
import GoogleForm from "./googleForm";
import GoogleFormInfo from "./googleFormInfo";
import theme from "../../styles/theme";

const Index = () => {
  const [club, SetClub] = useState(0);

  const onClub = (value: number) => {
    if (club != value) SetClub(value);
    else SetClub(0);
  };

  return (
    <ThemeProvider theme={theme}>
      <Base>
        <Info>
          <Header click={(e: any) => onClub(e)} club={club} />
          {club !== 0 ? <Infos club={club} /> : <GoogleFormInfo />}
        </Info>
        <Apply>{club !== 0 ? <Applys club={club} /> : <GoogleForm />}</Apply>
      </Base>
    </ThemeProvider>
  );
};

const Base = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  z-index: 21;
`;

const Info = styled.div`
  width: 50%;
  height: 100%;
  float: left;
  box-sizing: border-box;
  background-color: #ffffff;

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
`;

const Apply = styled.div`
  width: 50%;
  height: 100%;
  float: right;
  box-sizing: border-box;
  background-color: #ffffff;

  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`;

export default Index;
