import { useState } from "react";
import { arrLinksImage } from "../../data/img-array";
import { dataProduct } from "../../data/data-product";
import Mini_cart_product from "../mini_cart_product/Mini_cart_product";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./slider_products.css";

register();

export default ({ title, arrayProduct }) => {
  // interface cartProductOnSlide {
  //   name: string,
  //   price: string,
  //   img: string,
  //   id: string,
  // }
  return (
    <div className="wrapper_slider_products">
      <h2> {title} </h2>
      <Swiper
        slidesPerView={5}
        spaceBetween={5}
        creativeEffect={{
          prev: {
            translate: [0, 0, -600],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        navigation
      >
        {arrayProduct.map((item: { id: ""; img: ""; name: ""; price: "" }) => {
          return (
            <>
              <SwiperSlide>
                {/* 
                //TODO вставить в слайдер компонент мини карты
                <Mini_cart_product
                  id={item.id}
                  img={item.img}
                  name={item.name}
                  price={item.price}
                /> */}

                <div
                  className="photo"
                  key={item.id}
                  style={{ backgroundImage: `url(${item.img})` }}
                ></div>
                <h3> {item.name}</h3>
                <div className="price">{item.price}</div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </div>
  );
};
