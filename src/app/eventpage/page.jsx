import Property1Default from "@/components/property1-default";
import React from "react";
// import Property1Default from "./property1-default";

const Events = () => {
  return (
    <div className="relative h-[104.75rem] w-full overflow-hidden bg-white text-left font-inter text-[1.5rem] text-black">
      <img
        className="absolute left-[3.5rem] top-[3.375rem] h-[6.813rem] w-[11.563rem] rounded-[50%] object-cover"
        alt=""
        src="images/ellipse-10@2x.png"
      />
      <div className="absolute left-[43.875rem] top-[5.188rem] flex h-[3.25rem] w-[44.125rem] flex-row flex-wrap items-center justify-between">
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
        className="absolute left-[2rem] top-[9.688rem] h-[26.625rem] w-[86rem] object-cover"
        alt=""
        src="images/rectangle-97@2x.png"
      />
      <div className="absolute left-[calc(50%_-_72px)] top-[38.875rem] text-center font-roboto text-[3rem] font-medium">
        Events
      </div>
      <div className="absolute left-[2.188rem] top-[42.688rem] inline-block h-[21.625rem] w-[36.188rem]">
        Lorem ipsum dolor sit amet consectetur. Ut non vitae arcu commodo sed in
        platea amet nec.Lorem ipsum dolor sit amet consectetur. Ut non vitae
        arcu commodo sed in platea amet nec.Lorem ipsum dolor sit amet
        consectetur. Ut non vitae arcu commodo sed in platea amet nec.Lorem
        ipsum dolor sit amet consectetur. Ut non vitae arcu commodo sed in
        platea amet nec.Lorem ipsum dolor sit amet consectetur. Ut non vitae
        arcu commodo sed in platea amet nec.Lorem ipsum dolor sit amet
        consectetur. Ut n
      </div>
      <div className="rounded-10xs bg-lavenderblush absolute left-[40.5rem] top-[43.938rem] flex h-[13.625rem] w-[14.563rem] flex-col items-center justify-center gap-[2.187rem]">
        <img
          className="relative h-[6.25rem] w-[6.25rem] shrink-0 overflow-hidden"
          alt=""
          src="images/wpfweddingcake.svg"
        />
        <div className="relative">Wedding</div>
      </div>
      <div className="rounded-10xs bg-lavenderblush absolute left-[40.5rem] top-[59.125rem] flex h-[13.625rem] w-[14.563rem] flex-col items-center justify-center gap-[2.187rem]">
        <img
          className="relative h-[6.25rem] w-[6.25rem] shrink-0 overflow-hidden"
          alt=""
          src="images/wpfweddingcake.svg"
        />
        <div className="relative">Wedding</div>
      </div>
      <div className="rounded-10xs bg-lavenderblush absolute left-[57rem] top-[43.938rem] flex h-[13.625rem] w-[14.563rem] flex-col items-center justify-center gap-[1.937rem]">
        <img
          className="relative h-[6.25rem] w-[6.25rem] shrink-0 overflow-hidden"
          alt=""
          src="images/twemojibirthdaycake.svg"
        />
        <div className="relative">{`Birthday `}</div>
      </div>
      <div className="rounded-10xs bg-lavenderblush absolute left-[57rem] top-[59.125rem] flex h-[13.625rem] w-[14.563rem] flex-col items-center justify-center gap-[1.937rem]">
        <img
          className="relative h-[6.25rem] w-[6.25rem] shrink-0 overflow-hidden"
          alt=""
          src="images/twemojibirthdaycake.svg"
        />
        <div className="relative">{`Birthday `}</div>
      </div>
      <div className="rounded-10xs bg-lavenderblush absolute left-[73.438rem] top-[43.938rem] flex h-[13.625rem] w-[14.563rem] flex-col items-center justify-center gap-[1.75rem]">
        <img
          className="relative h-[6.25rem] w-[6.25rem] shrink-0 overflow-hidden"
          alt=""
          src="images/gameiconsdeadlystrike.svg"
        />
        <div className="relative">Teskar</div>
      </div>
      <div className="rounded-10xs bg-lavenderblush absolute left-[73.438rem] top-[59.125rem] flex h-[13.625rem] w-[14.563rem] flex-col items-center justify-center gap-[1.75rem]">
        <img
          className="relative h-[6.25rem] w-[6.25rem] shrink-0 overflow-hidden"
          alt=""
          src="images/gameiconsdeadlystrike.svg"
        />
        <div className="relative">Teskar</div>
      </div>
      <div className="bg-crimson absolute left-[2.188rem] top-[67.188rem] box-border flex h-[4.375rem] w-[17.25rem] flex-row items-center justify-center rounded-[10px] p-[0.625rem] text-white">
        <div className="relative font-semibold">Appoint your Event</div>
      </div>
    </div>
  );
};

export default Events;
