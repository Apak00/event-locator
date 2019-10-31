import React, { Suspense } from "react";
import { Main } from "./main/lazy";
import Header from "./header";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { Provider } from "react-redux";
import store from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Suspense fallback={"LOADING..."}>
          <Header />
          <Main />
        </Suspense>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
