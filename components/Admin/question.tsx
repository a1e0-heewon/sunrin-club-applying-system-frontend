import React, { useState, useEffect, useRef, CSSProperties } from "react";
import styled from "styled-components";
import Footer from "./Nav/Footer";
import { useUpsertFormMutation } from "../../generated";

const Questions = (question_data: any) => {
  const [text, setText] = useState(question_data.question_data?.introduce);
  const [list, setList] = useState(
    question_data.question_data.question?.map((test: any) => ({
      message: test.message,
      length: test.length,
    }))
  );

  const [upsertFormMutation, { data, loading, error }] =
    useUpsertFormMutation();

  const ChangeIntroduce = (data: any) => {
    setText(data);
  };

  const ChangeQuestion = (list: any) => {
    setList(list);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(list);
    upsertFormMutation({
      variables: {
        input: {
          introduce: text,
          question: list,
        },
      },
    });
  };

  return (
    <Base>
      <Introduce>
        <Title>동아리 지원폼 수정하기</Title>
      </Introduce>
      <FormBase>
        <Form onSubmit={onSubmit}>
          <Introduceitem value={text} ChangeIntroduce={ChangeIntroduce} />
          <Questionitem value={list} ChangeQuestion={ChangeQuestion} />
          <Footer />
        </Form>
      </FormBase>
    </Base>
  );
};

const Introduceitem = ({ value, ChangeIntroduce }: any) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState(value);
  const [textAreaHeight, setTextAreaHeight] = useState("auto");
  const [parentHeight, setParentHeight] = useState("auto");

  useEffect(() => {
    setParentHeight(`${textAreaRef.current!.scrollHeight}px`);
    setTextAreaHeight(`${textAreaRef.current!.scrollHeight}px`);
    ChangeIntroduce(text);
  }, [text]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaHeight("auto");
    setParentHeight(`${textAreaRef.current!.scrollHeight}px`);
    setText(event.target.value);
  };

  return (
    <div>
      <ContentTitle>동아리 소개 수정</ContentTitle>
      <div
        style={{
          minHeight: parentHeight,
        }}
      >
        <ContentTextarea
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

const Questionitem = ({ value, ChangeQuestion }: any) => {
  const [input, setInput] = useState({ message: "", length: 0 });
  const [list, setList] = useState<any[]>(value);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [textAreaHeight, setTextAreaHeight] = useState("auto");
  const [parentHeight, setParentHeight] = useState("auto");

  useEffect(() => {
    setParentHeight(`${textAreaRef.current!.scrollHeight}px`);
    setTextAreaHeight(`${textAreaRef.current!.scrollHeight}px`);
  }, [input.message]);

  useEffect(() => {
    ChangeQuestion(list);
  }, [list]);

  const onChangeMessage = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaHeight("auto");
    setParentHeight(`${textAreaRef.current!.scrollHeight}px`);
    setInput({ message: event.target.value, length: input.length });
  };

  const onClickHandler = () => {
    if (
      input.message != "" &&
      input.message.split("").reverse().join("").indexOf(")") == 0
    ) {
      setInput({
        message: input.message,
        length: Number(
          input.message
            .substring(
              input.message.length -
                input.message.split("").reverse().join("").indexOf("("),
              input.message.length -
                input.message.split("").reverse().join("").indexOf(")") -
                1
            )
            .replace(/[^0-9]/g, "")
        ),
      });
    } else {
      if (input.message != "") alert("글자 수 제한이 없습니다.");
    }
  };

  useEffect(() => {
    if (input.message !== "") {
      setList((list: any) => list.concat(input));
      setInput({ message: "", length: 0 });
    }
  }, [input.length]);

  const onRemove = (event: any) => {
    setList(
      list.filter((data) => data.message !== list[event.target.id].message)
    );
  };

  return (
    <div>
      <ContentTitle>동아리 질문 수정</ContentTitle>
      <AddBase
        style={{
          minHeight: parentHeight,
        }}
      >
        <InputTextarea
          placeholder="동아리 질문을 괄호 안에 길이 제한과 함께 적어주세요 예시 : (400자)"
          ref={textAreaRef}
          style={{
            height: textAreaHeight,
          }}
          rows={1}
          value={input.message}
          onChange={onChangeMessage}
        />
        <AddButton type="button" onClick={onClickHandler}>
          + 추가
        </AddButton>
      </AddBase>
      <QuestionList list={list} onRemove={onRemove} />
    </div>
  );
};

const QuestionList = ({ list, onRemove }: any) => {
  return (
    <div>
      {list?.map((data: any, index: any) => (
        <ListBase>
          <ListText type="url" value={data.message} readOnly />
          <Delete type="button" id={index} onClick={onRemove}>
            &times;
          </Delete>
        </ListBase>
      ))}
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

const ContentTextarea = styled.textarea`
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

const InputTextarea = styled.textarea`
  border: none;
  padding: 0;
  width: 80%;
  font-size: 16px;
  color: rgb(59, 61, 64);
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

const ContentTitle = styled.div`
  padding: 20px 0 6px;
  font-size: 20px;
  font-weight: 500;
  color: #3b3d40;
  border-bottom: 1px solid #bababa;
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

const ListBase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 10px 20px;
`;

const ListText = styled.input`
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
