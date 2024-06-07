"use client";
import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import Slider from "@/components/slider";
import images from "@/components/images1";
import Newscard from "@/components/card/newsCard";
import { getAllNews, searchNews } from "@/slices/newsSlices";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    async function fetchNews() {
      try {
        const news = await getAllNews();
        setData(news);
      } catch (error) {
        console.log("Error fetching news:", error);
      }
    }
    async function searchingNews() {
      try {
        if (searchItem) {
          setIsSearching(true);
          const results = await searchNews(searchItem);
          setSearchResults(results.news);
        } else {
          setIsSearching(false);
          setSearchResults([]);
        }
      } catch (error) {
        console.error("Error searching news:", error);
        setIsSearching(false);
      }
    }

    searchingNews();
    fetchNews();
  }, [searchItem]);
  const handleInputChange = e => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
  };
  const handleClick = async id => {
    router.push(`/news/${id}`);
  };
  function formatDate(dateString) {
    const date = new Date(dateString);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }
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
              value={searchItem}
              onChange={handleInputChange}
            />
            <div className="absolute inset-y-0 right-0 flex items-center p-3 text-black">
              <IoMdSearch size={23} />
            </div>
          </div>
        </div>
        {isSearching && Array.isArray(searchResults) && searchItem ? (
          searchResults.length > 0 ? (
            <div className="m-10 flex flex-shrink-0 flex-row items-center justify-center gap-10">
              {searchResults.map(news => (
                <Newscard
                  key={news._id}
                  imageUrl={news.images[0]?.url}
                  header={news.title}
                  place={news.description.slice(0, 100) + "..."}
                  date={new Date(news.createdAt).toLocaleString()}
                  handleClick={() => handleClick(news._id)}
                />
              ))}
            </div>
          ) : (
            <div className="flex min-h-[400px] items-center justify-center">
              <p className="text-red-500 font-primary text-3xl font-bold">
                No News found
              </p>
            </div>
          )
        ) : (
          <>
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
              <div className="flex flex-col flex-wrap items-start justify-start gap-10 md:flex-row">
                {data.map(news => (
                  <Newscard
                    key={news._id}
                    imageUrl={news.images[0].url}
                    header={news.title}
                    place={news.description.slice(0, 100) + "..."}
                    date={formatDate(news.createdAt)}
                    handleClick={() => handleClick(news._id)}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
}

export default page;
