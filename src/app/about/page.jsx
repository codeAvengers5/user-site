"use client";
import React from "react";
import CustomSlider from "../../components/customSlider";
import Slider from "@/components/slider";
import images from "../../components/images";
import Card from "../../components/card/card";
import Card1 from "../../components/card/card1";
import NumberEldersComponent from "../../components/numberDisplay";
export default function AboutUs() {
  const normalStyle = {
    width: "1470px",
    height: "56px"
  };
  return (
    <div className="w-full max-w-[100vw]">
      {/*************************************************************  story Section ******************************************************************/}

      <div className="mx-[40px] mt-[40px] min-h-[600px] max-w-full p-[20px] md:mx-[80px]">
        <div className="align-center flex w-full flex-col-reverse items-center justify-center gap-[10px] md:flex-row lg:gap-[60px]">
          <div className=" mt-[40px] flex flex-shrink-0 flex-col justify-center p-[20px] md:h-[457px] md:max-w-[900px]">
            <h2 className="mb-2 flex w-full flex-col text-center font-primary text-heading_2 font-bold uppercase md:mx-2 md:mt-4 md:text-heading_1">
              About the Organization
            </h2>
            <h4 className="text-center font-secondary font-semibold leading-7 text-black md:mb-3 md:text-medium">
              7,500 People in 9 Cities.
            </h4>
            <p className="font-roboto text-base  leading-7 text-black">
              Ato Biniam Belete Founder Of Mekedonia. An organization focused on
              helping the lives of the people with an organization focused on
              helping the lives of people with a motto of It is enough to be a
              person to help someone. More than 8260 elderly, mentally disabled,
              visually disabled, and bedridden individuals have been supported
              in Mekedonia; these individuals, particularly those who are
              bedridden and unable to clean, eat, or move independently, need
              human support but have none. We are Expanding our community to
              help more, Providing medical, health check, Providing food, water
              & Shelter and Improving public awareness to help others. Founder
              Of Mekedonia.
            </p>
            <p className="font-roboto text-base  leading-7 text-black">
            We are proud to be an Ethiopian resident charity with our headquarters located in Addis Ababa, Ethiopia. In addition to Addis Ababa, 
            Mekedonia Homes has several branches located in other regions throughout Ethiopia, including Harar, Gore, Dire Dawa, Dessie, Adama, Gambella, Shashemane, Beke, and Adwa.
            We are proud of the work that we do, and we are committed to continuing to expand our services to reach even more individuals in need. 
            We invite you to join us in our mission to make a positive impact in our community. Whether you are interested in volunteering, making a donation, or simply learning more about our organization, we welcome you to reach out to us.
            </p>
          </div>
          <Card imageUrl="https://pbs.twimg.com/media/Dti_P0qW4AEY0Xa?format=jpg&name=4096x4096" />
        </div>
      </div>

      {/*************************************************************  elder Section ******************************************************************/}

      <div className="mx-[40px] mt-[40px] flex flex-col flex-wrap items-center justify-center gap-[5px] md:mx-[80px] md:flex-row  md:py-8">
        <NumberEldersComponent number="3100" text="Elders" />
        <NumberEldersComponent number="1450" text="Bed Riders" />
        <NumberEldersComponent number="1560" text="Mentally Disabled" />
        <NumberEldersComponent number="1190" text="Phisically Imperiment" />
        <NumberEldersComponent number="200" text="Visually Imperiment" />
        <NumberEldersComponent number="7500" text="Total" />
      </div>

      {/*************************************************************  members Section ******************************************************************/}

      <div className="mx-[40px] mt-[40px] min-h-[600px] max-w-full p-[20px] md:mx-[80px]">
        <div className="mt-[70px] flex w-full items-center justify-center font-primary text-heading_2 font-bold uppercase md:text-heading_1">
          Our Team Members
        </div>
        <div className="flex w-full flex-col flex-wrap items-center justify-center md:mb-[10px] md:mt-[85px] md:flex-row md:gap-[80px]">
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
      </div>

      {/*************************************************************  sponsors Section ******************************************************************/}

      <div
        className="mb-7 ml-[50px] mr-[50px] mt-[50px] flex flex-shrink-0 flex-col items-center justify-center text-center text-black md:ml-[200px] md:mr-[150px] md:mt-[100px]"
        style={{ normalStyle }}>
        <p className="ml-2 font-primary text-heading_2 font-bold uppercase md:text-heading_1">
          Our Beloved Sponsors
        </p>

        <div className=" mt-[20px] md:mt-[80px]">
          <Slider images={images} preview={4} />
        </div>
      </div>
    </div>
  );
}
