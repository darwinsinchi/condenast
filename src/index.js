import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./container/MainPage";

const Component = () => {
  return (
    <div>
      <MainPage />
    </div>
  );
};

const appRoot = document.getElementById("app-root");

ReactDOM.render(<Component />, appRoot);
