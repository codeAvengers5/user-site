import DataFlow from "@/components/data-flow";
import ErrorHandler from "@/components/error-handler";
import FrameComponent from "@/components/frame-component";
import React from "react";

export default function Home() {
  return (
    <div className="w-full max-w-[100vw]">
      {/*************************************************************  Hero Section ******************************************************************/}
      <section className="flex h-full max-w-full flex-col items-start justify-start bg-white  text-left font-roboto text-xl text-white lg:min-h-[700px] ">
        <div className="h-[422px] w-full">
          <img
            className="z-1 absolute left-[0px] right-[0px] !m-[0] h-[422px] w-full max-w-full shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="images/rectangle-46@2x.png"
          />
          <div className="z-4 absolute left-[0px] right-[0px] !m-[0] h-[422px] w-full bg-[#ed330549] bg-blend-multiply" />
          <div className="z-8 mq800:pr-[37px mx-[40px] mb-[20px] box-border flex  h-full max-w-full flex-row items-center pb-[50px] pt-0 text-white md:mx-[80px] md:w-[703px] mq800:box-border mq800:pl-[37px]">
            <div className="flex w-full flex-col flex-wrap items-start justify-start gap-[10px]">
              <div className="z-2 box-border flex w-full max-w-full flex-row flex-wrap items-start justify-start md:w-[432px] ">
                <h1 className="font-inherit relative m-0 inline-block max-w-full flex-1 text-heading_1 font-bold leading-[50px] mq800:text-19xl mq800:leading-[40px] mq450:text-10xl mq450:leading-[30px]">
                  Sew Lemardat Sew Mehon Beki nw
                </h1>
              </div>
              <div className="flex w-full flex-row items-start justify-start self-stretch py-0 pr-0 text-xl">
                <div className="flex w-full flex-row flex-wrap items-start justify-start gap-[20px]">
                  <div className="relative z-[2]  w-full max-w-full md:min-w-[263px] md:flex-1 mq450:text-base">{`Lorem ipsum dolor sit amet consectetur. Tellus velit ultrices bibendum `}</div>
                  <button className="z-[2] flex w-[150px] cursor-pointer flex-row items-start justify-start rounded-3xs border-[4px] border-solid border-red-200 bg-[transparent] px-[19px] py-[9px] hover:box-border hover:border-[4px] hover:border-solid hover:border-red-100 hover:bg-red-300">
                    About Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative top-[-50px] z-10 flex w-full flex-row flex-wrap place-content-evenly items-center gap-y-[30px]">
          <FrameComponent />
          <FrameComponent />
          <FrameComponent />
          <FrameComponent />
          <FrameComponent />
          <FrameComponent />
        </div>
      </section>

      {/*************************************************************  About Section ******************************************************************/}

      <section className="relative top-0 mt-[40px] min-h-[500px] max-w-full items-start justify-start">
        <div className="m-[40px] box-border flex max-w-full  flex-row items-center justify-center p-5 pb-1.5 pt-0 text-xl md:mx-[80px] ">
          <div className="flex h-full w-[1139px] max-w-full flex-col items-start justify-center md:flex-row  md:gap-[60px] mq1125:flex-wrap mq800:gap-[10px_17px]">
            <img
              className="relative h-[592px] w-[526px] max-w-full object-cover mq1125:flex-1"
              loading="lazy"
              alt=""
              src="images/rectangle-49@2x.png"
            />
            <div className="box-border flex  max-w-full flex-1 flex-col items-center justify-start px-0 pb-0 pt-3 mq800:min-w-full">
              <div className="relative flex  shrink-0 items-center self-stretch leading-[28px] mq450:leading-[22px] mq450:text-[lgi]">
                <span>
                  <p className="m-0">
                    Lorem ipsum dolor sit amet consectetur. Tellus velit
                    ultrices bibendum mollis eu sit tempor eu pulvinar. In
                    feugiat morbi integer penatibus consequat felis. Et gravida
                    tellus orci imperdiet lectus ultrices quam lorem arcu.
                    Accumsan pharetra aliquet malesuada massa cursus iaculis
                    tempor sapien cras.
                  </p>
                  <p className="m-0">
                    Lorem ipsum dolor sit amet consectetur. Tellus velit
                    ultrices bibendum mollis eu sit tempor eu pulvinar. In
                    feugiat morbi integer penatibus consequat felis. Et gravida
                    tellus orci imperdiet lectus ultrices quam lorem arcu.
                    Accumsan pharetra aliquet malesuada massa cursus iaculis
                    tempor sapien cras.Lorem ipsum dolor sit amet consectetur.
                    Tellus velit ultrices bibendum mollis eu sit tempor eu
                    pulvinar. In feugiat morbi integer penatibus consequat
                    felis. Et gravida tellus orci imperdiet lectus ultrices quam
                    lorem arcu. Accumsan pharetra aliquet malesuada massa cursus
                    iaculis tempor sapien cras.
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*************************************************************  Our project Section ******************************************************************/}
      <section className="m-[40px] mt-[40px] min-h-[700px] max-w-full p-[20px] md:mx-[80px] ">
        <div className="flex w-full flex-col  gap-[37px] mq800:gap-[18px_37px]">
          <div className="box-border flex max-w-full flex-row items-start justify-center self-stretch py-0 pl-[66px] pr-5 mq800:box-border mq800:pl-[33px]">
            <h1 className="font-inherit relative m-0 flex w-[404px] max-w-full shrink-0 items-center text-[48px] font-medium mq800:text-19xl mq450:text-10xl">
              On Going Project
            </h1>
          </div>
          <div className="flex  max-w-full flex-col items-start justify-start gap-[20px]">
            <div className="box-border flex w-full flex-col items-start justify-start gap-[60px] bg-snow px-[49px] pb-[27px] pt-5 shadow-[0px_4px_4px_rgba(255,_0,_0,_0.2)] md:flex-row mq800:box-border mq800:pb-5">
              <img
                className="relative h-[426.5px] w-[364px] max-w-full object-cover"
                loading="lazy"
                alt=""
                src="images/rectangle-50@2x.png"
              />

              <div className="flex h-full max-w-full flex-col items-start justify-start gap-[40px]">
                <ErrorHandler />
                <div className="box-border flex w-full flex-row items-start justify-start px-9 py-0">
                  <div className="flex w-full flex-wrap place-content-center  justify-between gap-[20px] md:flex-row">
                    <DataFlow
                      group90="/group-90@2x.png"
                      signalProcessor="67%"
                    />
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
                <div className="flex flex-col items-start justify-start px-0 pb-0 pt-[53.80000000000001px]">
                  <button className="flex cursor-pointer flex-row items-start justify-start rounded-3xs bg-orangered-100 px-[30.5px] py-[12.5px] [border:none] hover:bg-tomato">
                    <div className="relative inline-block min-w-[56px] text-left font-inter text-base font-semibold leading-[28px] text-white">
                      Donate
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="box-border flex w-full flex-col items-start justify-start gap-[60px] bg-snow px-[49px] pb-[27px] pt-5 shadow-[0px_4px_4px_rgba(255,_0,_0,_0.2)] md:flex-row mq800:box-border mq800:pb-5">
              <img
                className="relative h-[426.5px] w-[364px] max-w-full object-cover"
                loading="lazy"
                alt=""
                src="images/rectangle-50@2x.png"
              />
              <div className="flex h-full max-w-full flex-col items-start justify-start gap-[40px]">
                <ErrorHandler />
                <div className="box-border flex w-full flex-row items-start justify-start px-9 py-0">
                  <div className="flex w-full flex-wrap place-content-center  justify-between gap-[20px] md:flex-row">
                    <DataFlow
                      group90="/group-90@2x.png"
                      signalProcessor="67%"
                    />
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
                <div className="flex flex-col items-start justify-start px-0 pb-0 pt-[53.80000000000001px]">
                  <button className="flex cursor-pointer flex-row items-start justify-start rounded-3xs bg-orangered-100 px-[30.5px] py-[12.5px] [border:none] hover:bg-tomato">
                    <div className="relative inline-block min-w-[56px] text-left font-inter text-base font-semibold leading-[28px] text-white">
                      Donate
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*************************************************************  work by Section ******************************************************************/}
      <section className="m-[40px] mt-[40px] min-h-[400px] max-w-full p-[20px] md:mx-[80px]">
        <div className="flex flex-row items-start justify-center self-stretch px-5 py-0">
          <h1 className="font-inherit relative m-0 flex  max-w-full shrink-0 items-center text-[48px] font-medium mq800:text-19xl mq450:text-10xl">
            {`Work By `}
          </h1>
        </div>
        <div className="flex max-w-full flex-row items-start justify-between gap-[20px] self-stretch text-13xl mq1325:flex-wrap mq1325:justify-center">
          <div className="flex  max-h-[535px] w-[403px] max-w-full flex-col items-start justify-start gap-[22px]">
            <img
              className="[150px] sm:[200px] md:[300px] relative max-w-full shrink-0 self-stretch overflow-hidden rounded-3xs object-cover lg:h-[475px]"
              loading="lazy"
              alt=""
              src="images/rectangle-68@2x.png"
            />
            <div className="box-border flex w-[373px] max-w-full flex-row items-start justify-center px-5 py-0">
              <h2 className="font-inherit relative m-0 text-inherit font-normal mq800:text-7xl mq450:text-lgi">{`Art Gallery `}</h2>
            </div>
          </div>
          <div className="flex max-h-[535px] w-[403px] max-w-full flex-col items-start justify-start gap-[30px]">
            <img
              className="[150px] sm:[200px] md:[300px] relative max-w-full shrink-0 self-stretch overflow-hidden rounded-3xs object-cover lg:h-[475px]"
              loading="lazy"
              alt=""
              src="images/rectangle-90@2x.png"
            />
            <div className="flex flex-row items-start justify-center self-stretch py-0 pl-[63px] pr-5 mq450:box-border mq450:pl-5">
              <h2 className="font-inherit relative m-0 text-inherit font-normal mq800:text-7xl mq450:text-lgi">
                Craft Works
              </h2>
            </div>
          </div>
          <div className="flex max-h-[535px] w-[403px] max-w-full flex-col items-start justify-start gap-[22px]">
            <img
              className="[150px] sm:[200px] md:[300px] relative max-w-full shrink-0 self-stretch overflow-hidden rounded-3xs object-cover lg:h-[475px]"
              loading="lazy"
              alt=""
              src="images/rectangle-91@2x.png"
            />
            <div className="box-border flex w-[340px] max-w-full flex-row items-start justify-center px-5 py-0">
              <h2 className="font-inherit relative m-0 inline-block min-w-[104px] text-inherit font-normal mq800:text-7xl mq450:text-lgi">
                Sewing
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
