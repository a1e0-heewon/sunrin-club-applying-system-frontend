import React, { useState, useEffect } from "react";
import { useHealthLiveQuery } from "../../generated";
import styled from "styled-components";

const Close = () => {
  const [time, SetTime] = useState("");
  const [message, SetMessage] = useState("");
  const {
    data: timedata,
    loading: timeloading,
    error: timeerror,
  } = useHealthLiveQuery({
    variables: {},
  });

  useEffect(() => {
    SetTime(timedata?.healthLive.healthLive);

    if (time !== "") {
      const now = new Date(timedata?.healthLive.split(".")[0]);
      const openTime = new Date("2022-03-09T00:00:00");
      const closeTime = new Date("2022-03-15T23:59:59");

      now.setHours(now.getHours() + 9);

      if (openTime > now) {
        SetMessage("지원 시작 전입니다.");
      } else if (closeTime < now) {
        SetMessage("지원 시간이 종료되었습니다.");
      }
    }
  });

  return (
    <Base>
      <Closes>
        <Message>🚧 {message} 🚧</Message>
      </Closes>
    </Base>
  );
};

const Base = styled.div`
  width: 100vw;
  height: 100vh;
  color: #ff6f61;
  background-image: url("../images/background.png");
  background-repeat: no-repeat;
  background-position: center;
`;

const Closes = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Message = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  width: 18em;
  border-right: 3px solid #ff6f61;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  transform: translate(-50%, -50%);
  display: block;
  font-size: 60px;
  font-weight: 800;
  font-family: "Roboto", sans-serif;
  @keyframes typeMsg {
    0% {
      width: 0em;
    }
    100% {
      width: 18em;
    }
  }
  @keyframes curserAnim {
    0% {
      border-right-color: #ff6f61;
    }
    100% {
      border-right-color: transparent;
    }
  }
  animation: typeMsg 7s steps(40) 1s 1 normal both,
    curserAnim 500ms steps(40) infinite normal;

  @media screen and (max-width: 767px) {
    font-size: 25px;
    width: 15em;
    @keyframes typeMsg {
      0% {
        width: 0em;
      }
      100% {
        width: 15em;
      }
    }
  }
`;

export default Close;
