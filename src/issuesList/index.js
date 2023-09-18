import { useDispatch, useSelector } from "react-redux";
import { asyncIssues, setCurrentPage } from "../reducer/issues";
import { useEffect } from "react";
import OneIssuesList from "./components/oneIssuesList";
import PageIssues from "./components/pagination";

const IssuesPage = () => {
  const dispatch = useDispatch();
  const { issues } = useSelector((state) => state.issues);
  const { currentPage } = useSelector((state) => state.issues);

  console.log(currentPage);

  // 이거 써야 issues값 사용 가능
  useEffect(() => {
    dispatch(asyncIssues());
  }, [dispatch]);

  const showPageNum = 10;

  const startIndex = (currentPage - 1) * showPageNum;
  const endIndex = startIndex + showPageNum;
  const pageIssues = issues !== null && issues.slice(startIndex, endIndex);

  return (
    <div>
      {issues !== null &&
        pageIssues.map((issues) => (
          <OneIssuesList key={issues.id} issues={issues} />
        ))}
      <PageIssues />
    </div>
  );
};
export default IssuesPage;
