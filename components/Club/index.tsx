import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useCreateAnswerMutation } from "../../generated";
import { Questionsitem, Infoitem, OtherURL, PortfolioURL } from "./question";
import SubmitModal from "./SubmitModal";
import Footer from "./Nav/Footer";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Main = ({ club, datas }: any) => {
  const [modal, setModal] = useState(false);
  const [check, setCheck] = useState(false);
  const [info, setInfo] = useState([]);
  const [question, setQuestion] = useState([]);
  const [portfolioURL, setPortfolioURL] = useState(null);
  const [otherURL, setOtherURL] = useState([]);
  const router = useRouter();
  const Swals = withReactContent(Swal);

  const [createAnswerMutation, { data, loading, error }] =
    useCreateAnswerMutation();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setInfo([]);
    setQuestion([]);

    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].id == "info") {
        setInfo((info: any) => info.concat(event.target[i].value));
      } else if (event.target[i].tagName == "TEXTAREA") {
        setQuestion((question: any) => question.concat(event.target[i].value));
      } else if (event.target[i].id === "PortfolioURL") {
        if (event.target[i].value == "") setPortfolioURL(null);
        else setPortfolioURL(event.target[i].value);
      } else if (event.target[i].id === "OtherURL") {
        setOtherURL((otherURL: any) => otherURL.concat(event.target[i].value));
      }
    }
    openModal();
  };

  const openModal = () => {
    document.body.style.overflow = "hidden";
    setModal(true);
  };

  const closeModal = () => {
    document.body.style.overflow = "scroll";
    setModal(false);
    setCheck(false);
  };

  const submitCheck = () => {
    setCheck(true);
    setModal(false);
  };

  useEffect(() => {
    if (check) {
      createAnswerMutation({
        variables: {
          input: {
            studentId: info[0] * 1,
            name: info[1],
            club: club,
            phoneNumber: info[2],
            answerList: question,
            portfolioURL: portfolioURL,
            otherURLs: otherURL,
          },
        },
      });
    }
  }, [check]);

  useEffect(() => {
    if (check) {
      if (error) {
        Swal.fire({
          icon: "error",
          title: "????????? ?????????????????????.",
          text: "",
          confirmButtonText: "??????",
        }).then((result) => {
          if (result.isConfirmed) {
            setCheck(false);
            console.log(error);
          }
        });
      } else if (data) {
        Swal.fire({
          icon: "success",
          title: "?????????????????????.",
          confirmButtonText: "??????",
        }).then((result) => {
          if (result.isConfirmed) router.push("../");
          setCheck(false);
        });
      }
    }
  }, [error, data]);

  return (
    <Base>
      <Introduce>
        <Title>{club}</Title>
        <Content>{datas.getFormByClub.introduce}</Content>
      </Introduce>
      <Form onSubmit={handleSubmit}>
        <FormBase>
          <Infoitem
            name="Name"
            info="??????"
            placeholder="10101"
            type="number"
            maxLength="5"
          />
          <Infoitem
            name="Name"
            info="??????"
            placeholder="?????????"
            type="text"
            maxLength="20"
          />
          <Infoitem
            name="Name"
            info="????????????"
            placeholder="01012345678"
            type="number"
            maxLength="11"
          />
          {datas.getFormByClub.question.map((question: any, index: any) => (
            <Questionsitem key={index} question={question} />
          ))}
          <PortfolioURL />
          <OtherURL />
        </FormBase>
        <Footer />
      </Form>
      {modal && <SubmitModal submitCheck={submitCheck} onClose={closeModal} />}
    </Base>
  );
};

const Base = styled.div`
  padding-bottom: 130px;
  padding-top: 30px;
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

const Content = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #3b3d40;
`;

const FormBase = styled.div`
  width: 87.72%;
  padding: 0;
  max-width: 1060px;
  margin: 0 auto;
`;

const Form = styled.form``;

export default Main;
