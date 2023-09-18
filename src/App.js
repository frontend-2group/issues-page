import { Provider } from "react-redux";
import { store } from "./store/store";
import IssuesPage from "./issuesList";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>GitHub IssuesList</h1>
      </div>
      <IssuesPage />
    </Provider>
  );
}

export default App;
