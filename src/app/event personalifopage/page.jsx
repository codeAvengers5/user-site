import FrameComponent from "../../components/personalframe-component";

const AppointEvent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-[239px] px-8 pb-[277px] box-border gap-[328px] leading-[normal] tracking-[normal] mq450:gap-[82px] mq750:gap-[164px]">
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full">
        <FrameComponent />
      </section>
      <div className="w-[471px] flex flex-row flex-wrap items-start justify-start gap-[35px] max-w-full mq675:gap-[17px]">
        <button className="cursor-pointer [border:none] py-[17.5px] pr-[32.8px] pl-[32.9px] bg-lightsteelblue flex-1 rounded-3xs flex flex-row items-start justify-between box-border min-w-[142px] gap-[20px]">
          <img
            className="h-[35px] w-[35px] relative object-contain min-h-[35px]"
            alt=""
            src="images/group@2x.png"
          />
          <div className="w-[83.1px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
            <div className="self-stretch relative text-5xl font-semibold font-inter text-white text-left mq450:text-lgi">
              Back
            </div>
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-[20.5px] px-[67.5px] bg-crimson-200 rounded-3xs flex flex-row items-start justify-start hover:bg-crimson-100">
          <div className="relative text-5xl font-semibold font-inter text-white text-left inline-block min-w-[83px] mq450:text-lgi">
            Sumbit
          </div>
        </button>
      </div>
    </div>
  );
};

export default AppointEvent;
