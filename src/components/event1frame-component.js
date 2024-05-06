const FrameComponent = () => {
  return (
    <div className="w-[1006px] flex flex-col items-start justify-start max-w-full text-left text-5xl text-white font-inter">
      <div className="rounded-xl bg-red-100 flex flex-row items-start justify-start py-1.5 px-[14.5px]">
        <div className="relative inline-block min-w-[12px] mq450:text-lgi">
          1
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq925:flex-wrap">
        <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
          <div className="flex flex-col items-end justify-start gap-[12px]">
            <div className="h-[247px] flex flex-row items-start justify-end py-0 pr-[15.5px] pl-5 box-border">
              <div className="h-[252px] w-[5px] relative box-border border-r-[5px] border-solid border-darkslateblue" />
            </div>
            <div className="rounded-xl bg-red-100 flex flex-row items-start justify-start py-1.5 px-[13px]">
              <div className="relative inline-block min-w-[15px] mq450:text-lgi">
                2
              </div>
            </div>
            <div className="h-[247px] flex flex-row items-start justify-end py-0 pr-[15.5px] pl-5 box-border">
              <div className="h-[252px] w-[5px] relative box-border border-r-[5px] border-solid border-darkslateblue" />
            </div>
            <div className="rounded-xl bg-lavenderblush flex flex-row items-start justify-start py-1.5 px-[12.5px] text-black">
              <div className="relative inline-block min-w-[16px] mq450:text-lgi">
                3
              </div>
            </div>
          </div>
        </div>

        <div className="w-[628px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-12xs bg-mistyrose flex flex-col items-end justify-start py-[60px] px-[53.5px] box-border gap-[71.7px] max-w-full text-center text-base text-black mq450:gap-[18px] mq700:gap-[36px] mq700:py-[39px] mq700:px-[26px] mq700:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[7.3px]">
            <div className="w-[282px] relative inline-block ">
              Number of People (Minimum of 200)
            </div>
            <div className="self-stretch rounded-6xs bg-whitesmoke flex flex-row items-start justify-start py-[15px] px-2.5 border-[1px] border-solid border-darksalmon">
              <input
                className="w-[26px] [border:none] [outline:none] font-inter text-sm bg-[transparent] h-[17px] relative text-lightcoral text-center inline-block p-0"
                placeholder="title"
                type="text"
              />
            </div>
          </div>

          <form>
            <label
              htmlFor="countries"
              className="block mb-2  mr-[340px] text-sm font-medium text-gray-900 dark:text-white "
            >
              Fasting or Non-fasting
            </label>
            <select
              id="choose"
              className=" bg-whitesmoke  border border-darksalmon text-gray-900 text-sm  focus:ring-darksalmon focus:border-daksalmon  w-full py-3 px-[230px] dark:bg-red-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-100 dark:focus:border-red-100"
            >
              <option selected>select</option>
              <option value="non">Non-fasting</option>
              <option value="fasting">Fasting</option>
            </select>
          </form>

          <div className="self-stretch flex flex-row items-start justify-end py-0 px-1 box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[21.4px] max-w-full">
              <div className="w-[153px] relative inline-block">
                With Cash or Food
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[7px] box-border max-w-full text-left text-mini">
                <div className="flex-1 flex flex-row flex-wrap items-start justify-between py-0 pr-0.5 pl-0 box-border max-w-full gap-[20px]">
                  <div className="flex flex-row items-start justify-start gap-[10px]">
                    <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                      <div className="flex">
                        <div className="flex items-center me-[360px]">
                          <input
                            id="inline-radio"
                            type="radio"
                            value=""
                            name="inline-radio-group"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="inline-radio"
                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            cash
                          </label>
                        </div>
                        <div className="flex items-center me-4">
                          <input
                            id="inline-2-radio"
                            type="radio"
                            value=""
                            name="inline-radio-group"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="inline-2-radio"
                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Food
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center">
            <img
              className="h-[69px] w-[248.5px] relative object-cover"
              loading="lazy"
              alt=""
              src="images/group-101@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
