"use client";
import React from "react";
import Link from "../../../node_modules/next/link";
import { useSelector } from "react-redux";
const Events = () => {
  const { user } = useSelector(state => state.auth)
  return (
    <div className="w-full max-w-[100vw]">
      <div className="m-[40px] mt-[40px] max-w-full p-[20px] md:mx-[80px]">
        <div className="h-[426px]">
          <img
            className="z-1 relative left-[0px] right-[0px] !m-[0] h-[422px] w-full shrink-0 object-cover"
            alt=""
            src="/images/rectangle-97@2x.png"
          />
        </div>
        <div className="text-center font-primary text-heading_1 font-bold">
          Events
        </div>

        <div className="mt-[25px] flex flex-col-reverse justify-around gap-[20px] xl:flex-row">
          <div className="inline-block w-[520px] font-secondary text-base">
            Lorem ipsum dolor sit amet consectetur. Ut non vitae arcu commodo
            sed in platea amet nec.Lorem ipsum dolor sit amet consectetur. Ut
            non vitae arcu commodo sed in platea amet nec.Lorem ipsum dolor sit
            amet consectetur. Ut non vitae arcu commodo sed in platea amet
            nec.Lorem ipsum dolor sit amet consectetur. Ut non vitae arcu
            commodo sed in platea amet nec.Lorem ipsum dolor sit amet
            consectetur. Ut non vitae arcu commodo sed in platea amet nec.Lorem
            ipsum dolor sit amet consectetur. Ut n
          </div>
          <div className="grid gap-[30px] md:grid-cols-3">
            <div className="flex h-[230px] w-[230px] flex-col items-center justify-center gap-[35px] rounded-[3px] bg-[#FFECEC]">
              <img
                className="relative h-[100px] w-[100px] shrink-0"
                alt=""
                src="/images/wpfweddingcake.svg"
              />
              <p className="relative font-secondary">Wedding</p>
            </div>
            <div className="flex h-[230px] w-[230px] flex-col items-center justify-center gap-[35px] rounded-[3px] bg-[#FFECEC]">
              <img
                className="relative h-[100px] w-[100px] shrink-0"
                alt=""
                src="/images/twemojibirthdaycake.svg"
              />
              <p className="relative font-secondary">Birthday</p>
            </div>
            <div className="flex h-[230px] w-[230px] flex-col items-center justify-center gap-[35px] rounded-[3px] bg-[#FFECEC]">
              <img
                className="relative h-[100px] w-[100px] shrink-0"
                alt=""
                src="/images/gameiconsdeadlystrike.svg"
              />
              <p className="relative font-secondary">Teskar</p>
            </div>
            <div className="flex h-[230px] w-[230px] flex-col items-center justify-center gap-[35px] rounded-[3px] bg-[#FFECEC]">
              <img
                className="relative h-[100px] w-[100px] shrink-0"
                alt=""
                src="/images/graduation-cap-svgrepo-com 1.png"
              />
              <p className="relative font-secondary">Graduation</p>
            </div>
          </div>
        </div>
        <Link href={user ? `/events/eventappoint` : `/login`}>
          <button className="flex cursor-pointer flex-row items-start justify-start rounded-[10px] bg-crimson-200 px-[3.156rem] py-[1.093rem] [border:none]">
            <div className="relative  font-secondary text-medium font-bold text-white">
              Appoint your Event
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Events;
