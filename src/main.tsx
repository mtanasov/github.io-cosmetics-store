import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header/Header';
import Slider_fullscreen from "./components/slider/Slider_fullscreen";
import Banner_category from "./components/cart_product__mini/Banner_category";
import Slider_products from "./components/slider_products/Slider_products";
import { dataProduct, saleProduct } from "./data/data-product"

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <div className='content'>
      <Slider_fullscreen />
      <Banner_category />
      <div
        className='banner__sliders__product'
      >
        <Slider_products
          arrayProduct={dataProduct}
          title={"Бестселлеры"}
        />
        <Slider_products
          arrayProduct={saleProduct}
          title={"Скидки"}
        />
      </div>
      <div className='blog' >
      </div>
    </div>
  </React.StrictMode>,
)
