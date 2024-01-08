import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello React!!!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const root2 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
