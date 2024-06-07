"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import group from "../../../../../public/images/Group.png";
import logo from "../../../../../public/images/logo.png";
import { getJobPostById } from "@/services/job.service";
import { useEffect, useState } from "react";
import { useParams } from "../../../../../node_modules/next/navigation";
import { useSelector } from "react-redux";
const page = () => {
  const [job, setJob] = useState({
    title: "",
    description: "",
    requirement: "",
    responsibility: "",
    salary: ""
  });
  const { id } = useParams();
  const { user } = useSelector(state => state.auth)
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
    <div className="mx-[40px] md:mx-[80px]">
      <div className="flex flex-col gap-4 pt-10">
        <div className="flex flex-row items-center justify-center gap-20">
          <div className="flex flex-row items-center gap-1 font-secondary">
            <p className="text-medium font-bold">01</p>
            <p className="">Job Description</p>
          </div>
          <div className="hidden flex-row items-center gap-1 sm:flex">
            <p className="text-medium font-bold">02</p>
            <p>Personal information</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <Image src={group} alt="fill" width={50} height={50} />
          <div className="mx-[10px] hidden w-[130px] border-[2px] border-black sm:block"></div>
          <Image
            src={logo}
            alt="fill"
            width={50}
            height={50}
            className="hidden sm:block"
          />
          <div className="mx-[10px] hidden w-[130px] border-[2px] border-black sm:block"></div>
          <Image
            src={logo}
            alt="fill"
            width={50}
            height={50}
            className="hidden sm:block"
          />
        </div>
      </div>
      <div className="flex flex-col gap-6 p-3 md:max-w-[800px] md:pt-10">
        <div className="font-primary text-xl font-bold">{job.title}</div>
        <div className="flex flex-col gap-2 ">
          <p className="font-secondary text-xl font-bold">Description</p>
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
      <div className="flex w-full flex-row justify-evenly">
        <Link href="/jobs">
          <button className="flex cursor-pointer flex-row items-start justify-start rounded-8xs bg-[#E71D36] px-[20px] py-[4px] [border:none] hover:bg-[#e71d35bb]  md:py-[6.5px]">
            <div className="relative inline-block text-center font-secondary text-base font-semibold text-white  md:w-[70px]  mq450:leading-[22px]">
              Back
            </div>
          </button>
        </Link>
        <Link href={user?`/jobs/jobApply/${id}`: `/login`}>
          <button className="flex cursor-pointer flex-row items-start justify-start rounded-8xs bg-[#E71D36] px-[20px] py-[4px] [border:none] hover:bg-[#e71d35bb]  md:py-[6.5px]">
            <div className="relative inline-block text-center font-secondary text-base  font-semibold text-white  md:w-[70px]  mq450:leading-[22px]">
              Next
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};
export default page;
