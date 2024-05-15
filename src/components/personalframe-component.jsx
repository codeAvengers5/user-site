const FrameComponent = () => {
  return (
    <div className="mq675:gap-[20px] flex w-[990px] max-w-full flex-col items-end justify-start gap-[41px] text-center font-roboto text-29xl text-black">
      <div className="flex h-[417px] w-[556px] max-w-full flex-col items-start justify-start text-center text-base text-black">
        <div className="rounded-12xs relative box-border flex max-w-full flex-col items-center justify-start gap-[59.8px] self-stretch bg-mistyrose px-5 py-[60px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] mq450:gap-[30px]">
          <div className="flex w-[393px] max-w-full flex-col items-start justify-start gap-[7px]">
            <div className="relative inline-block w-[76px] min-w-[76px]">
              Full Name
            </div>
            <div className="rounded-6xs flex flex-row items-start justify-start self-stretch border-[1px] border-solid border-darksalmon bg-whitesmoke px-2.5 py-[15px]">
              <input
                className="relative inline-block h-[17px] w-[37px] bg-[transparent] p-0 text-center font-inter text-sm text-lightcoral [border:none] [outline:none]"
                placeholder="name"
                type="text"
              />
            </div>
          </div>
          <div className="flex w-[393.8px] max-w-full flex-col items-start justify-start gap-[11.2px]">
            <div className="relative inline-block w-[115px] min-w-[115px]">
              Phone Number
            </div>
            <div className="box-border flex max-w-full flex-row items-start justify-start self-stretch py-0 pl-[1.8px] pr-0">
              <div className="rounded-6xs box-border flex max-w-full flex-1 flex-row items-start justify-start border-[1px] border-solid border-darksalmon bg-whitesmoke px-2.5 py-5">
                <input
                  className="relative inline-block h-[17px] w-[29px] bg-[transparent] p-0 text-center font-inter text-sm text-lightgray [border:none] [outline:none]"
                  placeholder="P.no"
                  type="text"
                />
              </div>
            </div>
          </div>
          <img
            className="absolute right-[172px] top-[-154px] z-[1] !m-[0] h-[207px] w-[207px]"
            loading="lazy"
            alt=""
            src="images/group-72.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
