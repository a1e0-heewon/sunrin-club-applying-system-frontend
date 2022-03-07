import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";
import { useGetFormByClubQuery } from "../../generated";
import Error from "./Error";

const Index = ({ club, datas, readMore }: any) => {
  const [select, SetSelect] = useState();
  const { data, loading, error } = useGetFormByClubQuery({
    variables: {
      club: club,
    },
  });

  if (data?.getFormByClub.__typename === "InvalidFormError")
    return <Error error="폼이 없습니다." />;
  else if (datas?.getAnswerByClub.totalCount == 0)
    return <Error error="답변이 존재하지 않습니다." />;

  const OnSubmit = (event: any) => {
    event.preventDefault();
    console.log(event);
  };

  const OnClick = (event: any) => {
    SetSelect(event.target.id === select ? -1 : event.target.id);
  };

  const edges = datas?.getAnswerByClub.edges;
  var formdata = data?.getFormByClub.question;
  return (
    <Base>
      <Form onSubmit={OnSubmit}>
        <List>
          <TotalCount>
            총 지원자 : {datas?.getAnswerByClub.totalCount}명
          </TotalCount>
          <InfiniteScroll
            dataLength={datas?.getAnswerByClub.totalCount}
            next={readMore}
            hasMore={true}
            loader={<div></div>}
          >
            {edges.map((data: any, index: any) => (
              <Content key={index}>
                <ContentHeader>
                  <input type="checkbox" />
                  <Name>{data.node?.name}</Name>
                </ContentHeader>
                <div>
                  dahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakg
                  dahsjfhakg dahsjfhakg dahsjfhakg
                  dahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakg
                  dahsjfhakg dahsjfhakg dahsjfhakg
                  dahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakg
                  dahsjfhakg dahsjfhakg dahsjfhakg
                  dahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakg
                  dahsjfhakg dahsjfhakg dahsjfhakg
                  dahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakg
                  dahsjfhakg dahsjfhakg dahsjfhakg
                  dahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakgdahsjfhakg
                  dahsjfhakg dahsjfhakg dahsjfhakg dahsjfhakg
                </div>
              </Content>
            ))}
          </InfiniteScroll>
        </List>
      </Form>
    </Base>
  );
};

const Base = styled.div`
  padding-bottom: 50px;
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

export default Index;
