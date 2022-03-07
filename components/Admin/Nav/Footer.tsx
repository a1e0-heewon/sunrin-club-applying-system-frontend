import styled from "styled-components";

const Footer = () => {
  return (
    <Base>
      <Frame>
        <div></div>
        <ButtonBase>
          <ButtonFull type="submit">
            <span>질문 저장</span>
          </ButtonFull>
        </ButtonBase>
      </Frame>
    </Base>
  );
};

const Base = styled.div`
  position: fixed;
  top: auto;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0 50px;
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  border-top: 1px solid #b1b1b1;
`;

const Frame = styled.div`
  width: 100%;
  max-width: 1100px;
  padding: 15px 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const ButtonBase = styled.div`
  width: 16%;
  display: flex;
  justify-content: space-between;
`;

const ButtonFull = styled.button`
  width: 170px;
  height: 50px;
  background: #91c788;
  color: #ffffff;
  font-size: 16px;
  font-weight: bolder;
  border: none;
  border-radius: 25px;

  &:hover {
    background: #52734d;
    cursor: pointer;
  }
`;

export default Footer;
