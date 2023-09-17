import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { asyncIssues } from "../../reducer/issues";
import styled from "styled-components";

const DetailPage = () => {
  const dispatch = useDispatch();
  const { issues } = useSelector((state) => state.issues);
  useEffect(() => {
    dispatch(asyncIssues());
  }, [dispatch]);

  const location = useLocation();

  const issuesId = location.state.issuesId;

  const detailIssues =
    issues !== null &&
    issues.find((el) => {
      return el.id === issuesId;
    });

  console.log(detailIssues);

  return (
    <Wrapper>
      <DetailBox>
        <p>{detailIssues.updated_at.replace("T", "-").replace("Z", "")}</p>
        <h1>{detailIssues.title}</h1>
        <p>{detailIssues.body}</p>
        <a href={detailIssues.html_url}>링크</a>
      </DetailBox>
    </Wrapper>
  );
};
export default DetailPage;

const DetailBox = styled.div`
  text-align: center;
  margin: 0;
  overflow-x: hidden;
  padding: 5%;
`;

const Wrapper = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
  }
  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
    overflow-x: hidden;
  }
  @media ${({ theme }) => theme.device.laptop} {
    flex-direction: column;
  }

  width: 100%;
  height: 100vh;
  overflow-x: hidden;
`;
