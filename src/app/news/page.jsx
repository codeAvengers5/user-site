"use client";
import React, { useEffect } from "react";
import { search } from "../../../public/icons/index";
import Image from "../../../node_modules/next/image";
import Slider from "@/components/slider";
import images from "@/components/images";
import Newscard from "@/components/newsCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "@/slices/news";

function page() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.news);
  console.log(data);
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);
  return (
    <div className="flex w-[100vw] max-w-full flex-row items-start justify-start tracking-[normal]">
      <section className="relative flex max-w-full flex-1 flex-col items-start justify-start overflow-hidden bg-white text-left font-roboto text-xl text-white">
        <div className="m-[20px] box-border flex w-full flex-row items-center justify-between">
          <h1 className="text-6xl font-bold leading-[50px] text-black mq800:text-6xl mq450:text-3xl">
            News
          </h1>
          <div className="relative m-[30px] flex items-center">
            <input
              className="w-full rounded-md border border-red-200 bg-white px-4 py-2 pr-8 leading-tight text-black placeholder-red-200 placeholder-opacity-20 focus:outline-none md:w-96"
              placeholder="search....."
            />
            <div className="absolute inset-y-0 right-0 flex items-center pl-3">
              <button>
                <Image
                  src={search}
                  alt="search icon"
                  height={29}
                  width="auto"
                  color="red"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex">
          <Slider images={images} width="1200px" height="500px" />

          <div className="flex flex-shrink-0 flex-col items-center justify-center">
            <p className="text-4xl font-bold text-black mq800:text-4xl mq450:text-3xl">
              Trending News
            </p>
            <Newscard
              height="450"
              width="400"
              marginLeft="2px"
              marginRight="2px"
              marginTop="2px"
              marginBottom="2px"
              imageUrl="images/rectangle-46@2x.png"
              header="Title of news"
              place="Lorem ipsum dolor sit amet consectetur. Ut non vitae arcu commodo sed in platea amet nec."
              date="21/04/2024"
            />
          </div>
        </div>
        <div className="m-10 flex flex-shrink-0 flex-col justify-center">
          <p className="text-4xl font-bold text-black">Recent News</p>
          <div className="m-10 flex flex-shrink-0 flex-row items-center justify-center gap-10">
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
