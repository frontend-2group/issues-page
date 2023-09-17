import { createBrowserRouter } from "react-router-dom";
import IssuesPage from "../issuesList";
import DetailPage from "../issuesList/detailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IssuesPage />,
  },
  {
    path: "/detailPage",
    element: <DetailPage />,
  },
]);

export default router;
