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
import { Link } from "react-router-dom";

register();

export default (props: { title: ""; arrayProduct: [] }) => {
  // interface cartProductOnSlide {
  //   name: string,
  //   price: string,
  //   img: string,
  //   id: string,
  // }
  return (
    <div className="wrapper_slider_products">
      <h2> {props.title} </h2>
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
        {props.arrayProduct.map(
          (item: { id: ""; img: ""; name: ""; price: ""; URL_link: "" }) => {
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

                  <Link to={`/product/${item.URL_link}`}>
                    <div
                      className="photo"
                      key={item.id}
                      style={{
                        backgroundImage: `url(${item.img})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "100%",
                      }}
                    ></div>
                    <h3> {item.name}</h3>
                    <div className="price">{item.price}</div>
                  </Link>
                </SwiperSlide>
              </>
            );
          }
        )}
      </Swiper>
    </div>
  );
};
