import React from "react";
import Footer from "./components/Footer";
import MainPage from "./container/MainPage";
import NAVbar from "./components/NAVbar";
import { BrowserRouter } from "react-router-dom";
import { hot } from "react-hot-loader";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NAVbar />
        <MainPage />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default hot(module)(App);
