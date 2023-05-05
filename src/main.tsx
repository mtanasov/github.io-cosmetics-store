import { createContext, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { dataProduct } from "./data/data-product";
import { App } from "./App";
import Header from "./components/header/Header";
import "./index.css";
import Contacts from "./components/bottomMenu/Contacts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    {/* <Header /> */}
    <App />
  </BrowserRouter>
);
