import React, { useMemo } from "react";
import ReactDOM, { createPortal } from "react-dom";
import styled from "styled-components";

const SubmitModal = ({ submitCheck, onClose }: any) => {
  return (
    <Modal>
      <Base>
        <Back />
        <Content>
          <div className="title">수정하시겠습니까?</div>
          <div className="msg">질문 수정후 되돌리기는 불가능합니다.</div>
          <div className="action">
            <Button onClick={onClose} color="#9ea6af">
              닫기
            </Button>
            <Button onClick={submitCheck} color="#2964a9">
              수정하기
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
  max-width: 400px;
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

export default SubmitModal;
