import { useDispatch, useSelector } from "react-redux";
import { asyncIssues } from "../reducer/issues";
import { useEffect } from "react";
import OneIssuesList from "./components/oneIssuesList";

const IssuesPage = () => {
  const dispatch = useDispatch();
  const { issues } = useSelector((state) => state.issues);

  useEffect(() => {
    dispatch(asyncIssues());
  }, [dispatch]);

  return (
    <div>
      {issues !== null &&
        issues.map((issues) => (
          <OneIssuesList key={issues.id} issues={issues} />
        ))}
    </div>
  );
};
export default IssuesPage;
