"use client";
import images from "@/components/images";
import Slider from "@/components/slider";
import React, { useEffect, useState } from "react";
import Newscard from "@/components/card/newsCard";
import { useParams, useRouter } from "next/navigation";
import { getAllNews, getNewsById } from "@/slices/newsSlices";
// import { useRouter } from "../../../../node_modules/next/router";

function page() {
  const { id } = useParams();
  const [news, setNews] = useState("");
  const router = useRouter();
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchNewsData() {
      try {
        const news = await getAllNews();
        setData(news);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }
    async function fetchSingleNews() {
      try {
        const data = await getNewsById(id);
        setNews(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchSingleNews();
    fetchNewsData();
  }, [id]);
  const handleClick = async id => {
    router.push(`/news/${id}`);
  };
  return (
    <div className="m-[40px] mt-[40px] min-h-[700px] max-w-full p-[20px] md:mx-[80px]">
      <section className="flex flex-col items-start justify-start">
        <div className="align-center flex w-full flex-col-reverse items-center justify-center gap-[10px] lg:flex-row lg:gap-[50px]">
          <div className="box-border flex  max-w-full flex-col items-center justify-start mq800:min-w-full">
            <div className="relative flex flex-col items-center justify-center md:max-w-[500px]">
              <p className="mb-[5px] text-2xl font-bold text-black">
                {news.title}
              </p>
              <p className="w-full text-[18px] text-black">
                {news.description}
              </p>
            </div>
          </div>
          <div className="min-h-[200px] md:h-[700px] md:w-[700px]">
          {news.images && news.images.length > 0 ? (
              <Slider images={news.images} width="600" />
            ) : (
              <p>No images available</p>
            )}          </div>
        </div>
        <div className="mt-[40px] flex flex-shrink-0 flex-col justify-center">
          <p className="text-2xl font-bold text-black">Recent News</p>
          <div className="flex flex-col items-start justify-start gap-10 md:flex-row">
            {data.map(news => (
              <Newscard
                key={news._id}
                imageUrl={news.images[0].url} // Display the first image URL
                header={news.title}
                place={news.description.slice(0, 100) + "..."}
                date={new Date(news.createdAt).toLocaleString()}
                handleClick={() => handleClick(news._id)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
