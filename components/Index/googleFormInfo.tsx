import React, { useState } from "react";
import styled from "styled-components";

const GoogleFormInfo = () => {
  return (
    <Base>
      <Title>공지사항</Title>
      <Main>
        <Subheading>
          동아리 지원 기간 : 2022.03.09.(수) 00:00 ~ 03.15.(화) 23:59
        </Subheading>
        <Subheading>동아리 지원 순서</Subheading>
        <Ol>
          <li>동아리별 지원서 및 포트폴리오를 지원 동아리에 제출한다.</li>
          <li>동아리 1, 2, 3 지망서를 제출한다.</li>
        </Ol>
        <Subheading>동아리 지원 유의사항</Subheading>
        <Ul>
          <Li>
            동아리 1, 2, 3 지망서만 제출하고 동아리별 지원서를 제출하지 않은
            경우 실격 처리
          </Li>
          <Li>
            동아리 1, 2, 3 지망서를 제출하지 않고 동아리별 지원서만 제출한
            경우에는 지망을 고려하지 않고 합격한 동아리 중 임의 배정
          </Li>
          <Li>
            타학과/일반 동아리는 동아리 1, 2, 3 지망서에 적지 않으며, 03.22.(화)
            까지 타 동아리 동시 합격 시 조정
          </Li>
          <Li>
            반드시 3개 이하의 동아리에 지원서를 제출해야 하고, 4개 이상의
            동아리에 지원한 경우 실격처리되며 1, 2, 3 지망을 모두 채울 필요는
            없고 희망하는 개수만 채우면 됨
          </Li>
          <Li>
            여러 번 제출 시 마지막 제출된 것으로 처리되며 지원기간 이외에 제출한
            것은 모두 무효처리
          </Li>
          <Li>자신의 1, 2, 3 지망은 면접 시 절대 발설 금지</Li>
        </Ul>
      </Main>
    </Base>
  );
};

const Base = styled.div`
  padding: 40px;
`;

const Title = styled.div`
  text-align: center;
  font-size: 50px;
  font-weight: 500;
  color: #3b3d40;
`;

const Main = styled.div`
  margin-top: 45px;
`;

const Subheading = styled.div`
  margin-top: 5px;
  font-size: 18px;
  font-weight: 400;
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Ol = styled.ol`
  margin: 2px;
  padding: 0 0 4px 26px;
`;

const Li = styled.li`
  position: relative;
  margin: 2px 0 0 0;
  padding: 0 0 4px 16px;
  font-size: 16px;
  color: #000;
  &:before {
    content: "";
    position: absolute;
    top: 10px;
    left: 6px;
    width: 5px;
    height: 1.5px;
    background: #262626;
  }
`;

export default GoogleFormInfo;
