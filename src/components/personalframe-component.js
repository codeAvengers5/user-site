const FrameComponent = () => {
  return (
    <div className="w-[990px] flex flex-col items-end justify-start gap-[41px] max-w-full text-center text-29xl text-black font-roboto mq675:gap-[20px]">
      <div className="w-[609px] flex flex-row items-start justify-end py-0 px-[72px] box-border max-w-full mq675:pl-9 mq675:pr-9 mq675:box-border">
        <h1 className="m-0 flex-1 relative text-inherit font-medium font-inherit inline-block max-w-full mq450:text-10xl mq750:text-19xl">
          Personal Information
        </h1>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full text-left text-5xl text-white font-inter">
        <div className="rounded-xl bg-red-200 flex flex-row items-start justify-start py-1.5 px-[14.5px]">
          <div className="relative inline-block min-w-[12px] mq450:text-lgi">
            1
          </div>
        </div>
        <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[20px] mq750:flex-wrap">
          <div className="flex flex-col items-end justify-start gap-[12px]">
            <div className="h-[247px] flex flex-row items-start justify-end py-0 pr-[15.5px] pl-5 box-border">
              <div className="h-[252px] w-[5px] relative box-border border-r-[5px] border-solid border-darkslateblue" />
            </div>
            <div className="rounded-xl bg-red-200 flex flex-row items-start justify-start py-1.5 px-[13px]">
              <div className="relative inline-block min-w-[15px] mq450:text-lgi">
                2
              </div>
            </div>
            <div className="h-[247px] flex flex-row items-start justify-end py-0 pr-[15.5px] pl-5 box-border">
              <div className="h-[252px] w-[5px] relative box-border border-r-[5px] border-solid border-darkslateblue" />
            </div>
          </div>
          <div className="h-[417px] w-[556px] flex flex-col items-start justify-start max-w-full text-center text-base text-black">
            <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-12xs bg-mistyrose flex flex-col items-center justify-start py-[60px] px-5 box-border relative gap-[59.8px] max-w-full mq450:gap-[30px]">
              <div className="w-[393px] flex flex-col items-start justify-start gap-[7px] max-w-full">
                <div className="w-[76px] relative inline-block min-w-[76px]">
                  Full Name
                </div>
                <div className="self-stretch rounded-6xs bg-whitesmoke flex flex-row items-start justify-start py-[15px] px-2.5 border-[1px] border-solid border-darksalmon">
                  <input
                    className="w-[37px] [border:none] [outline:none] font-inter text-sm bg-[transparent] h-[17px] relative text-lightcoral text-center inline-block p-0"
                    placeholder="name"
                    type="text"
                  />
                </div>
              </div>
              <div className="w-[393.8px] flex flex-col items-start justify-start gap-[11.2px] max-w-full">
                <div className="w-[115px] relative inline-block min-w-[115px]">
                  Phone Number
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[1.8px] box-border max-w-full">
                  <div className="flex-1 rounded-6xs bg-whitesmoke box-border flex flex-row items-start justify-start py-5 px-2.5 max-w-full border-[1px] border-solid border-darksalmon">
                    <input
                      className="w-[29px] [border:none] [outline:none] font-inter text-sm bg-[transparent] h-[17px] relative text-lightgray text-center inline-block p-0"
                      placeholder="P.no"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <img
                className="w-[207px] h-[207px] absolute !m-[0] top-[-154px] right-[172px] z-[1]"
                loading="lazy"
                alt=""
                src="images/group-72.svg"
              />
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-crimson-200 flex flex-row items-start justify-start py-1.5 px-[12.5px]">
          <div className="relative inline-block min-w-[16px] mq450:text-lgi">
            3
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
