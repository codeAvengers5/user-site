import React from "react";
import Image from "next/image";
import group from "../../../../public/images/Group.png";
import logo from "../../../../public/images/logo.png";
const page = () => {
  return (
    <div className="w-full">
      <div className="m-[40px] mt-[40px] min-h-[700px] p-[20px] md:mx-[80px]">
      <div className="flex flex-col gap-4 pt-10">
        <div className="flex flex-row items-center justify-center gap-20">
          <div className="flex flex-row gap-1">
            <p className="text-2xl font-bold">01</p>
            <p>Job Description</p>
          </div>
          <div className="flex flex-row gap-1">
            <p className="text-2xl font-bold">02</p>
            <p>Personal information</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <Image src={group} alt="fill" width={50} height={50} />
          <div className="mx-[10px] w-[130px] border-[2px] border-black"></div>
          <Image src={logo} alt="fill" width={50} height={50} />
          <div className="mx-[10px] w-[130px] border-[2px] border-black"></div>
          <Image src={logo} alt="fill" width={50} height={50} />
        </div>
      </div>
      <div className="flex max-w-[800px] flex-col gap-6">
        <div className="text-xl font-bold">
          Registered Nurse - Hospital Setting
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold">Description</p>
          <p>
            We are currently seeking a compassionate and skilled Registered
            Nurse to join our healthcare team in a hospital setting. As a nurse
            at our facility, you will have the opportunity to make a meaningful
            impact on the lives of patients and their families. We are committed
            to providing high-quality care and are looking for a dedicated
            professional to join our team.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold"> Description</p>
          <p>
            We are currently seeking a compassionate and skilled Registered
            Nurse to join our healthcare team in a hospital setting. As a nurse
            at our facility, you will have the opportunity to make a meaningful
            impact on the lives of patients and their families. We are committed
            to providing high-quality care and are looking for a dedicated
            professional to join our team.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold"> Description</p>
          <p>
            We are currently seeking a compassionate and skilled Registered
            Nurse to join our healthcare team in a hospital setting. As a nurse
            at our facility, you will have the opportunity to make a meaningful
            impact on the lives of patients and their families. We are committed
            to providing high-quality care and are looking for a dedicated
            professional to join our team.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold"> Salary</p>
          <p>8000ETB</p>
        </div>
      </div>
      <div className="flex h-[51px] flex-col items-end justify-start px-20 py-20">
        <button className="flex cursor-pointer flex-row items-start justify-start rounded-8xs bg-[#E71D36] px-[20px] py-[4px] [border:none] hover:bg-[#e71d35bb]  md:py-[6.5px]">
          <div className="relative inline-block w-[70px] text-center font-inter text-xl font-semibold leading-[28px] text-white mq450:text-base mq450:leading-[22px]">
            Next
          </div>
        </button>
      </div>
    </div>
    </div>
  );
};
export default page;
