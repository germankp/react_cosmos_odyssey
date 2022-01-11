import React from "react";
import ReactDOM from "react-dom";
import "./global.css";
import App from "./App";

// // get a callback when the server responds
// xhr.addEventListener("load", () => {
//   // update the state of the component with the result here
//   console.log(xhr.responseText);
// });
// // open the request with the verb and the url
// xhr.open("GET", "http://localhost:3456/api/travels");
// // send the request

// async function getFetch() {
//   const url = "http://localhost:3456/api/travels";
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
// }
// getFetch();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
