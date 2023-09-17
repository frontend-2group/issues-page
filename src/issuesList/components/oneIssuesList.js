import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const OneIssuesList = ({ issues }) => {
  const navigate = useNavigate();
  const updatedAt = issues.updated_at.replace("T", "-").replace("Z", "");
  const createAt = issues.created_at.replace("T", "-").replace("Z", "");

  const onOpenDetailPage = () => {
    navigate("/detailPage", {
      state: {
        issuesId: issues.id,
      },
    });
  };

  return (
    <IssuesListPage>
      <IssuesListBox onClick={onOpenDetailPage}>
        <IssuesTitle>
          {updatedAt}
          <p>{issues.title}</p>
          <p>comments({issues.comments})</p>
        </IssuesTitle>
        <hr />
        <IssuesBody>{issues.body}</IssuesBody>
        <IssuesCreateAt>{createAt}</IssuesCreateAt>
      </IssuesListBox>
    </IssuesListPage>
  );
};
export default OneIssuesList;

const IssuesListPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IssuesListBox = styled.div`
  border: solid 1px #000;
  width: 80%;
  height: 120px;
  margin: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const IssuesTitle = styled.div`
  text-align: center;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
`;

const IssuesBody = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const IssuesCreateAt = styled.div`
  font-size: small;
  opacity: 0.5;
  text-align: right;
  vertical-align: bottom;
`;
