import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Error = () => {
  return (
    <ErrorBase>
      <Errors>
        <ErrorMessage>폼이 존재하지 않습니다.</ErrorMessage>
      </Errors>
    </ErrorBase>
  );
};

const ErrorBase = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 80px;
`;

const Errors = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const ErrorMessage = styled.div`
  width: 500px;
  height: 500px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -250px;
  margin-top: -250px;
  font-size: 30px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Error;
