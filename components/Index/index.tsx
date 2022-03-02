import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./Nav/Header";
import Infos from "./info";
import Applys from "./apply";
import GoogleForm from "./googleForm";
import GoogleFormInfo from "./googleFormInfo";

const Index = () => {
  const [club, SetClub] = useState(0);

  const onClub = (value: number) => {
    if (club != value) SetClub(value);
    else SetClub(0);
  };

  return (
    <Base>
      <Info>
        <Header click={(e: any) => onClub(e)} club={club} />
        {club !== 0 ? <Infos club={club} /> : <GoogleFormInfo />}
      </Info>
      <Apply>{club !== 0 ? <Applys club={club} /> : <GoogleForm />}</Apply>
    </Base>
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
`;

const Apply = styled.div`
  width: 50%;
  height: 100%;
  float: right;
  box-sizing: border-box;
  background-color: #ffffff;
`;

export default Index;
