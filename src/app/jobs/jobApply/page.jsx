import React from "react";
import Image from "next/image";
import group from "../../../../public/images/Group.png";
import logo from "../../../../public/images/logo.png";
const page = () => {
  return (
    <div>

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
          <Image src={group} alt="fill" width={50} height={50} />
          <div className="mx-[10px] w-[130px] border-[2px] border-black"></div>
          <Image src={logo} alt="fill" width={50} height={50} />
        </div>
      </div>

      <div className="flex h-screen items-center justify-center ">
        <div className="w-[550px] rounded bg-[#fcf9f9] p-10 shadow-lg">
          <form>
            <div>
              <div className="mb-4">
                <label htmlFor="name" className="mb-1 block font-semibold">
                  Full Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="focus:border-blue-500 w-full rounded border border-[#DC8E7B] px-3 py-2 placeholder-[#e2404033] focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="mb-1 block font-semibold">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="focus:border-blue-500 w-full rounded border border-[#DC8E7B] px-3 py-2 placeholder-[#e2404033] focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="mb-1 block font-semibold">
                  Phone Number:
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="focus:border-blue-500 w-full  rounded border border-[#DC8E7B] px-3 py-2 placeholder-[#e2404033] focus:outline-none"
                  required
                />
              </div>

              <div class="flex w-full items-center justify-center">
                <label
                  for="dropzone-file"
                  class="bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 flex h-40 w-full cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border-2 border-[#DC8E7B]">
                  <div class="flex flex-row items-center justify-center gap-3 border-2 border-dashed border-[#DC8E7B] px-5 pt-1">
                    <svg
                      class="text-gray-500 dark:text-gray-400 mb-4 h-8 w-8"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16">
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p class="text-gray-500 dark:text-gray-400 mb-2 text-sm font-semibold">
                      Upload Document
                    </p>
                  </div>
                  <div>
                    Click or drag to this area to upload from local drive
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
              </div>

              <button className="mt-4 flex w-full cursor-pointer flex-row items-start justify-start rounded-8xs bg-[#E71D36] px-[20px] py-[4px] [border:none]  hover:bg-[#e71d35bb] md:py-[6.5px]">
                <div className="w-full text-center font-inter text-xl font-semibold leading-[28px] text-white mq450:text-base mq450:leading-[22px]">
                  Submit
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
