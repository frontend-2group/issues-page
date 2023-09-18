import { useDispatch, useSelector } from "react-redux";
import { asyncIssues, setCurrentPage } from "../reducer/issues";
import { useEffect } from "react";
import OneIssuesList from "./components/oneIssuesList";
import PageIssues from "./components/pagination";
import ChangeShowNum from "./components/filter/changeShowNum";
import IssuesFilter from "./components/filter/issuesFilter";
import LoadingPage from "./lodingPage";
import styled from "styled-components";

const IssuesPage = () => {
  const dispatch = useDispatch();
  const { currentPage, showPageNum, issues, status } = useSelector(
    (state) => state.issues
  );

  console.log(status);

  // 이거 써야 issues값 사용 가능
  useEffect(() => {
    dispatch(asyncIssues());
  }, [dispatch]);

  const startIndex = (currentPage - 1) * showPageNum;
  const endIndex = startIndex + showPageNum;
  const pageIssues = issues !== null && issues.slice(startIndex, endIndex);

  return (
    <Wrapper>
      {status === "Loading" && <LoadingPage />}
      <ChangeShowNum />
      <IssuesFilter />
      {issues !== null &&
        pageIssues.map((issues) => (
          <OneIssuesList key={issues.id} issues={issues} />
        ))}
      <PageIssues />
    </Wrapper>
  );
};
export default IssuesPage;

const Wrapper = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
  }
  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
  }
  @media ${({ theme }) => theme.device.laptop} {
    flex-direction: column;
  }

  width: 100%;
`;
