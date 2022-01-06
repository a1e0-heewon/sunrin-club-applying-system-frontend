import React, { useState } from "react";
import styled from "styled-components";

const Club = ({ isClicked, clubName, color }: any) => {
  return (
    <>
      {isClicked ? (
        <ClubContentClicked style={color}>
          <ClubTextClicked>{clubName}</ClubTextClicked>
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
  filter: grayscale();
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.5);
  transition: filter 0.4s ease-in-out;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  &:hover {
    filter: none;
  }
`;

const ClubText = styled.div`
  width: 35px;
  text-align: center;
  font-size: 20px;
  font-weight: bolder;
  color: #ffffff;
`;

const ClubContentClicked = styled.div`
  filter: none;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.5);
  transition: filter 0.4s ease-in-out;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
`;

const ClubTextClicked = styled.div`
  width: 100px;
  text-align: center;
  font-size: 20px;
  font-weight: bolder;
  color: #ffffff;
`;

export default Club;
