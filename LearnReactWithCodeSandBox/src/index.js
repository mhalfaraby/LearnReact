import React from "react";
import ReactDOM from "react-dom";

const firstName = "Muhammad";
const lastName = "Alfaraby";
const currentDate = new Date();
const year = currentDate.getFullYear();
ReactDOM.render(
  <div>
    <h1>
      <p> Copyright {year}</p>
    </h1>
    <h1>
      {Math.floor(Math.random())} Favorite Books of {firstName + " " + lastName}
    </h1>
    <ul>
      <li>Book1</li>
      <li>Book1</li>
      <li>Book1</li>
    </ul>
  </div>,
  document.getElementById("root")
);
