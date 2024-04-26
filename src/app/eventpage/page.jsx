import React from "react";
import Property1Default from "./property1-default";

const Events = () => {
  return (
    <div className="w-full relative bg-white h-[104.75rem] overflow-hidden text-left text-[1.5rem] text-black font-inter">
      <img
        className="absolute left-[3.5rem] top-[3.375rem] h-[6.813rem] w-[11.563rem] rounded-[50%] object-cover"
        alt=""
        src="images/ellipse-10@2x.png"
      />
      <div className="absolute top-[5.188rem] left-[43.875rem] w-[44.125rem] h-[3.25rem] flex flex-row flex-wrap items-center justify-between">
        <Property1Default
          home="Home"
          property1DefaultWidth="3.375rem"
          property1DefaultHeight="1.438rem"
          property1DefaultPosition="relative"
          homeFontSize="1.25rem"
        />
        <Property1Default
          home="About"
          property1DefaultWidth="3.375rem"
          property1DefaultHeight="1.438rem"
          property1DefaultPosition="relative"
          homeFontSize="1.25rem"
        />
        <Property1Default
          home="News"
          property1DefaultWidth="3.375rem"
          property1DefaultHeight="1.438rem"
          property1DefaultPosition="relative"
          homeFontSize="1.25rem"
        />
        <Property1Default
          home="Events"
          property1DefaultWidth="3.75rem"
          property1DefaultHeight="1.438rem"
          property1DefaultPosition="relative"
          homeFontSize="1.25rem"
        />
        <Property1Default
          home="Jobs"
          property1DefaultWidth="2.813rem"
          property1DefaultHeight="1.438rem"
          property1DefaultPosition="relative"
          homeFontSize="1.25rem"
        />
        <Property1Default
          home="ContactUs"
          property1DefaultWidth="5.875rem"
          property1DefaultHeight="1.438rem"
          property1DefaultPosition="relative"
          homeFontSize="1.25rem"
        />
      </div>
      <img
        className="absolute top-[9.688rem] left-[2rem] w-[86rem] h-[26.625rem] object-cover"
        alt=""
        src="images/rectangle-97@2x.png"
      />
      <div className="absolute top-[38.875rem] left-[calc(50%_-_72px)] text-[3rem] font-medium font-roboto text-center">
        Events
      </div>
      <div className="absolute top-[42.688rem] left-[2.188rem] inline-block w-[36.188rem] h-[21.625rem]">
        Lorem ipsum dolor sit amet consectetur. Ut non vitae arcu commodo sed in
        platea amet nec.Lorem ipsum dolor sit amet consectetur. Ut non vitae
        arcu commodo sed in platea amet nec.Lorem ipsum dolor sit amet
        consectetur. Ut non vitae arcu commodo sed in platea amet nec.Lorem
        ipsum dolor sit amet consectetur. Ut non vitae arcu commodo sed in
        platea amet nec.Lorem ipsum dolor sit amet consectetur. Ut non vitae
        arcu commodo sed in platea amet nec.Lorem ipsum dolor sit amet
        consectetur. Ut n
      </div>
      <div className="absolute top-[43.938rem] left-[40.5rem] rounded-10xs bg-lavenderblush w-[14.563rem] h-[13.625rem] flex flex-col items-center justify-center gap-[2.187rem]">
        <img
          className="w-[6.25rem] relative h-[6.25rem] overflow-hidden shrink-0"
          alt=""
          src="images/wpfweddingcake.svg"
        />
        <div className="relative">Wedding</div>
      </div>
      <div className="absolute top-[59.125rem] left-[40.5rem] rounded-10xs bg-lavenderblush w-[14.563rem] h-[13.625rem] flex flex-col items-center justify-center gap-[2.187rem]">
        <img
          className="w-[6.25rem] relative h-[6.25rem] overflow-hidden shrink-0"
          alt=""
          src="images/wpfweddingcake.svg"
        />
        <div className="relative">Wedding</div>
      </div>
      <div className="absolute top-[43.938rem] left-[57rem] rounded-10xs bg-lavenderblush w-[14.563rem] h-[13.625rem] flex flex-col items-center justify-center gap-[1.937rem]">
        <img
          className="w-[6.25rem] relative h-[6.25rem] overflow-hidden shrink-0"
          alt=""
          src="images/twemojibirthdaycake.svg"
        />
        <div className="relative">{`Birthday `}</div>
      </div>
      <div className="absolute top-[59.125rem] left-[57rem] rounded-10xs bg-lavenderblush w-[14.563rem] h-[13.625rem] flex flex-col items-center justify-center gap-[1.937rem]">
        <img
          className="w-[6.25rem] relative h-[6.25rem] overflow-hidden shrink-0"
          alt=""
          src="images/twemojibirthdaycake.svg"
        />
        <div className="relative">{`Birthday `}</div>
      </div>
      <div className="absolute top-[43.938rem] left-[73.438rem] rounded-10xs bg-lavenderblush w-[14.563rem] h-[13.625rem] flex flex-col items-center justify-center gap-[1.75rem]">
        <img
          className="w-[6.25rem] relative h-[6.25rem] overflow-hidden shrink-0"
          alt=""
          src="images/gameiconsdeadlystrike.svg"
        />
        <div className="relative">Teskar</div>
      </div>
      <div className="absolute top-[59.125rem] left-[73.438rem] rounded-10xs bg-lavenderblush w-[14.563rem] h-[13.625rem] flex flex-col items-center justify-center gap-[1.75rem]">
        <img
          className="w-[6.25rem] relative h-[6.25rem] overflow-hidden shrink-0"
          alt=""
          src="images/gameiconsdeadlystrike.svg"
        />
        <div className="relative">Teskar</div>
      </div>
      <div className="absolute top-[67.188rem] left-[2.188rem] rounded-[10px] bg-crimson w-[17.25rem] h-[4.375rem] flex flex-row items-center justify-center p-[0.625rem] box-border text-white">
        <div className="relative font-semibold">Appoint your Event</div>
      </div>
    </div>
  );
};

export default Events;
