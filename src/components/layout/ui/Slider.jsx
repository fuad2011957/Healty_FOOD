import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const Slider = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={2}
        loop={true}
      >
        <SwiperSlide>
          <img
          height='200'
            src="./src/components/layout/shared/assets/img/placeholder1.png"
            alt="slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            
            src="./src/components/layout/shared/assets/img/placeholder2.png"
            alt="slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img"
            src="./src/components/layout/shared/assets/img/placeholder3.png"
            alt="slide 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./src/components/layout/shared/assets/img/placeholder4.png"
            alt="slide 4"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
