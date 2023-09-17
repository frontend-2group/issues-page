import { Provider } from "react-redux";
import { store } from "./store/store";
import { RouterProvider } from "react-router-dom";
import router from "./route/route";

function App() {
  return (
    <Provider store={store}>
      <h1>GitHub IssuesList</h1>

      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
