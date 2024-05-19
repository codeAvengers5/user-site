"use client";
import React, { useEffect } from "react";
import { IoMdSearch } from "react-icons/io";
import Slider from "@/components/slider";
import images from "@/components/images";
import Newscard from "@/components/card/newsCard";
import { useDispatch, useSelector } from "react-redux";
// import { fetchNews } from "@/slices/news";

function page() {
  // const dispatch = useDispatch();
  // const { data, loading, error } = useSelector(state => state.news);
  // console.log(data);
  // useEffect(() => {
  //   dispatch(fetchNews());
  // }, [dispatch]);
  return (
    <div className="w-full max-w-[100vw] ">
      <section className="m-[40px] mt-[40px] flex h-full min-h-[700px]  max-w-full flex-col justify-start bg-white text-left font-roboto text-xl md:mx-[80px]">
        <div className="flex flex-col justify-between md:flex-row ">
          <h1 className="font-primary text-heading_2 font-bold uppercase md:text-heading_1">
            News
          </h1>
          <div className="relative m-[30px] flex items-center">
            <input
              className="w-full rounded-md border border-red-200 bg-white px-4 py-2 pr-8 leading-tight text-black placeholder-red-200 placeholder-opacity-20 focus:outline-none md:w-[600px]"
              placeholder="search....."
            />
            <div className="absolute inset-y-0 right-0 flex items-center p-3 text-black">
              <IoMdSearch size={23} />
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col  justify-around md:flex-row">
          <div className="min-h-[200px] md:h-[700px] md:w-[900px]">
            <Slider images={images} width={700} />
          </div>
          <div className="flex w-full flex-col items-center justify-center p-[5px] md:p-[20px]">
            <p className="font-primary text-medium font-bold uppercase md:text-heading_2">
              Trending News
            </p>
            <Newscard
              imageUrl="images/rectangle-46@2x.png"
              header="Title of news"
              place="Lorem ipsum dolor sit amet consectetur. Ut non vitae arcu commodo sed in platea amet nec."
              date="21/04/2024"
            />
          </div>
        </div>

        <div className="mt-[40px] flex flex-shrink-0 flex-col justify-center">
          <p className="font-primary text-medium font-bold uppercase md:text-heading_2">
            Latest News
          </p>
          <div className="flex flex-col items-start justify-start gap-10 md:flex-row">
            <Newscard
              imageUrl="images/rectangle-46@2x.png"
              header="Title of news"
              place="Lorem ipsum dolor sit amet consectetur. Ut non vitae arcu commodo sed in platea amet nec."
              date="21/04/2024"
            />
            <Newscard
              imageUrl="images/rectangle-46@2x.png"
              header="Title of news"
              place="Lorem ipsum dolor sit amet consectetur. Ut non vitae arcu commodo sed in platea amet nec."
              date="21/04/2024"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
