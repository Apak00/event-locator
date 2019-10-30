import React from "react";
import Main from "./main";
import Header from "./header";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { Provider } from "react-redux";
import store from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <>
          <Header />
          <Main />
        </>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
