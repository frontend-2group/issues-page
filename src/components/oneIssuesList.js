import { useDispatch, useSelector } from "react-redux";
import { asyncIssues } from "../reducer/issues";
import { useEffect } from "react";

const OneIssuesList = () => {
  const dispatch = useDispatch();
  const { issues } = useSelector((state) => state.issues);

  useEffect(() => {
    dispatch(asyncIssues());
  }, [dispatch]);

  console.log(issues);
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
