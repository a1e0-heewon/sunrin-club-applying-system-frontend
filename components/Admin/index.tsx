import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useGetFormByClubQuery } from "../../generated";
import Link from "next/link";

const Index = ({ club, datas }: any) => {
  const { data, loading, error } = useGetFormByClubQuery({
    variables: {
      club: club,
    },
  });

  const edges = datas?.getAnswerByClub.edges;
  const formdata = Array();

  if (data?.getFormByClub.__typename !== "InvalidFormError") {
    const formdata = data?.getFormByClub.question;
  }

  return (
    <Base>
      <Message>dasdas</Message>
      <Form>
        {edges.map((data: any) => (
          <label htmlFor={data.node.phoneNumber}>
            <Title>
              <Name>
                <TitleContent>{data.node.studentId}</TitleContent>
                <TitleContent>{data.node.name}</TitleContent>
              </Name>
              <Phone>
                <PhoneCheckBox id={data.node.phoneNumber} type="checkbox" />
                <PhoneTitle>{data.node.phoneNumber}</PhoneTitle>
              </Phone>
            </Title>
            <FormBase>
              {formdata.map((datas: any, index: any) => (
                <Question>
                  <QuestionTitle>{datas.message}</QuestionTitle>
                  <QuestionCotent>{data.node.answerList[index]}</QuestionCotent>
                </Question>
              ))}
            </FormBase>
          </label>
        ))}
      </Form>
    </Base>
  );
};

const Base = styled.div`
  padding-bottom: 50px;
`;

const Message = styled.div`
  width: 87.72%;
  padding: 0;
  max-width: 1060px;
  margin: 80px auto 0;
`;

const Form = styled.form`
  width: 87.72%;
  padding: 0;
  max-width: 1060px;
  margin: 0 auto;
`;

const FormBase = styled.div`
  padding-bottom: 30px;
  background-color: rgb(0, 0, 0, 0.02);
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 2px solid #bababa;
  padding: 20px 0 6px;
`;

const Name = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: bolder;
`;

const Phone = styled.div`
  display: flex;
  font-size: 14px;
  align-items: center;
  cursor: pointer;
`;

const PhoneCheckBox = styled.input`
  position: relative;
  top: 1.5px;
`;

const PhoneTitle = styled.div`
  padding: 3px 0 3px 10px;
  border-radius: 5px;
`;

const TitleContent = styled.div`
  margin-right: 5px;
`;

const Question = styled.div`
  width: 95%;
  max-width: 1000px;
  margin: 0 auto;
`;

const QuestionTitle = styled.div`
  padding: 10px 0 6px;
  font-size: 16px;
  font-weight: 500;
  color: #000000;
  border-bottom: 1px solid #bababa;
`;

const QuestionCotent = styled.div`
  font-size: 16px;
  color: #000000;
`;

export default Index;
