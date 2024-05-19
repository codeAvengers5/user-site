"use client";
import React, { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { BiSolidEnvelope } from "react-icons/bi";
import { TbMenu2 } from "react-icons/tb";
import { IoCloseOutline } from "react-icons/io5";
import Link from "../../node_modules/next/link";
import { usePathname } from "../../node_modules/next/navigation";

const Header = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
    console.log("clicked", nav);
  };

  const pathname = usePathname();

  return (
    <div className="sticky start-0 top-0 z-20 w-full">
      {/* this is the most top section */}
      <section className="box-border flex flex-col flex-wrap items-start justify-between gap-[20px] self-stretch bg-darkslategray py-[1.5px] pl-8 pr-[35px] text-[#ffffff] md:flex-row">
        <div className="flex  max-w-full flex-col flex-wrap items-start justify-start gap-[20px] sm:flex-row">
          <div className="box-border flex flex-col items-start justify-start px-0 pb-0 pt-[14.5px]">
            <a
              href="tel:+251979797979"
              className="flex flex-1 flex-row items-start justify-start gap-[8.5px]">
              <FaPhone className="h-[24px] w-[24px] shrink-0" />
              <div className="relative text-base mq450:text-small">
                (+251) 979 797979
              </div>
              <div className="relative inline-block min-w-[27px] mq450:text-small">
                OR
              </div>
            </a>
          </div>

          <div className="box-border flex w-[30px] flex-col items-start justify-start pb-0 pl-0 pr-[11px] pt-[15.5px] md:w-[62px]">
            <div className="relative self-stretch mq450:text-small">
              <a href="tel:8131" className="m-0">
                {" "}
                8131
              </a>
            </div>
          </div>

          <div className="flex h-[51px] w-[20px] flex-row items-start  justify-between gap-[20px] md:min-w-[195px]">
            <div className="relative box-border h-[54px] w-[5px] border-r-[3px] border-solid border-white md:w-[30px]" />

            <div className="box-border flex h-[42.5px] w-[227px] flex-col items-start justify-start px-0 pb-0 pt-[8.5px]">
              <div className="flex flex-row items-center justify-center gap-[10px] self-stretch">
                <BiSolidEnvelope className="h-[34px] w-[32px] " />
                <div className="w-full items-start justify-start px-0 pb-0 pt-[5px]">
                  <a
                    className="relative shrink-0 text-[inherit] [text-decoration:underline] mq450:text-small"
                    href="mailto:info@mekedonia.org"
                    target="_blank">
                    info@mekedonia.org
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-[51px] flex-col items-center justify-start px-0 pb-0  pt-[5px]">
          <button
            onClick={() => {
              window.location.href =
                "https://www.gofundme.com/f/mekedonia-charity-help-build-home-for-the-homeless";
            }}
            className="flex cursor-pointer flex-row items-start justify-start rounded-8xs bg-[#E71D36] px-[20px] py-[4px] [border:none] hover:bg-[#e71d35bb] md:px-[34.5px] md:py-[6.5px]">
            <div className="relative inline-block min-w-[70px] text-left font-inter text-xl font-semibold leading-[28px] text-white mq450:text-base mq450:leading-[22px]">
              Donate
            </div>
          </button>
        </div>
      </section>

      {/* the nav bar */}
      <div className="box-border flex max-w-full flex-row items-center  self-stretch bg-white bg-opacity-[40%] text-black shadow-lg backdrop-blur-lg backdrop-filter  mq1325:box-border  mq1125:box-border mq450:box-border">
        <div className="mx-[20px] flex max-w-full flex-1 flex-col items-start justify-start gap-[34px] mq800:gap-[17px_34px]">
          <div className="box-border flex h-[120px] max-w-full flex-row items-start justify-start self-stretch text-xl ">
            <div className="flex w-full flex-row items-center justify-between gap-[20px] self-stretch">
              <img
                className="relative h-[80px] w-[130px] rounded-[50%] object-cover md:h-[109px] md:w-[185px]"
                loading="lazy"
                alt=""
                src="/images/ellipse-10@2x.png"
              />

              <button
                type="button"
                onClick={handleNav}
                className={`${nav ? "" : "fixed right-20 top-28 "} text-gray-500  hover:bg-gray-100 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 z-10 inline-flex h-10 w-10 items-center  justify-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2 md:hidden`}>
                {nav ? (
                  <>
                    <span className="sr-only">Open main menu</span>
                    <TbMenu2 size={75} className="font-bold" />
                  </>
                ) : (
                  <>
                    <span className="sr-only">Close</span>
                    <IoCloseOutline className="h-[30px] w-[30px] " />
                  </>
                )}
              </button>

              <div
                className={`${nav ? "hidden" : "fixed right-0 top-0 z-0 flex flex-col md:relative md:flex-1 md:flex-row"} h-[100vh] w-[200px] max-w-full items-center justify-center gap-[20px] self-stretch bg-white bg-opacity-[0%] px-0 py-[14.5px] pb-7 pt-0 font-[600] shadow-lg backdrop-blur-lg backdrop-filter  md:flex md:h-auto md:w-0 md:flex-1 md:justify-end md:shadow-none`}>
                <Link
                  className={`mx-[8px] font-secondary text-base uppercase tracking-tighter hover:text-red-200 ${pathname === "/" ? "text-red-400" : ""}`}
                  href="/">
                  Home
                </Link>
                <Link
                  className={`mx-[8px] font-secondary text-base uppercase tracking-tighter hover:text-red-200 ${pathname === "/about" ? "text-red-400" : ""}`}
                  href="/about">
                  About
                </Link>
                <Link
                  className={`mx-[8px] font-secondary text-base uppercase tracking-tighter hover:text-red-200 ${pathname === "/news" ? "text-red-400" : ""}`}
                  href="/news">
                  News
                </Link>
                <Link
                  className={`mx-[8px] font-secondary text-base uppercase tracking-tighter hover:text-red-200 ${pathname === "/events" ? "text-red-400" : ""}`}
                  href="/events">
                  Events
                </Link>
                <Link
                  className={`mx-[8px] font-secondary text-base uppercase tracking-tighter hover:text-red-200 ${pathname === "/jobs" ? "text-red-400" : ""}`}
                  href="/jobs">
                  Jobs
                </Link>
                <Link
                  className={`mx-[8px] font-secondary text-base uppercase tracking-tighter hover:text-red-200 ${pathname === "/contact us" ? "text-red-400" : ""}`}
                  href="/contact">
                  Contact us
                </Link>
                <div className="flex cursor-pointer flex-row items-start justify-start rounded-8xs bg-[#E71D36] px-[20px] py-[4px] font-bold text-white [border:none] hover:bg-[#e71d35bb] md:px-[34.5px] md:py-[6.5px]">
                  <Link
                    // className={`mx-[8px] font-secondary text-base uppercase tracking-tighter hover:text-red-200 ${pathname === "/contact us" ? "text-red-400" : ""}`}
                    href="/login">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
