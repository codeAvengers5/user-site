import FrameComponent from "../../components/frame-component";

const AppointEvent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-[216px] px-8 pb-[277px] box-border gap-[64px] leading-[normal] tracking-[normal] text-center text-[48px] text-black font-roboto mq450:gap-[16px] mq925:gap-[32px]">
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-0 pl-px box-border max-w-full">
        <h1 className="m-0 w-[401px] relative text-inherit font-medium font-inherit inline-block shrink-0 max-w-full mq450:text-[29px] mq925:text-[38px]">
          Event Information
        </h1>
      </div>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-[3px] pb-[258px] box-border max-w-full mq450:pb-[109px] mq450:box-border mq925:pb-[168px] mq925:box-border">
        <FrameComponent />
      </section>
      <div className="w-[471px] flex flex-row items-start justify-start gap-[35px] max-w-full mq450:flex-wrap mq700:gap-[17px]">
        <button className="cursor-pointer [border:none] py-[17.5px] pr-[32.8px] pl-[32.9px] bg-lightsteelblue flex-1 rounded-3xs flex flex-row items-start justify-between box-border min-w-[142px] gap-[20px] mq450:flex-1">
          <img
            className="h-[35px] w-[35px] relative object-contain min-h-[35px]"
            alt=""
            src="images/group-1@2x.png"
          />
          <div className="w-[83.1px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
            <div className="self-stretch relative text-5xl font-semibold font-inter text-white text-left mq450:text-lgi">
              Back
            </div>
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-[17.5px] px-[50.5px] bg-crimson-200 flex-[0.7682] rounded-3xs flex flex-row items-start justify-between box-border min-w-[142px] gap-[20px] mq450:flex-1">
          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
            <div className="relative text-5xl font-semibold font-inter text-white text-left inline-block min-w-[55px] mq450:text-lgi">
              Next
            </div>
          </div>
          <img
            className="h-[35px] w-[35px] relative object-contain min-h-[35px]"
            alt=""
            src="images/group-2@2x.png"
          />
        </button>
      </div>
    </div>
  );
};

export default AppointEvent;
