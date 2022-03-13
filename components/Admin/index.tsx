import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";
import { useGetFormByClubQuery, useSendMessageMutation } from "../../generated";
import SubmitModal from "./sendMessage";
import Error from "./Error";
import Footer from "./Nav/Footers";

const Index = ({ club, dataClub, readMoreClub }: any) => {
  const [modal, setModal] = useState(false);
  const [check, setCheck] = useState(false);
  const [message, setMessage] = useState("");
  const [checkedItems, setCheckedItems] = useState([]);
  const { data, loading, error } = useGetFormByClubQuery({
    variables: {
      club: club,
    },
  });

  const [
    sendMessageMutation,
    { data: dataMessage, loading: loadingMessage, error: errorMessage },
  ] = useSendMessageMutation({});

  const checkControl = ({ target }: any) => {
    if (target.checked) {
      setCheckedItems((checkedItems: any) => checkedItems.concat(target.id));
    } else if (!target.checked) {
      setCheckedItems(checkedItems.filter((data) => data !== target.id));
    }
  };

  if (data?.getFormByClub.__typename === "InvalidFormError")
    return <Error error="폼이 없습니다." />;
  else if (dataClub?.getAnswerByClub.totalCount == 0)
    return <Error error="답변이 존재하지 않습니다." />;

  const formdata = data?.getFormByClub.question;
  const edgesClub = dataClub?.getAnswerByClub.edges;

  const ChangeMessage = (message: any) => {
    setMessage(message);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
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
    if(check) {
      sendMessageMutation({
        variables: {
          input: {
            message: message,
            phoneNumberList: checkedItems,
          },
        },
      });
      window.location.replace(window.location.href);
    }
  }, [check]);

  return (
    <Base>
      <Form onSubmit={onSubmit}>
        <List>
          <TotalCount>
            총 지원자 : {dataClub?.getAnswerByClub.totalCount}명
          </TotalCount>
          <InfiniteScroll
            dataLength={edgesClub.length}
            next={readMoreClub}
            hasMore={true}
            loader={<div></div>}
          >
            {edgesClub.map((data: any, index: any) => (
              <ContentItem
                key={index}
                index={index}
                data={data}
                formdata={formdata}
                checkControl={checkControl}
              />
            ))}
          </InfiniteScroll>
        </List>
        <Footer />
      </Form>
      {modal && (
        <SubmitModal
          submitCheck={submitCheck}
          onClose={closeModal}
          ChangeMessage={ChangeMessage}
        />
      )}
    </Base>
  );
};

const ContentItem = ({ index, data, formdata, checkControl }: any) => {
  const [checked, setChecked] = useState(false);

  return (
    <Content key={index}>
      <ContentHeader>
        <input
          type="checkbox"
          id={data.node.phoneNumber}
          checked={checked}
          onChange={(e) => {
            setChecked(!checked);
            checkControl(e);
          }}
        />
        <Name>{data.node?.name + " " + data.node.studentId}</Name>
      </ContentHeader>
      <ContentBody>
        <Info>
          <InfoItem>
            <InfoQuestionItem>이름</InfoQuestionItem>
            <InfoAnswerItem>{data.node.name}</InfoAnswerItem>
          </InfoItem>
          <InfoItem>
            <InfoQuestionItem>학번</InfoQuestionItem>
            <InfoAnswerItem>{data.node.studentId}</InfoAnswerItem>
          </InfoItem>
          <InfoItem>
            <InfoQuestionItem>전화번호</InfoQuestionItem>
            <InfoAnswerItem>{data.node.phoneNumber}</InfoAnswerItem>
          </InfoItem>
        </Info>
        {formdata?.map((formdatas: any, index_: any) => (
          <Question key={index_}>
            <QuestionItem>{formdatas.message}</QuestionItem>
            <AnswerItem>{data.node.answerList[index_]}</AnswerItem>
          </Question>
        ))}
        <URL>
          <Portfolio>
            <URLTitle>포트폴리오</URLTitle>
            <PortfolioURL>{data.node.portfolioURL}</PortfolioURL>
          </Portfolio>
          <Question>
            <URLTitle>추가 링크들</URLTitle>
            <Other>
              {data.node.otherURLs?.map((urls: any, index_: any) => (
                <OtherURL key={index_}>{urls}</OtherURL>
              ))}
            </Other>
          </Question>
        </URL>
      </ContentBody>
    </Content>
  );
};

const Base = styled.div`
  padding-bottom: 130px;
`;

const Form = styled.form`
  width: 87.72%;
  padding-top: 100px;
  max-width: 1060px;
  margin: 0 auto 0;
`;

const List = styled.div``;

const TotalCount = styled.div`
  font-size: 20px;
  font-weight: 800;
  padding-bottom: 20px;
`;

const Content = styled.label`
  padding: 0 20px;
`;

const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #b0b0b0;
  padding-bottom: 10px;
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: 700;
  padding-left: 10px;
`;

const ContentBody = styled.div`
  width: 100%;
`;

const Info = styled.div``;
const InfoItem = styled.div`
  display: flex;
  padding: 6px 0;
`;
const InfoQuestionItem = styled.div`
  width: 66px;
  font-size: 16px;
  font-weight: 500;
  color: #3b3d40;
  border-right: 2px solid #3b3d40;
  text-align: right;
  padding: 0 5px 0 0;
`;
const InfoAnswerItem = styled.div`
  font-size: 16px;
  color: rgb(59, 61, 64);
  padding: 0;
  margin: 0px 10px;
`;

const Question = styled.div``;
const QuestionItem = styled.div`
  padding: 20px 0 6px;
  font-size: 16px;
  font-weight: 500;
  color: #3b3d40;
  border-bottom: 1px solid #bababa;
`;
const AnswerItem = styled.div`
  padding: 0;
  width: 100%;
  font-size: 16px;
  color: rgb(59, 61, 64);
  margin: 25px 0px 3px;
  font-family: "Noto Sans KR", sans-serif;
`;

const URL = styled.div``;
const Portfolio = styled.div``;
const URLTitle = styled.div`
  padding: 20px 0 6px;
  font-size: 16px;
  font-weight: 500;
  color: #3b3d40;
  border-bottom: 1px solid #bababa;
`;

const PortfolioURL = styled.div`
  padding: 0;
  width: 100%;
  font-size: 16px;
  color: rgb(59, 61, 64);
  margin: 25px 0px 3px;
  font-family: "Noto Sans KR", sans-serif;
`;

const Other = styled.div`
  padding: 0;
  width: 100%;
  margin: 20px 0 0;
`;

const OtherURL = styled.div`
  padding: 0;
  width: 100%;
  font-size: 16px;
  color: rgb(59, 61, 64);
  margin: 5px 0px;
  font-family: "Noto Sans KR", sans-serif;
`;

export default Index;
