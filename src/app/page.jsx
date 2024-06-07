"use client";
import { ProjectCard } from "@/components/card/ProjectCard";
import FrameComponent from "@/components/frame-component";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchPromoData } from "@/slices/promoSlice";
export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.promo);
  console.log(data);
  useEffect(() => {
    dispatch(fetchPromoData());
  }, [dispatch]);
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
              <div className="z-2 box-border flex w-full max-w-full flex-row flex-wrap items-start justify-start md:w-[532px] ">
                <h1 className="relative m-0 inline-block max-w-full flex-1 font-primary text-heading_1 font-bold leading-[50px] mq800:text-heading_2 mq800:leading-[40px] mq450:text-medium mq450:leading-[30px]">
                  Sew Lemardat Sew Mehon Beki nw
                </h1>
              </div>
              <div className="flex w-full flex-row items-start justify-start self-stretch py-0 pr-0 text-xl">
                <div className="flex w-full flex-row flex-wrap items-start justify-start gap-[20px]">
                  <div className="relative z-[2] w-full max-w-full font-secondary md:min-w-[263px] md:flex-1 mq450:text-base">{`Lorem ipsum dolor sit amet consectetur. Tellus velit ultrices bibendum `}</div>
                  <button
                    onClick={() => {
                      router.push("/about");
                    }}
                    className="z-[2] flex w-[150px] cursor-pointer flex-row items-start justify-start rounded-3xs border-[4px] border-solid border-red-200 bg-[transparent] px-[19px] py-[9px] hover:box-border hover:border-[4px] hover:border-solid hover:border-red-100 hover:bg-red-300">
                    About Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative top-[-50px] z-10 flex w-full flex-row flex-wrap place-content-evenly items-center gap-y-[30px]">
          <FrameComponent number="3100" text="Elders" />
          <FrameComponent number="1450" text="Bed Riders" />
          <FrameComponent number="1560" text="Mentally Disabled" />
          <FrameComponent number="1190" text="Phisically Imperiment" />
          <FrameComponent number="200" text="Visually Imperiment" />
          <FrameComponent number="7500" text="Total" />
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
                <span className="tracking-base font-secondary text-base font-light md:text-medium">
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
      <section className="m-[40px] mt-[40px] min-h-[700px] max-w-full p-[20px] md:mx-[80px]">
        <div className="flex w-full flex-col  gap-[37px] mq800:gap-[18px_37px]">
          <div className="box-border flex max-w-full flex-row items-start justify-center self-stretch mq800:box-border">
            <h1 className="relative m-0 flex max-w-full shrink-0  items-center font-primary text-heading_1 font-bold uppercase mq800:text-heading_2 mq450:text-medium">
              On Going Project
            </h1>
          </div>
          {data && data.map((promo) => (
            <div key={promo._id} className="flex max-w-full flex-col items-center justify-center gap-[50px]">
              <ProjectCard
                imgsrc={promo.images[0].url}
                title={promo.title}
                paragraph1={promo.description}
              />
            </div>
          ))}

        </div>
      </section>

      {/*************************************************************  work by Section ******************************************************************/}
      <section className="m-[40px] mt-[40px] min-h-[400px] max-w-full p-[20px] md:mx-[80px]">
        <div className="flex flex-row items-start justify-center self-stretch px-5 py-0">
          <h1 className="relative m-0  mb-[20px] flex max-w-full  shrink-0 items-center font-primary text-heading_1 font-bold uppercase mq800:text-heading_2 mq450:text-medium">
            {`Work By `}
          </h1>
        </div>
        <div className="flex max-w-full flex-row items-start justify-between gap-[20px] self-stretch text-13xl mq1325:flex-wrap mq1325:justify-center">
          <div className="flex  max-h-[535px] w-[403px] max-w-full flex-col items-center justify-center gap-[22px]">
            <img
              className="[150px] sm:[200px] md:[300px] relative max-w-full shrink-0 self-stretch overflow-hidden rounded-3xs object-cover lg:h-[475px]"
              loading="lazy"
              alt=""
              src="images/rectangle-68@2x.png"
            />
            <h2 className="font-heading_2 relative m-0 font-primary text-inherit mq800:text-medium mq450:text-base">{`Art Gallery `}</h2>
          </div>
          <div className="flex max-h-[535px] w-[403px] max-w-full flex-col items-center justify-center gap-[30px]">
            <img
              className="[150px] sm:[200px] md:[300px] relative max-w-full shrink-0 self-stretch overflow-hidden rounded-3xs object-cover lg:h-[475px]"
              loading="lazy"
              alt=""
              src="images/rectangle-90@2x.png"
            />
            <h2 className="font-heading_2 relative m-0 font-primary text-inherit mq800:text-medium mq450:text-base">
              Craft Works
            </h2>
          </div>
          <div className="flex max-h-[535px] w-[403px] max-w-full flex-col items-center justify-center gap-[22px]">
            <img
              className="[150px] sm:[200px] md:[300px] relative max-w-full shrink-0 self-stretch overflow-hidden rounded-3xs object-cover lg:h-[475px]"
              loading="lazy"
              alt=""
              src="images/rectangle-91@2x.png"
            />
            <h2 className="font-heading_2 relative m-0 font-primary text-inherit mq800:text-medium mq450:text-base">
              Sewing
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}
