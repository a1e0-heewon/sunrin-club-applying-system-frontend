import React, { useState, useEffect, useRef, CSSProperties } from "react";
import styled from "styled-components";

export const Questionsitem = ({ question, value }: any) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState(value);
  const [textlength, setTextlength] = useState(0);
  const [textAreaHeight, setTextAreaHeight] = useState("auto");
  const [parentHeight, setParentHeight] = useState("auto");

  useEffect(() => {
    setParentHeight(`${textAreaRef.current!.scrollHeight}px`);
    setTextAreaHeight(`${textAreaRef.current!.scrollHeight}px`);
    setTextlength(text?.length == undefined ? 0 : text?.length);
  }, [text]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaHeight("auto");
    setParentHeight(`${textAreaRef.current!.scrollHeight}px`);
    setText(event.target.value);
  };

  return (
    <Base>
      <label>
        <QuestionTitle>
          {Number(
            question.message
              .substring(
                question.message.length -
                  question.message.split("").reverse().join("").indexOf("("),
                question.message.length -
                  question.message.split("").reverse().join("").indexOf(")") -
                  1
              )
              .replace(/[^0-9]/g, "")
          ) >= 3000
            ? question.message.substring(
                0,
                question.message.length -
                  question.message.split("").reverse().join("").indexOf("(")
              )
            : question.message}
        </QuestionTitle>
        <div
          style={{
            minHeight: parentHeight,
          }}
        >
          <QuestionForm
            placeholder="내용을 입력해주세요"
            ref={textAreaRef}
            style={{
              height: textAreaHeight,
            }}
            rows={1}
            value={text}
            onChange={onChangeHandler}
            maxLength={question.length}
            required
          />
        </div>
      </label>
      {textlength == 0 || question.length >= 3000 ? (
        <div></div>
      ) : (
        <QuestionLength>
          {textlength}/{question.length}
        </QuestionLength>
      )}
    </Base>
  );
};

export const Infoitem = ({
  name,
  info,
  placeholder,
  type,
  maxLength,
  value,
}: any) => {
  const [text, setText] = useState(value);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <label>
      <InfoBase>
        <InfoTitle>{info}</InfoTitle>
        <InfoForm
          id="info"
          name={name}
          placeholder={placeholder}
          type={type}
          maxLength={maxLength}
          value={text}
          onChange={onChangeHandler}
          required
        />
      </InfoBase>
    </label>
  );
};

export const PortfolioURL = ({ value }: any) => {
  const [text, setText] = useState(value);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <Base>
      <PortfolioTitle>
        포트폴리오를 구글드라이브에 업로드해 공유한 링크를 올려주세요
      </PortfolioTitle>
      <PortfolioForm
        id="PortfolioURL"
        name="PortfolioURLs"
        placeholder="https://www.PortfolioURLs.com"
        type="url"
        value={text}
        onChange={onChangeHandler}
        required
      />
    </Base>
  );
};

export const OtherURL = ({ value }: any) => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    if (value !== undefined) {
      setList((list: any) => list.concat(value));
    }
  }, []);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const onClickHandler = () => {
    if (text !== "") setList((list: any) => list.concat(text));
    setText("");
  };

  const onRemove = (event: any) => {
    delete list[event.target.id];
    setList(list.filter((list) => list !== undefined));
  };

  return (
    <Base>
      <URLTitle>포트폴리오 이외의 개인적인 블로그 링크등을 올려주세요</URLTitle>
      <AddBase>
        <URLForm
          name="OtherURLs"
          placeholder="https://www.OtherURLs.com"
          type="url"
          value={text}
          onChange={onChangeHandler}
        />
        <AddButton type="button" onClick={onClickHandler}>
          + 추가
        </AddButton>
      </AddBase>
      <URLList list={list} onRemove={onRemove} />
    </Base>
  );
};

const URLList = ({ list, onRemove }: any) => {
  return (
    <Base>
      {list.map((url: any, index: any) => (
        <URLBase>
          <URLText id="OtherURL" type="url" value={url} readOnly />
          <Delete type="button" id={index} onClick={onRemove}>
            &times;
          </Delete>
        </URLBase>
      ))}
    </Base>
  );
};

const Base = styled.div``;

const QuestionTitle = styled.div`
  padding: 20px 0 6px;
  font-size: 16px;
  font-weight: 500;
  color: #3b3d40;
  border-bottom: 1px solid #bababa;
`;

const QuestionForm = styled.textarea`
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

const QuestionLength = styled.div`
  width: 100%;
  text-align: right;
  font-size: 13px;
  color: #8c8c8c;
`;

const InfoBase = styled.div`
  display: flex;
  padding: 6px 0;
`;

const InfoTitle = styled.div`
  width: 66px;
  font-size: 16px;
  font-weight: 500;
  color: #3b3d40;
  border-right: 2px solid #3b3d40;
  text-align: right;
  padding: 0 5px 0 0;
`;

const InfoForm = styled.input`
  border: none;
  font-size: 16px;
  color: rgb(59, 61, 64);
  padding: 0;
  margin: 0px 10px;
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

const PortfolioTitle = styled.div`
  padding: 20px 0 6px;
  font-size: 16px;
  font-weight: 500;
  color: #3b3d40;
  border-bottom: 1px solid #bababa;
`;

const PortfolioForm = styled.input`
  width: 100%;
  border: none;
  font-size: 16px;
  color: rgb(59, 61, 64);
  padding: 0;
  margin: 20px 0 10px;
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
