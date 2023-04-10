import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  LoaderFunctionArgs,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import CategoryProduct_page from "./components/catalogue/CategoryProduct_page";
import Start_page from "./Start_page";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Cart_product from "./components/cart_product/cart_product";
import { dataProduct } from "./data/data-product";
import "./index.css";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Start_page />} />
        <Route
          path="/parfums"
          element={
            <CategoryProduct_page arrProduct={dataProduct} category="Парфюм" />
          }
        ></Route>
        <Route path="/parfums/product" element={<Cart_product />} />

        <Route
          path="/hair"
          element={
            <CategoryProduct_page arrProduct={dataProduct} category="Волосы" />
          }
        />

        <Route
          path="/cosmetics"
          element={
            <CategoryProduct_page
              arrProduct={dataProduct}
              category="Декоративная косметика"
            />
          }
        />
        <Route
          path="/care"
          element={
            <CategoryProduct_page arrProduct={dataProduct} category="Уход" />
          }
        />
        <Route path="/*" element={<div>{"Error"}</div>} />
      </Routes>
      <Footer />
    </>
  );
};
