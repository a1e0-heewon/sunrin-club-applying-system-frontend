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
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  padding-bottom: 3px;
  &:hover {
    filter: none;
  }

  @media screen and (max-width: 767px) {
    width: 2.5em;
    height: 2.5em;
  }
`;

const ClubText = styled.div`
  width: 50px;
  text-align: center;
  font-size: 25px;
  font-weight: bolder;
  color: #ffffff;

  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`;

const ClubContentClicked = styled.div`
  filter: none;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.5);
  transition: filter 0.4s ease-in-out;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  padding-bottom: 3px;

  @media screen and (max-width: 767px) {
    width: 2.5em;
    height: 2.5em;
  }
`;

const ClubTextClicked = styled.div`
  width: 100px;
  text-align: center;
  font-size: 25px;
  font-weight: bolder;
  color: #ffffff;

  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`;

export default Club;
