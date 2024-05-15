import FrameComponent from "../../../components/personalframe-component";

const AppointEvent = () => {
  return (
    <div className="mq750:gap-[164px] relative box-border flex w-full flex-col items-end justify-start gap-[328px] overflow-hidden bg-white px-8 pb-[277px] pt-[239px] leading-[normal] tracking-[normal] mq450:gap-[82px]">
      <section className="box-border flex max-w-full flex-row items-start justify-start self-stretch px-[3px] py-0">
        <FrameComponent />
      </section>
      <div className="mq675:gap-[17px] flex w-[471px] max-w-full flex-row flex-wrap items-start justify-start gap-[35px]">
        <button className="box-border flex min-w-[142px] flex-1 cursor-pointer flex-row items-start justify-between gap-[20px] rounded-3xs bg-lightsteelblue py-[17.5px] pl-[32.9px] pr-[32.8px] [border:none]">
          <img
            className="relative h-[35px] min-h-[35px] w-[35px] object-contain"
            alt=""
            src="images/group@2x.png"
          />
          <div className="box-border flex w-[83.1px] flex-col items-start justify-start px-0 pb-0 pt-[3px]">
            <div className="relative self-stretch text-left font-inter text-5xl font-semibold text-white mq450:text-lgi">
              Back
            </div>
          </div>
        </button>
        <button className="flex cursor-pointer flex-row items-start justify-start rounded-3xs bg-crimson-200 px-[67.5px] py-[20.5px] [border:none] hover:bg-crimson-100">
          <div className="relative inline-block min-w-[83px] text-left font-inter text-5xl font-semibold text-white mq450:text-lgi">
            Sumbit
          </div>
        </button>
      </div>
    </div>
  );
};

export default AppointEvent;
