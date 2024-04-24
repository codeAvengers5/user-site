"use client";
import React from "react";
import CustomSlider from "../../components/customSlider";
import images from "../../components/images";
import Card from "../../components/card";
import Card1 from "../../components/card1";
import NumberEldersComponent from "../../components/numberDisplay";
export default function AboutUs() {
  const normalStyle = {
    width: "1470px",
    height: "56px"
  };
  return (
    <div>
      <div className="flex w-full max-w-full flex-col-reverse md:flex-row">
        <div className="ml-4 mr-2 mt-2 flex flex-shrink-0 flex-col md:mb-[16px] md:ml-[170px] md:mt-[218px]  md:h-[457px] md:w-[550px] md:pr-[7px]">
          <h2
            className="mb-2 ml-[90px] flex  flex-col md:mx-2 md:ml-[40px] md:mt-4"
            style={{
              color: "#000",
              fontFamily: "Inter",
              fontSize: "32px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal"
            }}>
            About the Organization
          </h2>
          <h4 className="md:text-24 ml-0 text-center font-roboto font-semibold leading-7 text-black md:mb-3">
            7,500 People in 9 Cities.
          </h4>
          <p className="text-24 font-roboto font-normal leading-7 text-black">
            Ato Biniam Belete Founder Of Mekedonia. An organization focused on
            helping the lives of the people with an organization focused on
            helping the lives of people with a motto of It is enough to be a
            person to help someone. More than 8260 elderly, mentally disabled,
            visually disabled, and bedridden individuals have been supported in
            Mekedonia; these individuals, particularly those who are bedridden
            and unable to clean, eat, or move independently, need human support
            but have none. We are Expanding our community to help more,
            Providing medical, health check, Providing food, water & Shelter and
            Improving public awareness to help others. Founder Of Mekedonia.
          </p>
        </div>
        <Card imageUrl="https://pbs.twimg.com/media/Dti_P0qW4AEY0Xa?format=jpg&name=4096x4096" />
      </div>
      <div className="ml-[80px] flex flex-col md:ml-[15px] md:flex-row md:pl-[160px] md:pt-8">
        <NumberEldersComponent number="3100" text="Elders" />
        <NumberEldersComponent number="1450" text="Bed Riders" />
        <NumberEldersComponent number="1560" text="Mentally Disabled" />
        <NumberEldersComponent number="1190" text="Phisically Imperiment" />
        <NumberEldersComponent number="200" text="Visually Imperiment" />
        <NumberEldersComponent number="7500" text="Total" />
      </div>
      <div className="mt-[70px] flex w-full items-center justify-center font-roboto text-4xl font-medium text-black ">
        Our Team Members
      </div>
      <div className=" ml-0 flex flex-col md:mb-[10px] md:ml-[170px] md:mr-[180px] md:mt-[85px] md:flex-row md:gap-[80px]">
        <Card1
          imageUrl="https://media.licdn.com/dms/image/C561BAQEMSkmFWVHlkg/company-background_10000/0/1584562871848/mekedonia_cover?e=2147483647&v=beta&t=5LIygS9oGggxFqLubq8vfgGv658xpXR-2j0agTIbY3E"
          header="Dr. Biniyam  Belete"
          place="Founder and CEO"
        />
        <Card1
          imageUrl="https://www.ena.et/o/adaptive-media/image/3100809/Preview-1000x0/bine.jpg"
          header="Elineni Gebreyes"
          place="Manager"
        />
        <Card1
          imageUrl="https://mekedoniahomes.org/wp-content/uploads/2023/02/photo_2021-11-28_20-49-57.jpg"
          header="Ayfokr"
          place="Human Resource"
        />
      </div>

      <div
        className="mb-7 ml-[50px] mr-[50px] mt-[50px] flex flex-shrink-0 flex-col items-center justify-center text-center text-black md:ml-[200px] md:mr-[150px] md:mt-[100px]"
        style={{ normalStyle }}>
        <p className="ml-2 font-roboto text-3xl font-medium md:text-4xl">
          Our Beloved Sponsors
        </p>

        <div className=" mt-10 md:mt-[80px]">
          <CustomSlider images={images} />
        </div>
      </div>
    </div>
  );
}
