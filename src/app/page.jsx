import React from "react";
import Card from "../components/card";
import Card1 from "../components/card1";
import NumberEldersComponent from "../components/noDisplay";
export default function Home() {
  return (
    <div>
      <div className="flex">
        <div className="mb-[16px] ml-[220px] mt-[218px] flex h-[457px] w-[497px] flex-shrink-0 flex-col pr-[10px]">
          <h2
            className="mb-[15px] ml-[40px]"
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
          <h4 className="text-24 mb-3 text-center font-roboto font-semibold leading-7 text-black">
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
        <Card
          height="592px"
          width="700px"
          marginLeft="170px"
          marginRight="128px"
          marginTop="218px"
          marginBottom="10px"
          imageUrl="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg"
        />
      </div>
      <div className="flex flex-row pl-[160px] pt-8">
        <NumberEldersComponent number="1206" text="Elders" />
        <NumberEldersComponent number="1206" text="Elders" />
        <NumberEldersComponent number="1206" text="Elders" />
        <NumberEldersComponent number="1206" text="Elders" />
        <NumberEldersComponent number="1206" text="Elders" />
        <NumberEldersComponent number="1206" text="Elders" />
      </div>
      <div
        className="ml-[700px] mt-[30px] flex flex-shrink-0 items-center justify-center font-roboto text-4xl font-medium text-black"
        style={{ width: "404px", height: "56px" }}>
        Our Team Members
      </div>
      <div className="flex flex-row">
        <Card1
          width="364px"
          height="548px"
          marginLeft="170px"
          marginRight="0px"
          marginTop="85px"
          marginBottom="10px"
          imageUrl="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg"
          header="Dr. Biniyam  Belete"
          place="Founder and CEO"
        />
        <Card1
          width="364px"
          height="548px"
          marginLeft="200px"
          marginRight="1px"
          marginTop="85px"
          marginBottom="10px"
          imageUrl="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg"
          header="Elineni Gebreyes"
          place="wife"
        />
        <Card1
          width="364px"
          height="548px"
          marginLeft="200px"
          marginRight="1px"
          marginTop="85px"
          marginBottom="10px"
          imageUrl="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg"
          header="Ayfokr"
          place="Human Resource"
        />
      </div>
      <div
        className="ml-[100px] mt-[182px] flex  flex-col flex-shrink-0 items-center justify-center text-center text-black"
        style={{ width: "491px", height: "56px" }}>
        <p className="font-roboto ml-[600px] text-4xl font-medium">Our Beloved Sponsors</p>
        <div className="flex mt-[80px] flex-row">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/6/6c/CBE_SA.png"
            alt="Logo"
            style={{ width: "300px", height: "214px", flexShrink: 0 }}
          />
          <img
            src="https://debofund.com/assets/front/img/logo.png"
            alt="Logo"
            style={{ width: "300px", height: "214px", flexShrink: 0 }}
          />
          <img
            src="https://www.techafricanews.com/wp-content/uploads/2021/05/Ethiotelcom_Logo.jpg"
            alt="Logo"
            style={{ width: "300px", height: "214px", flexShrink: 0 }}
          />
          <img
            src="https://logos-world.net/wp-content/uploads/2023/01/Ethiopian-Airlines-Logo.png"
            alt="Logo"
            style={{ width: "300px", height: "214px", flexShrink: 0 }}
          />
        </div>
      </div>
    </div>
  );
}
