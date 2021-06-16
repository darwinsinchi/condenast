import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Component = () => {
  const [wilmer, setSayLess] = useState([]);
  const getTodos = async () => {
    try {
      const response = await fetch("/api");
      const jsonData = await response.json();
      setSayLess(jsonData.results);
    } catch (error) {}
  };
  console.log(wilmer);
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      <h1>TNY Tech Test Boilerplate App!!!!!</h1>
      <p>Happy coding!</p>

      <h3>SAY MORE</h3>
      {wilmer.map((ind) => (
        <div>{ind.name}</div>
      ))}
    </div>
  );
};

const appRoot = document.getElementById("app-root");

ReactDOM.render(<Component />, appRoot);
