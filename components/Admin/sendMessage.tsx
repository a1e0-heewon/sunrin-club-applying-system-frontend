import React, { useMemo, useState, useRef, useEffect } from "react";
import ReactDOM, { createPortal } from "react-dom";
import styled from "styled-components";

const SubmitModal = ({ submitCheck, onClose, ChangeMessage }: any) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState("");
  const [textAreaHeight, setTextAreaHeight] = useState("auto");
  const [parentHeight, setParentHeight] = useState("auto");

  useEffect(() => {
    setParentHeight(`${textAreaRef.current!.scrollHeight}px`);
    setTextAreaHeight(`${textAreaRef.current!.scrollHeight}px`);
    ChangeMessage(text);
  }, [text]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaHeight("auto");
    setParentHeight(`${textAreaRef.current!.scrollHeight}px`);
    setText(event.target.value);
  };

  return (
    <Modal>
      <Base>
        <Back />
        <Content>
          <div className="title">문자를 보내시겠습니까?</div>
          <div
            style={{
              minHeight: parentHeight,
            }}
          >
            <ContentTextarea
              placeholder="문자 내용을 입력해주세요"
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
          <div className="action">
            <Button onClick={onClose} color="#9ea6af">
              닫기
            </Button>
            <Button onClick={submitCheck} color="#2964a9">
              보내기
            </Button>
          </div>
        </Content>
      </Base>
    </Modal>
  );
};

const Modal = ({ children }: any) => {
  const modalElement = useMemo(() => document.getElementById("portal"), [])!;
  return createPortal(children, modalElement);
};

const Base = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;
  background-color: #ffffff80;
`;

const Back = styled.div`
  osition: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: rgba(249, 249, 249, 0.85);
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  max-width: 700px;
  width: 100%;
  background-color: #fff;
  padding: 2rem;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .msg {
    line-height: 1.5;
    font-size: 1rem;
    color: rgb(73, 80, 87);
    margin-top: 1rem;
    margin-bottom: 1rem;
    white-space: pre-wrap;
  }
  .action {
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const Button = styled.button<{ color: string }>`
  color: #ffffff;
  font-weight: bold;
  margin-left: 0.5rem;
  margin-top: 1rem;
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  letter-spacing: 0.06em;
  background-color: ${(props) => props.color};
`;

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

export default SubmitModal;
