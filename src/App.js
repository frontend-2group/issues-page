import { Provider } from "react-redux";
import { store } from "./store/store";
import OneIssuesList from "./components/oneIssuesList";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>GitHub 이슈 목록</h1>
      </div>
      <OneIssuesList />
    </Provider>
  );
}

export default App;
