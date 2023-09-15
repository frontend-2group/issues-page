import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIssuesAsync } from "../reducer/issues";

const OneIssuesList = () => {
  // 컴포넌트에서 issues 배열 사용하려면 이거 써야 합니다------
  const dispatch = useDispatch();
  const { issues } = useSelector((state) => state.issues);
  useEffect(() => {
    if (issues === null) {
      dispatch(fetchIssuesAsync());
    }
  }, [dispatch, issues]);
  // ---------------------------------------------------------

  return (
    <div>
      <ul>
        {issues !== null &&
          issues.map((issue) => (
            <li key={issue.id}>
              <a
                href={issue.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {issue.title}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default OneIssuesList;
