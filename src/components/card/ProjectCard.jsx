import React from "react";
import DataFlow from "../data-flow";

export const ProjectCard = ({ key, imgsrc, title, paragraph1 }) => {
  return (
    <div key={key} className="box-border flex w-full flex-col items-start justify-start gap-[40px] bg-snow px-[20px] pb-[30px] pt-5 shadow-[1px_2px_10px_1px_rgba(255,_0,_0,_0.1)] md:w-[70%] xl:flex-row xl:gap-[100px] mq800:box-border mq800:pb-5">
      <img
        className="relative h-[400px] w-[100vw] max-w-full object-cover xl:h-auto xl:w-[400px]"
        loading="lazy"
        alt=""
        src={imgsrc}
      />
      <div className="flex h-full max-w-full flex-col items-start justify-start gap-[40px]">
        <div className=" flex h-full w-full flex-col items-start justify-start gap-[20px]  px-0 pb-[10px] pt-0 text-left font-roboto text-heading_1 text-black">
          <h1 className="mq800:medium mq450:base h-full  w-full font-primary text-heading_2 font-normal leading-[50px] mq800:leading-[40px] mq450:text-10xl">
            {title}
          </h1>
          <div className="flex h-full w-full flex-wrap items-start justify-start gap-[10px] font-inter text-base">
            <div className="flex h-full w-full flex-col flex-wrap items-start justify-start gap-[13px] md:min-w-[300px]  mq800:min-w-full">
              <div className="flex flex-wrap  items-center font-secondary  mq450:text-base">
                {paragraph1}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
