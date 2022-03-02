import React, { useState, useEffect, useRef, CSSProperties } from "react";
import styled from "styled-components";
import Footer from "./Nav/Footer";
import { useUpsertFormMutation } from "../../generated";

const Questions = (question_data: any) => {
  const [text, setText] = useState(question_data.question_data?.introduce);
  const [list, setList] = useState(
    question_data.question_data?.question.map((test: any) => ({
      message: test.message,
      length: test.length,
    }))
  );

  // setList((list: any) => question_data.question_data?.question.map());

  console.log(text);
  console.log(list);

  return (
    <Base>
      <Introduce>
        <Title>동아리 지원폼 수정하기</Title>
      </Introduce>
      <FormBase>
        <Form>
          <Introduceitem value={text} />
          <QuestionList value={list} />
          <Footer />
        </Form>
      </FormBase>
    </Base>
  );
};

const Introduceitem = ({ value }: any) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState(value);
  const [textAreaHeight, setTextAreaHeight] = useState("auto");
  const [parentHeight, setParentHeight] = useState("auto");

  useEffect(() => {
    setParentHeight(`${textAreaRef.current!.scrollHeight}px`);
    setTextAreaHeight(`${textAreaRef.current!.scrollHeight}px`);
  }, [text]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaHeight("auto");
    setParentHeight(`${textAreaRef.current!.scrollHeight}px`);
    setText(event.target.value);
  };

  return (
    <div>
      <IntroduceTitle>동아리 소개 수정</IntroduceTitle>
      <div
        style={{
          minHeight: parentHeight,
        }}
      >
        <IntroduceForm
          placeholder="동아리 소개와 유의 사항 등을 적어주세요"
          ref={textAreaRef}
          style={{
            height: textAreaHeight,
          }}
          rows={1}
          value={text}
          onChange={onChangeHandler}
          required
        />
      </div>
    </div>
  );
};

const QuestionList = ({ value }: any) => {
  return (
    <div>
      <IntroduceTitle>동아리 질문 수정</IntroduceTitle>
      <div></div>
    </div>
  );
};

const QuestionAdd = ({ value }: any) => {
  return (
    <div>
      <IntroduceTitle>동아리 질문 수정</IntroduceTitle>
      <div></div>
    </div>
  );
};

const Base = styled.div`
  padding-bottom: 130px;
  padding-top: 80px;
`;

const Introduce = styled.div`
  width: 87.72%;
  padding: 0;
  max-width: 1060px;
  margin: 0 auto 50px;
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 500;
  color: #3b3d40;
  margin: 0 auto 10px;
`;

const FormBase = styled.div`
  width: 87.72%;
  padding: 0;
  max-width: 1060px;
  margin: 0 auto 50px;
`;

const Form = styled.form``;

const IntroduceForm = styled.textarea`
  border: none;
  padding: 0;
  height: 34px;
  width: 100%;
  font-size: 16px;
  color: rgb(59, 61, 64);
  margin: 25px 0px 3px;
  white-space: pre-wrap;
  word-break: break-all;
  word-wrap: break-word;
  caret-color: #000;
  overflow: hidden;
  line-height: 22px;
  box-shadow: none !important;
  resize: none;
  outline: none;
  font-family: "Noto Sans KR", sans-serif;
`;

const IntroduceTitle = styled.div`
  padding: 20px 0 6px;
  font-size: 20px;
  font-weight: 500;
  color: #3b3d40;
  border-bottom: 1px solid #bababa;
`;

const URLTitle = styled.div`
  padding: 20px 0 6px;
  font-size: 16px;
  font-weight: 500;
  color: #3b3d40;
  border-bottom: 1px solid #bababa;
`;

const URLForm = styled.input`
  border: none;
  width: 80%;
  font-size: 16px;
  color: rgb(59, 61, 64);
  padding: 0;
  white-space: pre-wrap;
  word-break: break-all;
  word-wrap: break-word;
  caret-color: #000;
  overflow: hidden;
  box-shadow: none !important;
  resize: none;
  outline: none;
  font-family: "Noto Sans KR", sans-serif;
`;

const AddBase = styled.div`
  width: 100%;
  padding: 30px 10px 20px;
  display: block;
  border-bottom: 1px solid #f1f1f1;
  display: flex;
  justify-content: space-between;
`;

const AddButton = styled.button`
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  background: #ffffff;
  border: none;
  color: #91c788;
`;

const URLBase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 10px 20px;
`;

const URLText = styled.input`
  border: none;
  color: #3b3d40;
  font-size: 18px;
  pointer-events: none;
  font-family: "Noto Sans KR", sans-serif;
  width: 80%;
`;

const Delete = styled.button`
  color: #d1d1d1;
  font-size: 25px;
  font-weight: 600;
  padding: 0;
  border: 0;
  background: none;
  &:hover {
    color: red;
  }
`;

export default Questions;
