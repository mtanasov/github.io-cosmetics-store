import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./slider_products.css";
import { Link } from "react-router-dom";

register();

export default (props: { title: string, arrayProduct: [] }) => {
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
          (
            item: { id: ""; img: ""; name: ""; price: ""; URL_link: "" },
            index: number
          ) => {
            return (
              <div key={Math.floor(Math.random() * 100000).toString()}>
                <SwiperSlide>
                  {/* 
                //TODO вставить в слайдер компонент мини карты
                <Mini_cart_product
                  id={item.id}
                  img={item.img}
                  name={item.name}
                  price={item.price}
                /> */}

                  <Link
                    onClick={() => window.scrollTo(0, 0)}
                    to={`/product/${item.URL_link}`}
                  >
                    <div
                      className="photo"
                      // key={index.toString()}
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
              </div>
            );
          }
        )}
      </Swiper>
    </div>
  );
};
