"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import {
  FaSearch,
  FaHeart,
  FaPhoneAlt,
  FaBullhorn,
  FaReceipt
} from "react-icons/fa";
import { getAllJobPosts } from "@/services/job.service";
import jobbanner from "../../../public/images/jobbanner.png";

const Page = () => {
  const [jobPosts, setJobPosts] = useState([]);
  const [Rjob, setRjob] = useState({
    title: "",
    id: "",
    description: "",
    requirement: "",
    responsibility: "",
    salary: ""
  });
  useEffect(() => {
    const getRecentJobPost = async () => {
      fetch("http://localhost:8000/joblist")
        .then(response => response.json())
        .then(data => {
          const sortedJobPosts = data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          const mostRecentJob = sortedJobPosts[0];
          console.log("Recent", mostRecentJob);
          setRjob({
            id: mostRecentJob.id,
            title: mostRecentJob.title,
            description: mostRecentJob.description,
            requirement: mostRecentJob.requirement,
            responsibility: mostRecentJob.responsibility,
            salary: mostRecentJob.salary
          });
        })
        .catch(error => {
          console.error("Error fetching job posts:", error);
        });
    };
    getRecentJobPost();
  }, []);

  useEffect(() => {
    async function fetchJobPosts() {
      try {
        const data = await getAllJobPosts();
        setJobPosts(data);
      } catch (error) {
        console.error("Error fetching job posts:", error);
      }
    }

    fetchJobPosts();
  }, []);

  const columns = [
    { title: "Title", key: "title" },
    { title: "Description", key: "description" },
    { title: "Date", key: "closingDate" },
    {
      title: "Status",
      key: "status",
      render: (column, row) => {
        if (row.status !== "closed") {
          return (
            <Link href={`/jobs/jobDescription/${row._id}`}>
              <button className="flex cursor-pointer flex-row items-start justify-start rounded-8xs bg-[#E71D36] px-[10px] py-[2px] [border:none] hover:bg-[#e71d35bb] md:px-[30px] md:py-[3px]">
                <div className="relative inline-block min-w-[50px] text-left font-inter text-xl font-semibold leading-[28px] text-white mq450:text-base mq450:leading-[22px]">
                  Apply
                </div>
              </button>
            </Link>
          );
        } else {
          return <span className="text-blue-500">Closed</span>;
        }
      }
    }
  ];

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="relative h-[300px] w-full">
        <Image src={jobbanner} alt="banner" layout="fill" objectFit="cover" />
        <div className="absolute bottom-0 left-0 p-4">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="focus:border-blue-500 max-w-[400px] appearance-none rounded-lg bg-[#FFEEEA] px-4 py-2 leading-normal placeholder-[#e2404081] shadow-lg focus:outline-none md:w-[500px]"
            />
            <div className="pointer-events-none absolute bottom-0 right-0 mr-4 flex h-full items-center">
              <FaSearch className="text-gray-500" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center font-primary text-heading_2 font-bold md:text-heading_1">
        Jobs Category
      </div>
      <div className="flex flex-wrap justify-evenly gap-[20px] md:flex-row">
        <div className="flex h-[150px]  w-[180px] flex-shrink-0  flex-col items-center justify-center gap-[25px] bg-[#FFF2F2] shadow-md">
          <FaBullhorn size="1.6em" fill="#ED3405" />
          <div className="font-secondary text-[25px] font-[300px]">
            Marketing
          </div>
        </div>
        <div className="flex h-[150px] w-[180px]  flex-shrink-0  flex-col items-center justify-center gap-[25px] bg-[#FFF2F2] shadow-md">
          <FaReceipt size="1.6em" fill="#ED3405" />
          <div className="font-secondary  text-[25px] font-[300px]">
            Finance
          </div>
        </div>
        <div className="flex h-[150px] w-[180px] flex-shrink-0  flex-col items-center justify-center gap-[25px] bg-[#FFF2F2] shadow-md">
          <FaHeart size="1.6em" fill="#ED3405" />
          <div className="font-secondary  text-[25px] font-[300px]">Health</div>
        </div>
        <div className="flex h-[150px] w-[180px]  flex-shrink-0  flex-col items-center justify-center gap-[25px] bg-[#FFF2F2] shadow-md">
          <FaPhoneAlt size="1.6em" fill="#ED3405" />
          <div className="font-secondary  text-[25px] font-[300px]">
            Call center
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <div className="container mx-auto px-4">
          <div className="p-2 font-primary text-heading_2 font-bold md:text-heading_1">
            Jobs Listing
          </div>
          <div className="flex flex-col justify-between xl:flex-row">
            <div>
              <div className="overflow-x-auto">
                <table className="w-[900px] max-w-full table-auto border-separate border-spacing-x-0 font-secondary text-small  font-regular text-black md:text-base">
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
                          className="!z-0 bg-black px-2 py-[15px] text-left font-secondary font-regular text-white">
                          {column.title}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {!jobPosts.length ? (
                      <tr>
                        <td
                          colSpan={columns.length}
                          className="font-secondary text-bt_tertiary">
                          No jobs found
                        </td>
                      </tr>
                    ) : (
                      jobPosts.map((row, index) => (
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
                <div className="font-secondary text-[20px] font-medium">
                  Recent Jobs
                </div>
                <div className="m-4 flex min-h-[230px] w-[250px]  flex-shrink-0 flex-col items-center justify-center gap-[15px] bg-[#FFF2F2] p-4 shadow-md">
                  <div className="flex flex-col items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="31"
                      height="27"
                      viewBox="0 0 31 27"
                      fill="none">
                      <path
                        d="M5.58301 13.75H5.01172L15.5 24.2382L24.1133 15.625H26.7646L15.5 26.8896L2.8291 14.2334C2.4873 13.8916 2.18457 13.5254 1.9209 13.1347C1.65723 12.7441 1.42773 12.3242 1.23242 11.875H4.79199L8.9375 7.7441L15.5 14.292L20.1875 9.6191L22.458 11.875H27.6582C27.9707 11.3769 28.21 10.8496 28.376 10.2929C28.542 9.73629 28.625 9.165 28.625 8.57907C28.625 7.72946 28.4688 6.93844 28.1562 6.20602C27.8438 5.4736 27.4092 4.83883 26.8525 4.30172C26.2959 3.76461 25.6514 3.33981 24.9189 3.02731C24.1865 2.71481 23.3906 2.55856 22.5312 2.55856C21.7109 2.55856 20.9834 2.68551 20.3486 2.93942C19.7139 3.19332 19.1279 3.53512 18.5908 3.96481C18.0537 4.3945 17.541 4.86813 17.0527 5.38571C16.5645 5.90328 16.0469 6.44528 15.5 7.01168C14.9727 6.48434 14.46 5.95211 13.9619 5.415C13.4639 4.87789 12.9463 4.3945 12.4092 3.96481C11.8721 3.53512 11.2812 3.18356 10.6367 2.91012C9.99219 2.63668 9.26953 2.49996 8.46875 2.49996C7.62891 2.49996 6.84277 2.65621 6.11035 2.96871C5.37793 3.28121 4.7334 3.71579 4.17676 4.27243C3.62012 4.82907 3.18555 5.4736 2.87305 6.20602C2.56055 6.93844 2.39941 7.72946 2.38965 8.57907C2.38965 9.03805 2.44336 9.51168 2.55078 9.99996H0.631836C0.583008 9.76559 0.553711 9.53121 0.543945 9.29684C0.53418 9.06246 0.524414 8.82809 0.514648 8.59371C0.514648 7.4902 0.719727 6.45504 1.12988 5.48825C1.54004 4.52145 2.10645 3.67672 2.8291 2.95407C3.55176 2.23141 4.39648 1.665 5.36328 1.25485C6.33008 0.844692 7.36523 0.634731 8.46875 0.624965C9.2793 0.624965 10.002 0.717739 10.6367 0.903285C11.2715 1.08883 11.8574 1.34274 12.3945 1.665C12.9316 1.98727 13.4492 2.38278 13.9473 2.85153C14.4453 3.32028 14.9629 3.82321 15.5 4.36032C16.0371 3.81344 16.5498 3.31051 17.0381 2.85153C17.5264 2.39254 18.0439 2.00192 18.5908 1.67965C19.1377 1.35739 19.7285 1.0986 20.3633 0.903285C20.998 0.707973 21.7207 0.615199 22.5312 0.624965C23.625 0.624965 24.6553 0.830043 25.6221 1.2402C26.5889 1.65036 27.4287 2.21676 28.1416 2.93942C28.8545 3.66207 29.4209 4.50192 29.8408 5.45895C30.2607 6.41598 30.4707 7.44625 30.4707 8.54977C30.4707 9.49703 30.3047 10.415 29.9727 11.3037C29.6406 12.1923 29.167 13.0078 28.5518 13.75H21.667L20.1875 12.2558L15.5 16.958L8.9375 10.3808L5.58301 13.75Z"
                        fill="#ED3405"
                      />
                    </svg>
                    <div className="font-secondary text-[25px] font-[300px]">
                      {Rjob.title}
                    </div>
                  </div>
                  <div className="p-2 font-secondary">{Rjob.description}</div>
                  <Link href={`/jobs/jobDescription/${Rjob.id}`}>
                    <button className="flex cursor-pointer flex-row items-start justify-start rounded-8xs bg-[#E71D36] px-[10px] py-[3px] shadow-lg [border:none] hover:border-2  md:py-[6.5px]">
                      <div className="relative inline-block text-left  font-secondary text-xl font-semibold leading-[28px] text-white mq450:text-base mq450:leading-[22px]">
                        Apply Now
                      </div>
                    </button>
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

export default Page;
