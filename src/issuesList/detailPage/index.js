import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { asyncIssues } from "../../reducer/issues";

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
    <div>
      <p>{detailIssues.updated_at.replace("T", "-").replace("Z", "")}</p>
      <h1>{detailIssues.title}</h1>
      <p>{detailIssues.body}</p>
      <a href={detailIssues.html_url}>링크</a>
    </div>
  );
};
export default DetailPage;
