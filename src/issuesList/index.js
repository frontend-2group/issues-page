import { useDispatch, useSelector } from "react-redux";
import { asyncIssues, setCurrentPage } from "../reducer/issues";
import { useEffect } from "react";
import OneIssuesList from "./components/oneIssuesList";
import PageIssues from "./components/pagination";
import ChangeShowNum from "./components/filter/changeShowNum";
import IssuesFilter from "./components/filter/issuesFilter";
import LoadingPage from "./lodingPage";

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
    <div>
      {status === "Loading" && <LoadingPage />}
      <ChangeShowNum />
      <IssuesFilter />
      {issues !== null &&
        pageIssues.map((issues) => (
          <OneIssuesList key={issues.id} issues={issues} />
        ))}
      <PageIssues />
    </div>
  );
};
export default IssuesPage;
