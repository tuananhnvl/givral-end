"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><Image src={"/tuananh/4b.png"} alt="" width={1000} height={800}/></SwiperSlide>
        <SwiperSlide><Image src={"/tuananh/6bm2.png"} alt="" width={1000} height={800}/></SwiperSlide>
        <SwiperSlide><Image src={"/tuananh/6bm1.png"} alt="" width={1000} height={800}/></SwiperSlide>
        <SwiperSlide><Image src={"/tuananh/gl-1.jpg"} alt="" width={1000} height={800}/></SwiperSlide>
        <SwiperSlide><Image src={"/tuananh/gl-3.jpg"} alt="" width={1000} height={800}/></SwiperSlide>
     
        <SwiperSlide><Image src={"/tuananh/gl-4.jpg"} alt="" width={1000} height={800}/></SwiperSlide>
      </Swiper>
    </>
  );
}
