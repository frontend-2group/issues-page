import { Provider } from "react-redux";
import { store } from "./store/store";
import { RouterProvider } from "react-router-dom";
import router from "./route/route";
import { ThemeProvider } from "styled-components";
import theme from "./theme/media";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <h1 style={{ textAlign: "center" }}>GitHub IssuesList</h1>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
