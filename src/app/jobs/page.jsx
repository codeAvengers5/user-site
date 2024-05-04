import React from "react";
import Image from "next/image";
import Head from "next/head";
import jobbanner from "../../../public/images/jobbanner.png";
import { FaSearch } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
import { FaPhoneAlt, FaHeart, FaBullhorn, FaReceipt } from "react-icons/fa";
const Page = () => {
  let tableSpaceClass = "border-spacing-y-5";
  const sampleData = [
    {
      _id: 1,
      title: "Software Engineer",
      Date: "20/3/2024",
      type: "Full Time",
      status: "closed"
    },
    {
      _id: 2,
      title: "Data Scientist",
      Date: "20/3/2024",
      type: "Remote",
      status: "Active"
    },
    {
      _id: 3,
      title: "Product Manager",
      Date: "20/3/2024",
      type: "Full Time",
      status: "closed"
    },
    {
      _id: 5,
      title: "Product Manager",
      Date: "20/3/2024",
      type: "Full Time",
      status: "Active"
    },
    {
      _id: 6,
      title: "Product Manager",
      Date: "20/3/2024",
      type: "Remote",
      status: "closed"
    }
  ];

  const columns = [
    { title: "Title", key: "title" },
    { title: "Date", key: "Date" },
    { title: "Type", key: "type" },
    {
      title: "Status",
      key: "status",
      render: (column, row) => {
        if (row.status === "Active") {
          return (
            <button className="flex cursor-pointer flex-row items-start justify-start rounded-8xs bg-[#E71D36] px-[10px] py-[2px] [border:none] hover:bg-[#e71d35bb] md:px-[30px] md:py-[3px]">
              <div className="relative inline-block min-w-[50px] text-left font-inter text-xl font-semibold leading-[28px] text-white mq450:text-base mq450:leading-[22px]">
                Apply
              </div>
            </button>
          );
        } else {
          return <span className="text-blue-500">Closed</span>;
        }
      }
    }
  ];

  return (
    <div className="flex flex-col gap-24">
      <div className="relative h-[300px] w-full">
        <Image src={jobbanner} alt="banner" layout="fill" objectFit="cover" />
        <div className="absolute bottom-0 left-0 p-4">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="focus:border-blue-500 w-[500px] appearance-none rounded-lg bg-[#FFEEEA] px-4 py-2 leading-normal placeholder-[#e2404033] focus:outline-none"
            />
            <div className="pointer-events-none absolute bottom-0 right-0 mr-4 flex h-full items-center">
              <FaSearch className="text-gray-500" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center font-roboto text-[40px] font-bold">
        Jobs Category
      </div>
      <div className="flex flex-row justify-between px-40">
        <div className="flex h-[150px]  w-[180px] flex-shrink-0  flex-col items-center justify-center gap-[25px] bg-[#FFF2F2] shadow-md">
          <FaBullhorn size="1.6em" fill="#ED3405" />
          <div className="font-roboto text-[25px] font-[300px]">Marketing</div>
        </div>
        <div className="flex h-[150px] w-[180px]  flex-shrink-0  flex-col items-center justify-center gap-[25px] bg-[#FFF2F2] shadow-md">
          <FaReceipt size="1.6em" fill="#ED3405" />
          <div className="font-roboto text-[25px] font-[300px]">Finance</div>
        </div>
        <div className="flex h-[150px] w-[180px] flex-shrink-0  flex-col items-center justify-center gap-[25px] bg-[#FFF2F2] shadow-md">
          <FaHeart size="1.6em" fill="#ED3405" />
          <div className="font-roboto text-[25px] font-[300px]">Health</div>
        </div>
        <div className="flex h-[150px] w-[180px]  flex-shrink-0  flex-col items-center justify-center gap-[25px] bg-[#FFF2F2] shadow-md">
          <FaPhoneAlt size="1.6em" fill="#ED3405" />
          <div className="font-roboto text-[25px] font-[300px]">
            Call center
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <div className="container mx-auto px-4">
          <div className="p-2 font-roboto text-[40px] font-bold">
            Jobs Listing
          </div>
          <div className="flex flex-row justify-between">
            <div>
              <div className="overflow-x-auto">
                <table
                  className={`md:text-base text-black w-[900px] table-auto border-separate border-spacing-x-0 text-small font-regular ${tableSpaceClass}`}>
                  <colgroup>
                    {columns.map((_, index) => (
                      <col key={`col-${index}`} className="w-auto" />
                    ))}
                  </colgroup>
                  <thead className="bg-meke-500">
                    <tr>
                      {columns.map((column, index) => (
                        <th
                          key={`headCell-${index}`}
                          className="!z-0 bg-black px-2 py-[15px] text-left font-regular text-white">
                          {column.title}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {!sampleData?.length ? (
                      <tr>
                        <td
                          colSpan={columns.length}
                          className="text-bt_tertiary">
                          No jobs found
                        </td>
                      </tr>
                    ) : (
                      sampleData?.map((row, index) => (
                        <tr
                          key={`row-${index}`}
                          className="bg-[#FFF2F2] hover:opacity-[70%]">
                          {columns.map((column, index2) => {
                            const value = column.render
                              ? column.render(column, row)
                              : row[column.key];

                            return (
                              <td
                                key={`cell-${index2}`}
                                className={`px-2 py-[15px]`}>
                                {value}
                              </td>
                            );
                          })}
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-2">
                <div className="text-[20px] font-medium">Recent Jobs</div>
                <div className="m-4 flex min-h-[230px] w-[250px]  flex-shrink-0 flex-col items-center justify-center gap-[15px] bg-[#FFF2F2] p-4 shadow-md">
                  <div className="flex flex-col items-center justify-center">
                    <FaHeart size="1.6em" fill="#ED3405" />
                    <div className="font-roboto text-[25px] font-[300px]">
                      Health
                    </div>
                  </div>
                  <div className="p-2">
                    To create a table using API data in a React component,
                    you'll typically fetch the data from the API and then map
                    over the data to generate table rows dynamically.{" "}
                  </div>
                  <button className="flex cursor-pointer flex-row items-start justify-start rounded-8xs bg-[#E71D36] px-[10px] py-[2px] [border:none] hover:bg-[#e71d35bb] md:py-[3px]">
                    <div className="relative inline-block min-w-[50px] text-left font-inter text-xl font-semibold leading-[28px] text-white mq450:text-base mq450:leading-[22px]">
                      Apply Now
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
