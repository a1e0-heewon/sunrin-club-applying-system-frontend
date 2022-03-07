import React, { useState } from "react";
import styled from "styled-components";

const LoadingBar = () => {
  return (
    <Base>
      <Loading>
        <svg>
          <circle cx="70" cy="70" r="50"></circle>
        </svg>
      </Loading>
    </Base>
  );
};

const Base = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const Loading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    position: relative;
    width: 150px;
    height: 150px;
    animation: rotate 2s linear infinite;

    circle {
      width: 100%;
      height: 100%;
      fill: none;
      stroke-width: 10;
      stroke: #00a1ff;
      stroke-linecap: round;
      transform: translate(5px, 5px);
      stroke-dasharray: 440;
      stroke-dashoffset: 440;
      animation: animate 4s linear infinite;
    }
  }

  @keyframes animate {
    0%,
    100% {
      stroke-dashoffset: 440;
    }

    50% {
      stroke-dashoffset: 0;
    }

    50.1% {
      stroke-dashoffset: 880;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LoadingBar;
