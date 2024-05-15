import React from "react";
import DataFlow from "../data-flow";

export const ProjectCard = ({ imgsrc, title, paragraph1 }) => {
  return (
    <div className="box-border flex w-full flex-col items-start justify-start gap-[40px] bg-snow px-[20px] pb-[30px] pt-5 shadow-[1px_8px_30px_rgba(255,_0,_0,_0.1)] md:w-[80%] xl:flex-row xl:gap-[100px] mq800:box-border mq800:pb-5">
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
              <div className="flex flex-wrap  items-center font-secondary  mq450:text-base">
                {paragraph1}
              </div>
            </div>
          </div>
        </div>
        <div className="box-border flex w-full flex-row items-start justify-start px-9 py-0">
          <div className="flex w-full flex-wrap place-content-center justify-between gap-[20px] md:flex-row">
            <DataFlow group90="/group-90@2x.png" signalProcessor="67%" />
            <DataFlow
              group90="/group-92@2x.png"
              signalProcessor="70%"
              propLeft="calc(50% - 60px)"
            />
            <DataFlow
              group90="/group-90@2x.png"
              signalProcessor="79%"
              propLeft="calc(50% - 60px)"
            />
          </div>
        </div>
        {/* <div className="flex flex-col items-start justify-start px-0 pb-0 pt-[53.80000000000001px]"> */}
        <button className="flex cursor-pointer flex-row items-start justify-start rounded-3xs bg-orangered-100 px-[30.5px] py-[12.5px] [border:none] hover:bg-tomato">
          <div className="relative inline-block min-w-[56px] text-left font-secondary text-base font-semibold leading-[28px] text-white">
            Donate
          </div>
        </button>
        {/* </div> */}
      </div>
    </div>
  );
};
