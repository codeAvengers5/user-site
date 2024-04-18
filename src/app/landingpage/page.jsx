import FrameComponent from "@components/frame-component";
import ErrorHandler from "@components/ErrorHandler";
import DataFlow from "@components/data-flow";

const HomePage = () => {
  return (
    <div className="w-[1440px] max-w-full flex flex-row items-start justify-start tracking-[normal]">
      <section className="flex-1 bg-white overflow-hidden flex flex-col items-start justify-start relative max-w-full text-left text-xl text-white font-roboto">
        <img
          className="w-full h-[422px] absolute !m-[0] top-[163px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="images/rectangle-46@2x.png"
        />
        <div className="w-full h-[422px] absolute !m-[0] top-[163px] right-[0px] left-[0px] bg-orangered-200 z-[1]" />
        <div className="self-stretch bg-darkslategray flex flex-row flex-wrap items-start justify-between py-[1.5px] pr-[35px] pl-8 box-border max-w-full gap-[20px]">
          <div className="w-[647px] flex flex-row items-start justify-start gap-[20px] max-w-full mq800:flex-wrap">
            <div className="h-[38.5px] flex flex-col items-start justify-start pt-[14.5px] px-0 pb-0 box-border">
              <div className="flex-1 flex flex-row items-start justify-start gap-[8.5px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="images/materialsymbolscall.svg"
                />
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <div className="relative mq450:text-base">
                    (+251) 979 797979
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <div className="relative inline-block min-w-[27px] mq450:text-base">
                    OR
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[62px] flex flex-col items-start justify-start pt-[15.5px] pb-0 pr-[11px] pl-0 box-border">
              <div className="self-stretch relative mq450:text-base">
                <p className="m-0"> 8131</p>
              </div>
            </div>
            <div className="h-[51px] flex-1 flex flex-row items-start justify-between min-w-[195px] gap-[20px]">
              <div className="h-[54px] w-[3px] relative box-border border-r-[3px] border-solid border-white" />
              <div className="h-[42.5px] w-[227px] flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0 box-border">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[10px]">
                  <img
                    className="h-[34px] w-8 relative overflow-hidden shrink-0 [debug_commit:1cbd860]"
                    loading="lazy"
                    alt=""
                    src="images/evaemailoutline.svg"
                  />
                  <div className="flex flex-col items-start justify-start pt-[4.2999999999999545px] px-0 pb-0">
                    <a
                      className="relative [text-decoration:underline] text-[inherit] shrink-0 [debug_commit:1cbd860] mq450:text-base"
                      href="mailto:info@mekedonia.org"
                      target="_blank"
                    >
                      info@mekedonia.org
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
            <button className="cursor-pointer [border:none] py-[6.5px] px-[34.5px] bg-crimson-200 rounded-8xs flex flex-row items-start justify-start hover:bg-crimson-100">
              <div className="relative text-xl leading-[28px] font-semibold font-inter text-white text-left inline-block min-w-[70px] mq450:text-base mq450:leading-[22px]">
                Donate
              </div>
            </button>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-8 pb-[179px] box-border max-w-full text-29xl text-black mq450:pb-8 mq450:box-border mq1125:pb-[49px] mq1125:box-border mq1325:pb-[75px] mq1325:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[34px] max-w-full mq800:gap-[17px_34px]">
            <div className="self-stretch h-[181.8px] flex flex-row items-start justify-start pt-0 pb-[72.79999999999995px] pr-0 pl-6 box-border max-w-full text-xl">
              <div className="self-stretch flex-1 flex flex-row items-end justify-between max-w-full gap-[20px]">
                <img
                  className="h-[109px] w-[185px] relative rounded-[50%] object-cover"
                  loading="lazy"
                  alt=""
                  src="images/ellipse-10@2x.png"
                />
                <div className="w-[711px] flex flex-col items-start justify-end pt-0 px-0 pb-7 box-border max-w-full mq1125:w-0">
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-between py-[14.5px] pr-1 pl-0 gap-[20px] mq1125:hidden">
                    <div className="flex flex-row items-start justify-start">
                      <div className="relative inline-block min-w-[54px]">
                      <a href="#">Home</a>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start">
                      <div className="relative inline-block min-w-[54px]">
                      <a href="#">About</a>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 pr-[3px] pl-0">
                      <div className="relative inline-block min-w-[51px]">
                        News
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start">
                      <div className="relative inline-block min-w-[60px]">
                        Events
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start">
                      <div className="relative inline-block min-w-[45px]">
                        Jobs
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start">
                      <div className="relative inline-block min-w-[94px]">
                        ContactUs
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[703px] flex flex-row items-start justify-start pt-0 px-[75px] pb-[50px] box-border max-w-full text-white mq800:pl-[37px] mq800:pr-[37px] mq800:box-border">
              <div className="flex-1 flex flex-col items-start justify-start gap-[13.200000000000044px] max-w-full">
                <div className="w-[432px] flex flex-row flex-wrap items-start justify-start py-2.5 pr-5 pl-0 box-border max-w-full z-[2]">
                  <h1 className="m-0 flex-1 relative text-inherit leading-[50px] font-normal font-inherit inline-block max-w-full mq800:text-19xl mq800:leading-[40px] mq450:text-10xl mq450:leading-[30px]">
                    Sew Lemardat Sew Mehon Beki nw
                  </h1>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[11px] box-border max-w-full text-xl">
                  <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full">
                    <div className="flex-1 relative inline-block min-w-[263px] max-w-full z-[2] mq450:text-base">{`Lorem ipsum dolor sit amet consectetur. Tellus velit ultrices bibendum `}</div>
                    <button className="cursor-pointer py-[9px] px-[19px] bg-[transparent] w-[117px] rounded-3xs box-border flex flex-row items-start justify-start z-[2] border-[3px] border-solid border-red-200 hover:bg-red-300 hover:box-border hover:border-[3px] hover:border-solid hover:border-red-100">
                      <div className="relative text-base leading-[28px] font-semibold font-inter text-white text-left inline-block min-w-[72px]">
                        About Us
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center pt-0 px-0 pb-[50px] gap-[38px] mq800:gap-[19px]">
              <div className="w-[211px] flex flex-col items-start justify-start py-0 pr-4 pl-0 box-border min-w-[137px]">
                <FrameComponent />
              </div>
              <FrameComponent propAlignSelf="unset" />
              <FrameComponent propAlignSelf="unset" />
              <FrameComponent propAlignSelf="unset" />
              <FrameComponent propAlignSelf="unset" />
              <FrameComponent propAlignSelf="unset" />
            </div>
            <div className="w-[1313px] flex flex-row items-start justify-center pt-0 px-5 pb-1.5 box-border max-w-full text-5xl">
              <div className="w-[1139px] flex flex-row items-start justify-center gap-[34px] max-w-full mq800:gap-[34px_17px] mq1125:flex-wrap">
                <img
                  className="h-[592px] w-[526px] relative object-cover max-w-full mq1125:flex-1"
                  loading="lazy"
                  alt=""
                  src="images/rectangle-49@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border min-w-[376px] max-w-full mq800:min-w-full">
                  <div className="self-stretch h-[566px] relative leading-[28px] flex items-center shrink-0 mq450:text-[lgi] mq450:leading-[22px]">
                    <span>
                      <p className="m-0">
                        Lorem ipsum dolor sit amet consectetur. Tellus velit
                        ultrices bibendum mollis eu sit tempor eu pulvinar. In
                        feugiat morbi integer penatibus consequat felis. Et
                        gravida tellus orci imperdiet lectus ultrices quam lorem
                        arcu. Accumsan pharetra aliquet malesuada massa cursus
                        iaculis tempor sapien cras.
                      </p>
                      <p className="m-0">
                        Lorem ipsum dolor sit amet consectetur. Tellus velit
                        ultrices bibendum mollis eu sit tempor eu pulvinar. In
                        feugiat morbi integer penatibus consequat felis. Et
                        gravida tellus orci imperdiet lectus ultrices quam lorem
                        arcu. Accumsan pharetra aliquet malesuada massa cursus
                        iaculis tempor sapien cras.Lorem ipsum dolor sit amet
                        consectetur. Tellus velit ultrices bibendum mollis eu
                        sit tempor eu pulvinar. In feugiat morbi integer
                        penatibus consequat felis. Et gravida tellus orci
                        imperdiet lectus ultrices quam lorem arcu. Accumsan
                        pharetra aliquet malesuada massa cursus iaculis tempor
                        sapien cras.
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-12 pb-2 box-border max-w-full mq1325:pl-6 mq1325:pr-6 mq1325:box-border">
              <div className="flex-1 flex flex-col items-start justify-start gap-[37px] max-w-full mq800:gap-[18px_37px]">
                <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[66px] box-border max-w-full mq800:pl-[33px] mq800:box-border">
                  <h1 className="m-0 w-[404px] relative text-inherit font-medium font-inherit flex items-center shrink-0 max-w-full mq800:text-19xl mq450:text-10xl">
                    On Going Project
                  </h1>
                </div>
                <div className="w-[1280px] overflow-x-auto flex flex-col items-start justify-start gap-[25px] max-w-full">
                  <div className="w-[1279px] bg-snow shadow-[0px_4px_4px_rgba(255,_0,_0,_0.2)] flex flex-row items-start justify-start pt-5 px-[49px] pb-[27px] box-border gap-[60px] mq800:pb-5 mq800:box-border">
                    <img
                      className="h-[426.5px] w-[364px] relative object-cover max-w-full"
                      loading="lazy"
                      alt=""
                      src="images/rectangle-50@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start gap-[72.39999999999998px] max-w-full">
                      <ErrorHandler />
                      <div className="w-[586px] flex flex-row items-start justify-start py-0 px-9 box-border max-w-full">
                        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq800:flex-wrap">
                          <DataFlow
                            group90="/group-90@2x.png"
                            signalProcessor="67%"
                          />
                          <DataFlow
                            group90="/group-92@2x.png"
                            signalProcessor="70%"
                            propLeft="calc(50% - 60px)"
                          />
                          <DataFlow
                            group90="/group-90@2x.png"
                            signalProcessor="79%"
                            propLeft="calc(50% - 60px)"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[1280px] bg-snow shadow-[0px_4px_4px_rgba(255,_0,_0,_0.2)] flex flex-row items-start justify-start pt-5 pb-[27px] pr-[49.200000000000045px] pl-[49.3px] box-border gap-[60px] mq800:pb-5 mq800:box-border">
                    <img
                      className="h-[426.5px] w-[364px] relative object-cover max-w-full"
                      alt=""
                      src="images/rectangle-50-1@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start gap-[72.39999999999998px] max-w-full">
                      <ErrorHandler propPadding="unset" />
                      <div className="w-[587px] flex flex-row items-start justify-start py-0 pr-9 pl-[36.5px] box-border max-w-full">
                        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq800:flex-wrap">
                          <DataFlow
                            group90="/group-90-1@2x.png"
                            signalProcessor="67%"
                            propLeft="-26px"
                          />
                          <DataFlow
                            group90="/group-90-1@2x.png"
                            signalProcessor="70%"
                            propLeft="calc(50% - 60px)"
                          />
                          <DataFlow
                            group90="/group-90-1@2x.png"
                            signalProcessor="79%"
                            propLeft="calc(50% - 60px)"
                          />
                        </div>
                      </div>
                      <div className="w-[100px] h-[100px] relative overflow-hidden shrink-0 hidden" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <h1 className="m-0 w-[206px] relative text-inherit font-medium font-inherit flex items-center shrink-0 mq800:text-19xl mq450:text-10xl">{`Work By `}</h1>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-13xl mq1325:flex-wrap mq1325:justify-center">
              <div className="h-[535px] w-[403px] flex flex-col items-start justify-start gap-[22px] max-w-full">
                <img
                  className="self-stretch h-[475px] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="images/rectangle-68@2x.png"
                />
                <div className="w-[373px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                  <h2 className="m-0 relative text-inherit font-normal font-inherit mq800:text-7xl mq450:text-lgi">{`Art Gallery `}</h2>
                </div>
              </div>
              <div className="h-[543px] w-[403px] flex flex-col items-start justify-start gap-[30px] max-w-full">
                <img
                  className="self-stretch h-[475px] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="images/rectangle-90@2x.png"
                />
                <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[63px] mq450:pl-5 mq450:box-border">
                  <h2 className="m-0 relative text-inherit font-normal font-inherit mq800:text-7xl mq450:text-lgi">
                    Craft Works
                  </h2>
                </div>
              </div>
              <div className="h-[535px] w-[403px] flex flex-col items-start justify-start gap-[22px] max-w-full">
                <img
                  className="self-stretch h-[475px] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="images/rectangle-91@2x.png"
                />
                <div className="w-[340px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                  <h2 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[104px] mq800:text-7xl mq450:text-lgi">
                    Sewing
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-darkslategray flex flex-row flex-wrap items-start justify-between pt-2.5 pb-0 pr-9 pl-8 box-border max-w-full gap-[20px] font-inter">
          <div className="w-[189px] flex flex-col items-start justify-start py-[5px] px-[67px] box-border gap-[8.166666666666666px]">
            <div className="flex flex-row items-start justify-start py-0 pr-px pl-[1.5px]">
              <div className="relative font-semibold inline-block min-w-[52px] mq450:text-base">
                Links
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="relative font-extralight inline-block min-w-[55px] mq450:text-base">
                Home
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-0">
              <div className="relative font-extralight inline-block min-w-[56px] shrink-0 [debug_commit:1cbd860] mq450:text-base">
                About
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 pr-0.5 pl-0">
              <div className="relative font-extralight inline-block min-w-[53px] mq450:text-base">
                News
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-0">
              <div className="relative font-extralight inline-block min-w-[63px] shrink-0 [debug_commit:1cbd860] mq450:text-base">
                Events
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 pr-2.5 pl-0">
              <div className="relative font-extralight inline-block min-w-[45px] mq450:text-base">
                Jobs
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-0">
              <div className="relative font-extralight inline-block min-w-[74px] shrink-0 [debug_commit:1cbd860] mq450:text-base">
                Contact
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-0 px-[15px] pb-[17px] gap-[15px]">
            <div className="flex flex-row items-start justify-start py-0 px-8">
              <div className="relative font-semibold inline-block min-w-[120px] mq450:text-base">
                Contact Info
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-10">
              <div className="flex flex-row items-start justify-start py-0 px-0">
                <div className="relative font-extralight inline-block min-w-[106px] shrink-0 [debug_commit:1cbd860] mq450:text-base">
                  (+251) 8131
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 pr-[9px] pl-[9.5px]">
              <div className="flex flex-row items-start justify-start py-0 px-0">
                <div className="relative font-extralight shrink-0 [debug_commit:1cbd860] mq450:text-base">
                  (+251) 979797979
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-0">
              <div className="relative font-extralight shrink-0 [debug_commit:1cbd860] mq450:text-base">
                (+251) 9 321376534
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-0 pb-2.5 pr-[2.599999999999909px] pl-[2.6000000000000227px] gap-[8px] text-center">
            <div className="flex flex-row items-start justify-start py-0 pr-[52px] pl-[52.39999999999998px]">
              <div className="w-[123px] relative font-semibold flex items-center justify-center min-w-[123px] mq450:text-base">
                Social Media
              </div>
            </div>
            <div className="h-6 flex flex-row items-start justify-start gap-[9.96666666666666px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 object-cover min-h-[24px]"
                loading="lazy"
                alt=""
                src="images/akariconsfacebookfill@2x.png"
              />
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="images/vaadinyoutube.svg"
              />
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="images/bitwitter.svg"
              />
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="images/icoutlinetelegram.svg"
              />
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="images/mdilinkedin.svg"
              />
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/riinstagramfill.svg"
              />
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="images/icroundemail.svg"
              />
            </div>
          </div>
          <img
            className="h-[217px] w-[329px] relative object-cover max-w-full"
            loading="lazy"
            alt=""
            src="images/rectangle-92@2x.png"
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
