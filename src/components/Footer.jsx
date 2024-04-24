import React from 'react'
import { IoLogoFacebook } from "react-icons/io5";
import { TfiYoutube } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="box-border w-full flex flex-row flex-wrap items-center md:items-start justify-center sm:justify-between gap-[20px] self-stretch text-white bg-darkslategray pb-0 pl-8 pr-9 pt-2.5 ">
          
          <div className="box-border flex max-w-[189px] flex-col items-start justify-start gap-[8.166666666666666px] px-[67px] py-[5px]">
            <div className="flex flex-row items-start justify-start py-0 pl-[1.5px] pr-px">
              <div className="relative inline-block min-w-[52px] font-semibold mq450:text-base">
                Links
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="relative inline-block min-w-[55px] font-extralight mq450:text-base">
                Home
              </div>
            </div>
            <div className="flex flex-row items-start justify-start px-0 py-0">
              <div className="relative inline-block min-w-[56px] shrink-0 font-extralight [debug_commit:1cbd860] mq450:text-base">
                About
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 pl-0 pr-0.5">
              <div className="relative inline-block min-w-[53px] font-extralight mq450:text-base">
                News
              </div>
            </div>
            <div className="flex flex-row items-start justify-start px-0 py-0">
              <div className="relative inline-block min-w-[63px] shrink-0 font-extralight [debug_commit:1cbd860] mq450:text-base">
                Events
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 pl-0 pr-2.5">
              <div className="relative inline-block min-w-[45px] font-extralight mq450:text-base">
                Jobs
              </div>
            </div>
            <div className="flex flex-row items-start justify-start self-stretch px-0 py-0">
              <div className="relative inline-block min-w-[74px] shrink-0 font-extralight [debug_commit:1cbd860] mq450:text-base">
                Contact
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-start gap-[15px] px-[15px] pb-[17px] pt-0 ">
            <div className="flex flex-row items-start justify-start px-8 py-0">
              <div className="relative inline-block min-w-[90px] font-semibold mq450:text-base">
                Contact Info
              </div>
            </div>
                <div className="relative inline-block w-[90px] shrink-0 font-extralight [debug_commit:1cbd860] mq450:text-base">
                  (+251) 8131
                </div>
                <div className="relative shrink-0 font-extralight [debug_commit:1cbd860] mq450:text-base">
                  (+251) 979797979
                </div>
              <div className="relative shrink-0 font-extralight [debug_commit:1cbd860] mq450:text-base">
                (+251) 9 321376534
              </div>
          </div>

          <div className="flex flex-col items-start justify-start gap-[8px] pb-2.5 pl-[2.6000000000000227px] pr-[2.599999999999909px] pt-0 text-center">
            <div className="flex flex-row items-start justify-start py-0 pl-[52.39999999999998px] pr-[52px]">
              <div className="relative flex w-[123px] min-w-[123px] items-center justify-center font-semibold mq450:text-base">
                Social Media
              </div>
            </div>
            <div className="flex w-full h-full md:flex-row flex-col items-center justify-start gap-[15px]">
              <IoLogoFacebook className="h-6 w-6"/>
              <TfiYoutube className="h-6 w-6"/>
              <FaXTwitter className="h-6 w-6"/>
              <BsTelegram className="h-6 w-6"/>
              <IoLogoLinkedin className="h-6 w-6"/>
              <BiLogoInstagramAlt className="h-6 w-6"/>
              <BiLogoGmail className="h-6 w-6"/>
            </div>
          </div>

          <img
            className="relative h-[180px] md:h-[217px] md:w-[329px] max-w-full object-cover"
            loading="lazy"
            alt=""
            src="images/rectangle-92@2x.png"
          />
        </div>
  )
}

export default Footer