import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Header from './components/header/Header'
import Slider_fullscreen from "./components/slider/Slider_fullscreen"
import Cart_product__mini from './components/cart_product__mini/Cart_product__mini'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <div className='content'>
      <Slider_fullscreen />
      <Cart_product__mini />
    </div>
  </React.StrictMode>,
)
