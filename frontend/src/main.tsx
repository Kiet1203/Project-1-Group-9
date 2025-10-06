import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import LoginPage from "./pages/LoginPage";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <LoginPage/>
  </React.StrictMode>
);