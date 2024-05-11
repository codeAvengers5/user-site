const FrameComponent = () => {
  return (
    <div className="mq675:gap-[20px] flex w-[990px] max-w-full flex-col items-end justify-start gap-[41px] text-center font-roboto text-29xl text-black">
      <div className="mq675:pl-9 mq675:pr-9 mq675:box-border box-border flex w-[609px] max-w-full flex-row items-start justify-end px-[72px] py-0">
        <h1 className="font-inherit mq750:text-19xl relative m-0 inline-block max-w-full flex-1 text-inherit font-medium mq450:text-10xl">
          Personal Information
        </h1>
      </div>
      <div className="flex max-w-full flex-col items-start justify-start gap-[12px] self-stretch text-left font-inter text-5xl text-white">
        <div className="flex flex-row items-start justify-start rounded-xl bg-red-200 px-[14.5px] py-1.5">
          <div className="relative inline-block min-w-[12px] mq450:text-lgi">
            1
          </div>
        </div>
        <div className="mq750:flex-wrap flex max-w-full flex-row items-end justify-between gap-[20px] self-stretch">
          <div className="flex flex-col items-end justify-start gap-[12px]">
            <div className="box-border flex h-[247px] flex-row items-start justify-end py-0 pl-5 pr-[15.5px]">
              <div className="relative box-border h-[252px] w-[5px] border-r-[5px] border-solid border-darkslateblue" />
            </div>
            <div className="flex flex-row items-start justify-start rounded-xl bg-red-200 px-[13px] py-1.5">
              <div className="relative inline-block min-w-[15px] mq450:text-lgi">
                2
              </div>
            </div>
            <div className="box-border flex h-[247px] flex-row items-start justify-end py-0 pl-5 pr-[15.5px]">
              <div className="relative box-border h-[252px] w-[5px] border-r-[5px] border-solid border-darkslateblue" />
            </div>
          </div>
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
        <div className="flex flex-row items-start justify-start rounded-xl bg-crimson-200 px-[12.5px] py-1.5">
          <div className="relative inline-block min-w-[16px] mq450:text-lgi">
            3
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
