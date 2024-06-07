"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import group from "../../../../../public/images/Group.png";
import logo from "../../../../../public/images/logo.png";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { applyToJob } from "@/slices/jobSlice";
import { useParams } from "../../../../../node_modules/next/navigation";
import { useRouter } from "../../../../../node_modules/next/navigation";

const page = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth)
  const [errorMessage, setErrorMessage] = useState("")
  const [formData, setFormData] = useState({
    full_name:"",
    phone_no: "",
    cv: null
  });

  const { id } = useParams();
  const router = useRouter();

  const { success, error } = useSelector(state => state.jobApply);
  const handleInputChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [selectedFileName, setSelectedFileName] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file.type === 'application/pdf') {
      setFormData({
        ...formData,
        cv: file
      });
      setSelectedFileName(file.name);
    } else {
      setErrorMessage("Please upload a PDF file only.");

    }
    setSelectedFileName(file.name);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if(!formData.full_name){
      setErrorMessage("Feild can not be empty");
      return;
    }
    const phoneRegex = /^(09|\\+251)\d{8}$/;
    if (!phoneRegex.test(formData.phone_no)) {
      setErrorMessage("Please enter a valid phone number");
      return;
    }

    if (!formData.cv) {
      setErrorMessage("Please upload a CV.");
      return;
    }
    if (!user) {
      setErrorMessage("You need to be logged in to apply for this job.");
      return;
    }


    dispatch(applyToJob({ jobId: id, formData }));

  };
  useEffect(() => {
    if (error) {
      setErrorMessage(error);
      return;
    }

    if (success) {
      router.push('/jobs/jobSuccess');
    }
  }, [error, success, router]);

  return (
    <div className="mx-[40px] md:mx-[80px]">
      <div className="flex flex-col gap-4 pt-10">
        <div className="flex flex-row items-center justify-center gap-20">
          <div className="hidden flex-row items-center gap-1 font-secondary sm:flex">
            <p className="text-medium font-bold">01</p>
            <p className="">Job Description</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <p className="text-medium font-bold">02</p>
            <p>Personal information</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <Image
            src={group}
            alt="fill"
            width={50}
            height={50}
            className="hidden sm:block"
          />
          <div className="mx-[10px] hidden w-[130px] border-[2px] border-black sm:block"></div>
          <Image src={group} alt="fill" width={50} height={50} />
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
      <div className="mt-[20px] flex items-center justify-center ">
        <div className="w-[550px] rounded bg-[#fcf9f9] p-4 shadow-lg md:p-10">
          <form onSubmit={handleSubmit}>
            <div>
              {errorMessage && (
                <div
                  className={`text-[#E71D36] font-bold mb-2 mt-2
                    }`}
                >
                  {errorMessage}
                </div>
              )}
               <div className="mb-4">
                <label
                  htmlFor="name"
                  className="mb-1 block font-secondary font-semibold">
                  Full Name:
                </label>
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleInputChange}
                  className="focus:border-blue-500 w-full rounded border border-[#DC8E7B] px-3 py-2 font-secondary placeholder-[#e2404033] focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="mb-1 block font-secondary font-semibold">
                  Phone Number:
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone_no"
                  onChange={handleInputChange}
                  value={formData.phone_no}
                  className="focus:border-blue-500 w-full rounded border border-[#DC8E7B] px-3 py-2 font-secondary placeholder-[#e2404033] focus:outline-none"
                  required
                />
              </div>

              <div className="flex w-full items-center justify-center ">
                <label
                  htmlFor="dropzone-file"
                  className="bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 flex h-40 w-full cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border-2 border-[#DC8E7B]">
                  <div className="flex flex-row items-center justify-center gap-3 border-2 border-dashed border-[#DC8E7B] px-5 pt-1">
                    <svg
                      className="text-gray-500 dark:text-gray-400 mb-4 h-8 w-8"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="text-gray-500 dark:text-gray-400 mb-2 font-secondary text-small font-semibold">
                      Upload Document
                    </p>
                  </div>
                  <div className="text-center text-small">
                    Click or drag to this area to upload from local drive
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
              {selectedFileName && (
                <p>{selectedFileName}</p>
              )}
              <button className="mt-4 flex w-full cursor-pointer flex-row items-start justify-start rounded-8xs bg-[#E71D36] px-[20px] py-[4px] [border:none]  hover:bg-[#e71d35bb] md:py-[6.5px]">
                <div className="w-full text-center font-secondary text-xl font-semibold leading-[28px] text-white mq450:text-base mq450:leading-[22px]">
                  Submit
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-[20px] flex h-[51px] flex-col items-start justify-start">
        <Link href="/jobs">
          <button className="flex cursor-pointer flex-row items-start justify-start rounded-8xs bg-white px-[20px] py-[4px] shadow-lg [border:none] hover:border-2  md:py-[6.5px]">
            <div className="inline-block w-[70px] text-center font-secondary text-base font-semibold text-red-200">
              Back
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
