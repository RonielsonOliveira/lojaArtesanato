import React from "react";

import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Routes from "./routes/index";
import GlobalStyles from "./styles/GlobalStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Menu from "./components/Menu/index.tsx";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.ts";
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Menu />
        <Routes />
        <GlobalStyles />
        <ToastContainer autoClose={3000} className="toast-container" />
      </BrowserRouter>
    </ThemeProvider>
  );
}
