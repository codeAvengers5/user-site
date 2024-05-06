"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.css";

export default function Slider({ images, width, preview = 1 }) {
  console.log(width);
  return (
    <section className="p-2">
      <div className="container hidden md:flex w-full flex-wrap">
        <Swiper
          navigation
          pagination={{ type: "bullets" }}
          modules={[Navigation, Pagination, Autoplay]}
          className="w-full items-center"
          autoplay={{ delay: 3000 }}
          slidesPerView={preview}>
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className={`flex h-full max-w-[${width}px] items-center justify-center mx-[80px]`}>
                <img
                  src={image.imgURL}
                  alt={image.imgAlt}
                  className="block h-full w-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="container flex md:hidden">
        <Swiper
          navigation
          pagination={{ type: "bullets" }}
          modules={[Navigation, Pagination, Autoplay]}
          className={`items-center`}
          autoplay={{ delay: 3000 }}
          slidesPerView={1}>
          {images.map((image, index) => (
            <SwiperSlide key={index} className='flex justify-center'>
              <div className="flex h-full w-[200px] items-center justify-center mx-[40px]">
                <img
                  src={image.imgURL}
                  alt={image.imgAlt}
                  className="block w-full h-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
