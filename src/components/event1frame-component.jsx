const FrameComponent = () => {
  return (
    <div className="flex w-[1006px] max-w-full flex-col items-start justify-start text-left font-inter text-5xl text-white">
      <div className="flex flex-row items-start justify-start rounded-xl bg-red-100 px-[14.5px] py-1.5">
        <div className="relative inline-block min-w-[12px] mq450:text-lgi">
          1
        </div>
      </div>
      <div className="mq925:flex-wrap flex max-w-full flex-row items-start justify-between gap-[20px] self-stretch">
        <div className="flex flex-col items-start justify-start px-0 pb-0 pt-3">
          <div className="flex flex-col items-end justify-start gap-[12px]">
            <div className="box-border flex h-[247px] flex-row items-start justify-end py-0 pl-5 pr-[15.5px]">
              <div className="relative box-border h-[252px] w-[5px] border-r-[5px] border-solid border-darkslateblue" />
            </div>
            <div className="flex flex-row items-start justify-start rounded-xl bg-red-100 px-[13px] py-1.5">
              <div className="relative inline-block min-w-[15px] mq450:text-lgi">
                2
              </div>
            </div>
            <div className="box-border flex h-[247px] flex-row items-start justify-end py-0 pl-5 pr-[15.5px]">
              <div className="relative box-border h-[252px] w-[5px] border-r-[5px] border-solid border-darkslateblue" />
            </div>
            <div className="flex flex-row items-start justify-start rounded-xl bg-lavenderblush px-[12.5px] py-1.5 text-black">
              <div className="relative inline-block min-w-[16px] mq450:text-lgi">
                3
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-12xs mq700:gap-[36px] mq700:py-[39px] mq700:px-[26px] mq700:box-border box-border flex w-[628px] max-w-full flex-col items-end justify-start gap-[71.7px] bg-mistyrose px-[53.5px] py-[60px] text-center text-base text-black shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] mq450:gap-[18px]">
          <div className="flex flex-col items-start justify-start gap-[7.3px] self-stretch">
            <div className="relative inline-block w-[282px] ">
              Number of People (Minimum of 200)
            </div>
            <div className="rounded-6xs flex flex-row items-start justify-start self-stretch border-[1px] border-solid border-darksalmon bg-whitesmoke px-2.5 py-[15px]">
              <input
                className="relative inline-block h-[17px] w-[26px] bg-[transparent] p-0 text-center font-inter text-sm text-lightcoral [border:none] [outline:none]"
                placeholder="title"
                type="text"
              />
            </div>
          </div>

          <form>
            <label
              htmlFor="countries"
              className="text-gray-900 mb-2  mr-[340px] block text-sm font-medium dark:text-white ">
              Fasting or Non-fasting
            </label>
            <select
              id="choose"
              className=" text-gray-900  focus:border-daksalmon dark:border-gray-600 dark:placeholder-gray-400 w-full  border border-darksalmon  bg-whitesmoke px-[230px] py-3 text-sm focus:ring-darksalmon dark:bg-red-100 dark:text-white dark:focus:border-red-100 dark:focus:ring-red-100">
              <option selected>select</option>
              <option value="non">Non-fasting</option>
              <option value="fasting">Fasting</option>
            </select>
          </form>

          <div className="box-border flex max-w-full flex-row items-start justify-end self-stretch px-1 py-0">
            <div className="flex max-w-full flex-1 flex-col items-start justify-start gap-[21.4px]">
              <div className="relative inline-block w-[153px]">
                With Cash or Food
              </div>
              <div className="text-mini box-border flex max-w-full flex-row items-start justify-start self-stretch py-0 pl-[7px] pr-0 text-left">
                <div className="box-border flex max-w-full flex-1 flex-row flex-wrap items-start justify-between gap-[20px] py-0 pl-0 pr-0.5">
                  <div className="flex flex-row items-start justify-start gap-[10px]">
                    <div className="flex flex-col items-start justify-start px-0 pb-0 pt-1">
                      <div className="flex">
                        <div className="me-[360px] flex items-center">
                          <input
                            id="inline-radio"
                            type="radio"
                            value=""
                            name="inline-radio-group"
                            className="text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 focus:ring-2"
                          />
                          <label
                            htmlFor="inline-radio"
                            className="text-gray-900 dark:text-gray-300 ms-2 text-sm font-medium">
                            cash
                          </label>
                        </div>
                        <div className="me-4 flex items-center">
                          <input
                            id="inline-2-radio"
                            type="radio"
                            value=""
                            name="inline-radio-group"
                            className="text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 focus:ring-2"
                          />
                          <label
                            htmlFor="inline-2-radio"
                            className="text-gray-900 dark:text-gray-300 ms-2 text-sm font-medium">
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
          <div className="flex flex-row items-start justify-center self-stretch">
            <img
              className="relative h-[69px] w-[248.5px] object-cover"
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
