"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import group from "../../../../../public/images/Group.png";
import logo from "../../../../../public/images/logo.png";
import { getJobPostById } from "@/services/job.service";
import { useEffect, useState } from "react";
import { useParams } from "../../../../../node_modules/next/navigation";
const page = () => {
  const [job, setJob] = useState({
    title: "",
    description: "",
    requirement: "",
    responsibility: "",
    salary: ""
  });
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchJobPost = async () => {
        try {
          const jobPost = await getJobPostById(id);
          setJob({
            title: jobPost.data.title,
            description: jobPost.data.description,
            requirement: jobPost.data.requirement,
            responsibility: jobPost.data.responsibility,
            salary: jobPost.data.salary
          });
        } catch (error) {
          console.error("Error fetching job post:", error);
        }
      };
      fetchJobPost();
    }
  }, [id]);

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
          <Image src={logo} alt="fill" width={50} height={50} />
          <div className="mx-[10px] w-[130px] border-[2px] border-black"></div>
          <Image src={logo} alt="fill" width={50} height={50} />
        </div>
      </div>
      <div className="flex w-full flex-col gap-6 p-3 md:w-[800px] md:pl-20 md:pt-10">
        <div className="text-xl font-bold">{job.title}</div>
        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold">Description</p>
          <p>{job.description}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold"> Requirment</p>
          <p>{job.requirement}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold"> Responsiblity</p>
          <p>{job.responsibility}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold"> Salary</p>
          <p>{job.salary}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        <div className="flex h-[51px] flex-col items-start justify-start px-20 py-20">
          <Link href="/jobs">
            <button className="flex cursor-pointer flex-row items-start justify-start rounded-8xs bg-[#E71D36] px-[20px] py-[4px] [border:none] hover:bg-[#e71d35bb]  md:py-[6.5px]">
              <div className="relative inline-block w-[70px] text-left font-inter text-xl font-semibold leading-[28px] text-white mq450:text-base mq450:leading-[22px]">
                back
              </div>
            </button>
          </Link>
        </div>
        <div className="flex h-[51px] flex-col items-end justify-start px-20 py-20">
          <Link href={`/jobs/jobApply/${id}`}>
            <button className="flex cursor-pointer flex-row items-start justify-start rounded-8xs bg-[#E71D36] px-[20px] py-[4px] [border:none] hover:bg-[#e71d35bb]  md:py-[6.5px]">
              <div className="relative inline-block w-[70px] text-left font-inter text-xl font-semibold leading-[28px] text-white mq450:text-base mq450:leading-[22px]">
                next
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default page;
