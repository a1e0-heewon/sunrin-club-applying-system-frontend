import React, { useState } from "react";
import styled from "styled-components";

const Club = ({ isClicked, clubName, clubFullName, color }: any) => {
  return (
    <>
      {isClicked ? (
        <ClubContentClicked style={color}>
          <ClubText>{clubFullName}</ClubText>
        </ClubContentClicked>
      ) : (
        <ClubContent style={color}>
          <ClubText>{clubName}</ClubText>
        </ClubContent>
      )}
    </>
  );
};

const ClubContent = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
`;

const ClubContentClicked = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
`;

const ClubText = styled.div`
  width: 35px;
  text-align: center;
  font-size: 20px;
  font-weight: bolder;
  color: #ffffff;
`;

export default Club;
