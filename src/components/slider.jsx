"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Slider({ images, width, height }) {
  console.log(width, height);
  return (
    <section className="p-7">
      <div className="container ">
        <Swiper
          navigation
          pagination={{ type: "bullets" }}
          modules={[Navigation, Pagination, Autoplay]}
          className={`h-[${height}] w-[${width}]`}
          autoplay={{ delay: 3000 }}>
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-full w-full items-center justify-center">
                <img
                  src={image.imgURL}
                  alt={image.imgAlt}
                  className="block h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
