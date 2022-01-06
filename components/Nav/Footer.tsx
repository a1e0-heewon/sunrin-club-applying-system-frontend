import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <Mainframe>
      <Content>
        Created with <FontAwesomeIcon icon={faHeart} size="sm" color="red" /> by
        <Github href="https://github.com/pukuba"> SeungWon Nam,</Github>
        <Github href="https://github.com/a1e0-heewon"> Heewon Seo</Github>
      </Content>
    </Mainframe>
  );
};

const Mainframe = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  background-color: #434343;
  z-index: 999;
`;

const Content = styled.div`
  color: #ffffff;
  width: 100%;
  text-align: center;
  font-size: 13px;
  font-weight: 600;
`;

const Github = styled.a`
  color: #3c97bf;
  font-weight: normal;
`;

export default Footer;
