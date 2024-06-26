import React from "react";
import Image from "next/image";
import logo from "../../../../public/images/Group72.png";

const Page = () => {
  return (
    <div className="m-[40px] mt-[40px] flex min-h-[400px] flex-col items-center justify-center md:mx-[80px]">
      <div className="relative h-[100px] w-[100px] overflow-hidden">
        <Image
          src={logo}
          alt="Logo"
          layout="fill"
          objectFit="cover"
          className="object-top"
        />
      </div>
      <div className="mt-[-20px] flex h-auto w-auto flex-col items-center justify-center rounded bg-[#fcf9f9] px-6 py-16 shadow-lg">
        <p className="pb-4 font-primary text-heading_1 font-medium">Success</p>
        <p className="pb-20 font-secondary font-medium">
          We will contact you with Phone or via Email
        </p>
        <button className="flex cursor-pointer flex-row items-start justify-start rounded-8xs border-none bg-[#E71D36] px-[20px] py-[4px] hover:bg-[#e71d35bb] md:py-[6.5px]">
          <div className="relative inline-block text-left font-secondary text-base font-semibold leading-[28px] text-white mq450:text-base mq450:leading-[22px]">
            Back To Home
          </div>
        </button>
      </div>
    </div>
  );
};

export default Page;
