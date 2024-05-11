import FrameComponent from "../../components/frame-component";

const AppointEvent = () => {
  return (
    <div className="mq925:gap-[32px] relative box-border flex w-full flex-col items-end justify-start gap-[64px] overflow-hidden bg-white px-8 pb-[277px] pt-[216px] text-center font-roboto text-[48px] leading-[normal] tracking-[normal] text-black mq450:gap-[16px]">
      <div className="box-border flex max-w-full flex-row items-start justify-center self-stretch py-0 pl-px pr-0">
        <h1 className="font-inherit mq925:text-[38px] relative m-0 inline-block w-[401px] max-w-full shrink-0 text-inherit font-medium mq450:text-[29px]">
          Event Information
        </h1>
      </div>
      <section className="mq925:pb-[168px] mq925:box-border box-border flex max-w-full flex-row items-start justify-start self-stretch px-[3px] pb-[258px] pt-0 mq450:box-border mq450:pb-[109px]">
        <FrameComponent />
      </section>
      <div className="mq700:gap-[17px] flex w-[471px] max-w-full flex-row items-start justify-start gap-[35px] mq450:flex-wrap">
        <button className="box-border flex min-w-[142px] flex-1 cursor-pointer flex-row items-start justify-between gap-[20px] rounded-3xs bg-lightsteelblue py-[17.5px] pl-[32.9px] pr-[32.8px] [border:none] mq450:flex-1">
          <img
            className="relative h-[35px] min-h-[35px] w-[35px] object-contain"
            alt=""
            src="images/group-1@2x.png"
          />
          <div className="box-border flex w-[83.1px] flex-col items-start justify-start px-0 pb-0 pt-[3px]">
            <div className="relative self-stretch text-left font-inter text-5xl font-semibold text-white mq450:text-lgi">
              Back
            </div>
          </div>
        </button>
        <button className="box-border flex min-w-[142px] flex-[0.7682] cursor-pointer flex-row items-start justify-between gap-[20px] rounded-3xs bg-crimson-200 px-[50.5px] py-[17.5px] [border:none] mq450:flex-1">
          <div className="flex flex-col items-start justify-start px-0 pb-0 pt-[3px]">
            <div className="relative inline-block min-w-[55px] text-left font-inter text-5xl font-semibold text-white mq450:text-lgi">
              Next
            </div>
          </div>
          <img
            className="relative h-[35px] min-h-[35px] w-[35px] object-contain"
            alt=""
            src="images/group-2@2x.png"
          />
        </button>
      </div>
    </div>
  );
};

export default AppointEvent;
