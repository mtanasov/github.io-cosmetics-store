import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/header/Header";
import { useState } from "react";
import Slider_fullscreen from "./components/slider/Slider_fullscreen";
import Banner_category from "./components/banner/Banner_category";
import Slider_products from "./components/slider_products/Slider_products";
import Blog from "./components/blog/Blog";
import Footer from "./components/footer/Footer";
import { dataProduct, saleProduct } from "./data/data-product";
import "./index.css";

export default () => {
  return (
    <div className="content">
      <Slider_fullscreen />
      <Banner_category />
      <div className="banner__sliders__product">
        <Slider_products arrayProduct={dataProduct} title={"Бестселлеры"} />
        <Slider_products arrayProduct={saleProduct} title={"Скидки"} />
      </div>
      <Blog />
    </div>
  );
};
