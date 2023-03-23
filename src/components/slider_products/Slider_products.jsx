import { useState } from 'react'
import { arrLinksImage } from "../../data/img-array"
import { dataProduct } from "../../data/data-product"
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import "./slider_products.css"

register()


export default ({ title, arrayProduct }) => {
  // interface cartProductOnSlide {
  //   name: string,
  //   price: string,
  //   img: string,
  //   id: string,
  // }
  return (
    <div className='wrapper_slider_products'>
      <h2> {title} </h2>
      <Swiper
        slidesPerView={5}
        spaceBetween={5}
        creativeEffect={
          {
            prev: {
              translate: [0, 0, -600],
            },
            next: {
              translate: ['100%', 0, 0],
            }
          }
        }
        navigation={
          {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        }
      >
        {
          arrayProduct.map((item) => {
            return (
              <>
                <SwiperSlide>
                  <div className='photo' key={item.id}
                    style={{ backgroundImage: `url(${item.img})` }}
                  >
                  </div>
                  <h3> {item.name}</h3>
                  <div className='price' >{item.price}</div>
                </SwiperSlide>
              </>
            )
          })
        }
      </Swiper >
    </div >
  )
}




