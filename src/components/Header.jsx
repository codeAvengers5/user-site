"use client";
import React, { useState } from 'react'
import { FaPhone } from "react-icons/fa6";
import { BiSolidEnvelope } from "react-icons/bi";
import { TbMenu2 } from "react-icons/tb";
import { IoCloseOutline } from "react-icons/io5";

const Header = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
        console.log('clicked', nav);
    };

    return (
        <div className='sticky w-full z-20 top-0 start-0'>
            {/* this is the most top section */}
            <section className="box-border flex flex-col md:flex-row flex-wrap items-start justify-between gap-[20px] self-stretch bg-darkslategray py-[1.5px] pl-8 pr-[35px] text-[#ffffff]">

                <div className="flex  max-w-full flex-col sm:flex-row items-start justify-start gap-[20px] flex-wrap">
                    <div className="box-border flex flex-col items-start justify-start px-0 pb-0 pt-[14.5px]">
                        <div className="flex flex-1 flex-row items-start justify-start gap-[8.5px]">
                            <FaPhone className="h-[24px] w-[24px] shrink-0" />
                            <div className="relative text-base mq450:text-small">
                                (+251) 979 797979
                            </div>
                            <div className="relative inline-block min-w-[27px] mq450:text-small">
                                OR
                            </div>
                        </div>
                    </div>

                    <div className="box-border flex w-[30px] md:w-[62px] flex-col items-start justify-start pb-0 pl-0 pr-[11px] pt-[15.5px]">
                        <div className="relative self-stretch mq450:text-small">
                            <p className="m-0"> 8131</p>
                        </div>
                    </div>

                    <div className="flex flex-row h-[51px] w-[20px] md:min-w-[195px]  items-start justify-between gap-[20px]">
                        <div className="relative box-border h-[54px] w-[5px] md:w-[30px] border-r-[3px] border-solid border-white" />

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

                <div className="flex flex-col items-center justify-start px-0 pb-0 pt-[5px]  h-[51px]">
                    <button className="flex cursor-pointer flex-row items-start justify-start rounded-8xs bg-[#E71D36] px-[20px] md:px-[34.5px] py-[4px] md:py-[6.5px] [border:none] hover:bg-[#e71d35bb]">
                        <div className="relative inline-block min-w-[70px] text-left font-inter text-xl font-semibold leading-[28px] text-white mq450:text-base mq450:leading-[22px]">
                            Donate
                        </div>
                    </button>
                </div>

            </section>

            {/* the nav bar */}
            <div className="box-border flex max-w-full flex-row items-center  self-stretch text-black mq1325:box-border  mq1125:box-border  mq450:box-border bg-white">
                <div className="flex max-w-full flex-1 flex-col items-start justify-start gap-[34px] mq800:gap-[17px_34px] mx-[20px]">
                    <div className="box-border flex h-[181.8px] max-w-full flex-row items-start justify-start self-stretch text-xl ">
                        <div className="flex w-full flex-row items-center justify-between gap-[20px] self-stretch">
                            <img
                                className="relative h-[80px] md:h-[109px] w-[130px] md:w-[185px] rounded-[50%] object-cover"
                                loading="lazy"
                                alt=""
                                src="images/ellipse-10@2x.png"
                            />

                            <button
                                type="button"
                                onClick={handleNav}
                                className={`${nav ? "":"fixed top-28 right-20 "} z-10  inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`}
                            >
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
                                className={`${nav ? "hidden" : "fixed md:relative top-0 right-0 z-0 flex flex-col md:flex-row"} md:flex items-center justify-center md:justify-end gap-[20px] self-stretch py-[14.5px]  w-[200px] h-[100vh] md:h-auto max-w-full px-0 pb-7 pt-0 md:w-0 shadow-2xl bg-white`}
                            >
                                    <div className="flex flex-row items-start justify-start">
                                        <div className=" min-w-[54px]">
                                            <a href="#">Home</a>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-start justify-start">
                                        <div className="relative inline-block min-w-[54px]">
                                            <a href="#">About</a>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-start justify-start py-0 pl-0 pr-[3px]">
                                        <div className="relative inline-block min-w-[51px]">
                                            News
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-start justify-start">
                                        <div className="relative inline-block min-w-[60px]">
                                            Events
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-start justify-start">
                                        <div className="relative inline-block min-w-[45px]">
                                            Jobs
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-start justify-start">
                                        <div className="relative inline-block min-w-[94px]">
                                            ContactUs
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header