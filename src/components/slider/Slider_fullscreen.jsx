import { useState } from 'react'
import { arrLinksImage } from "../../data/img-array"
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/effect';
import 'swiper/css/autoplay';

import "./slider_fullscreen.css"

register()

export default () => {

  return (
    <Swiper
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      effect={"creative"}
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
      autoplay={
        {
          delay: 2500,
          reverseDirection: false,
        }
      }
    >
      {
        arrLinksImage.map((imgLink, index) => {
          return (
            <SwiperSlide>
              <div key={imgLink.id}
                style={{ backgroundImage: `url(${imgLink.link})` }}
              >
              </div>
            </SwiperSlide>
          )
        })
      }

    </Swiper >



  );
}