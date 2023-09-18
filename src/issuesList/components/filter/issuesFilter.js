import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncIssues, setIssues } from "../../../reducer/issues";

const IssuesFilter = () => {
  const dispatch = useDispatch();

  const { issues } = useSelector((state) => state.issues);

  useEffect(() => {
    dispatch(asyncIssues());
  }, [dispatch]);

  const onIssuesFilter = (e) => {
    const filterValue = e.target.value;

    // create_at
    const createAtFilterIssuesArr = [...issues].reverse();

    //updated_at
    const updatedAtArr = issues.map((el) =>
      el.updated_at.replace(/[\-\:TZ]/g, "")
    );
    updatedAtArr.sort((a, b) => b - a);

    const updatedAtFilterIssuesArr = [];
    for (let i = 0; i < updatedAtArr.length; i++) {
      for (let j = 0; j < issues.length; j++) {
        if (updatedAtArr[i] === issues[j].updated_at.replace(/[\-\:TZ]/g, "")) {
          updatedAtFilterIssuesArr.push(issues[j]);
        }
      }
    }

    //comments
    const commentArr = issues.map((el) => el.comments);
    commentArr.sort((a, b) => b - a);
    const commentFilterIssuesArr = [];
    for (let i = 0; i < commentArr.length; i++) {
      for (let j = 0; j < issues.length; j++) {
        if (commentArr[i] === issues[j].comments) {
          commentFilterIssuesArr.push(issues[j]);
        }
      }
    }

    if (filterValue === "생성") {
      dispatch(setIssues(createAtFilterIssuesArr));
    } else if (filterValue === "업데이트") {
      dispatch(setIssues(updatedAtFilterIssuesArr));
    } else if (filterValue === "댓글") {
      dispatch(setIssues(commentFilterIssuesArr));
    }
  };

  return (
    <div>
      <select onChange={onIssuesFilter}>
        <option>-- 게시글 정렬 --</option>
        <option>생성</option>
        <option>업데이트</option>
        <option>댓글</option>
      </select>
    </div>
  );
};
export default IssuesFilter;
