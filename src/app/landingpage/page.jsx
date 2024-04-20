import FrameComponent from "../../components/frame-component";
import ErrorHandler from "../../components/error-handler";
import DataFlow from "../../components/data-flow";

const HomePage = () => {
  return (
    <div className="flex w-[100vm] max-w-full flex-row items-start justify-start tracking-[normal]">
      <section className="relative flex max-w-full flex-1 flex-col items-start justify-start overflow-hidden bg-white text-left font-roboto text-xl text-white">
        <img
          className="absolute left-[0px] right-[0px] top-[163px] !m-[0] h-[422px] w-full max-w-full shrink-0 overflow-hidden object-cover"
          loading="lazy"
          alt=""
          src="images/rectangle-46@2x.png"
        />
        <div className="absolute left-[0px] right-[0px] top-[163px] z-[1] !m-[0] h-[422px] w-full bg-orangered-200" />
        <div className="box-border flex max-w-full flex-row flex-wrap items-start justify-between gap-[20px] self-stretch bg-darkslategray py-[1.5px] pl-8 pr-[35px]">
          <div className="flex w-[647px] max-w-full flex-row items-start justify-start gap-[20px] mq800:flex-wrap">
            <div className="box-border flex h-[38.5px] flex-col items-start justify-start px-0 pb-0 pt-[14.5px]">
              <div className="flex flex-1 flex-row items-start justify-start gap-[8.5px]">
                <img
                  className="relative h-6 min-h-[24px] w-6 shrink-0 overflow-hidden"
                  loading="lazy"
                  alt=""
                  src="images/materialsymbolscall.svg"
                />
                <div className="flex flex-col items-start justify-start px-0 pb-0 pt-px">
                  <div className="relative mq450:text-base">
                    (+251) 979 797979
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start px-0 pb-0 pt-px">
                  <div className="relative inline-block min-w-[27px] mq450:text-base">
                    OR
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border flex w-[62px] flex-col items-start justify-start pb-0 pl-0 pr-[11px] pt-[15.5px]">
              <div className="relative self-stretch mq450:text-base">
                <p className="m-0"> 8131</p>
              </div>
            </div>
            <div className="flex h-[51px] min-w-[195px] flex-1 flex-row items-start justify-between gap-[20px]">
              <div className="relative box-border h-[54px] w-[3px] border-r-[3px] border-solid border-white" />
              <div className="box-border flex h-[42.5px] w-[227px] flex-col items-start justify-start px-0 pb-0 pt-[8.5px]">
                <div className="flex flex-1 flex-row items-start justify-start gap-[10px] self-stretch">
                  <img
                    className="relative h-[34px] w-8 shrink-0 overflow-hidden [debug_commit:1cbd860]"
                    loading="lazy"
                    alt=""
                    src="images/evaemailoutline.svg"
                  />
                  <div className="flex flex-col items-start justify-start px-0 pb-0 pt-[4.2999999999999545px]">
                    <a
                      className="relative shrink-0 text-[inherit] [debug_commit:1cbd860] [text-decoration:underline] mq450:text-base"
                      href="mailto:info@mekedonia.org"
                      target="_blank">
                      info@mekedonia.org
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start px-0 pb-0 pt-[5px]">
            <button className="flex cursor-pointer flex-row items-start justify-start rounded-8xs bg-crimson-200 px-[34.5px] py-[6.5px] [border:none] hover:bg-crimson-100">
              <div className="relative inline-block min-w-[70px] text-left font-inter text-xl font-semibold leading-[28px] text-white mq450:text-base mq450:leading-[22px]">
                Donate
              </div>
            </button>
          </div>
        </div>
        <div className="box-border flex max-w-full flex-row items-start justify-start self-stretch px-8 pb-[179px] pt-0 text-29xl text-black mq1325:box-border mq1325:pb-[75px] mq1125:box-border mq1125:pb-[49px] mq450:box-border mq450:pb-8">
          <div className="flex max-w-full flex-1 flex-col items-start justify-start gap-[34px] mq800:gap-[17px_34px]">
            <div className="box-border flex h-[181.8px] max-w-full flex-row items-start justify-start self-stretch pb-[72.79999999999995px] pl-6 pr-0 pt-0 text-xl">
              <div className="flex max-w-full flex-1 flex-row items-end justify-between gap-[20px] self-stretch">
                <img
                  className="relative h-[109px] w-[185px] rounded-[50%] object-cover"
                  loading="lazy"
                  alt=""
                  src="images/ellipse-10@2x.png"
                />
                <div className="box-border flex w-[711px] max-w-full flex-col items-start justify-end px-0 pb-7 pt-0 mq1125:w-0">
                  <div className="flex flex-row flex-wrap items-start justify-between gap-[20px] self-stretch py-[14.5px] pl-0 pr-1 mq1125:hidden">
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
                    <div className="flex flex-row items-start justify-start py-0 pl-0 pr-[3px]">
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
            <div className="box-border flex w-[703px] max-w-full flex-row items-start justify-start px-[75px] pb-[50px] pt-0 text-white mq800:box-border mq800:pl-[37px] mq800:pr-[37px]">
              <div className="flex max-w-full flex-1 flex-col items-start justify-start gap-[13.200000000000044px]">
                <div className="z-[2] box-border flex w-[432px] max-w-full flex-row flex-wrap items-start justify-start py-2.5 pl-0 pr-5">
                  <h1 className="font-inherit relative m-0 inline-block max-w-full flex-1 text-inherit font-normal leading-[50px] mq800:text-19xl mq800:leading-[40px] mq450:text-10xl mq450:leading-[30px]">
                    Sew Lemardat Sew Mehon Beki nw
                  </h1>
                </div>
                <div className="box-border flex max-w-full flex-row items-start justify-start self-stretch py-0 pl-[11px] pr-0 text-xl">
                  <div className="max-w-full·flex-1·flex-row·flex-wrap·items-start·justify-start·gap-[20px]">
                    <div className="relative·z-[2]·inline-block·min-w-[263px]·max-w-full·flex-1 mq450:text-base">{`Lorem ipsum dolor sit amet consectetur. Tellus velit ultrices bibendum `}</div>
                    <button className="z-[2]·box-border·flex·w-[117px]·cursor-pointer·flex-row·items-start·justify-start·rounded-3xs·border-[3px]·border-solid·border-red-200·bg-[transparent]·px-[19px]·py-[9px]·hover:box-border·hover:border-[3px]·hover:border-solid·hover:border-red-100·hover:bg-red-300">
                      <div className="relative inline-block min-w-[72px] text-left font-inter text-base font-semibold leading-[28px] text-white">
                        About Us
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row flex-wrap items-start justify-center gap-[38px] self-stretch px-0 pb-[50px] pt-0 mq800:gap-[19px]">
              <div className="box-border flex w-[211px] min-w-[137px] flex-col items-start justify-start py-0 pl-0 pr-4">
                <FrameComponent />
              </div>
              <FrameComponent propAlignSelf="unset" />
              <FrameComponent propAlignSelf="unset" />
              <FrameComponent propAlignSelf="unset" />
              <FrameComponent propAlignSelf="unset" />
              <FrameComponent propAlignSelf="unset" />
            </div>
            <div className="box-border flex w-[1313px] max-w-full flex-row items-start justify-center px-5 pb-1.5 pt-0 text-5xl">
              <div className="flex w-[1139px] max-w-full flex-row items-start justify-center gap-[34px] mq1125:flex-wrap mq800:gap-[34px_17px]">
                <img
                  className="relative h-[592px] w-[526px] max-w-full object-cover mq1125:flex-1"
                  loading="lazy"
                  alt=""
                  src="images/rectangle-49@2x.png"
                />
                <div className="box-border flex min-w-[376px] max-w-full flex-1 flex-col items-start justify-start px-0 pb-0 pt-3 mq800:min-w-full">
                  <div className="relative flex h-[566px] shrink-0 items-center self-stretch leading-[28px] mq450:leading-[22px] mq450:text-[lgi]">
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
            <div className="box-border flex max-w-full flex-row items-start justify-start self-stretch px-12 pb-2 pt-0 mq1325:box-border mq1325:pl-6 mq1325:pr-6">
              <div className="flex max-w-full flex-1 flex-col items-start justify-start gap-[37px] mq800:gap-[18px_37px]">
                <div className="box-border flex max-w-full flex-row items-start justify-center self-stretch py-0 pl-[66px] pr-5 mq800:box-border mq800:pl-[33px]">
                  <h1 className="font-inherit relative m-0 flex w-[404px] max-w-full shrink-0 items-center text-inherit font-medium mq800:text-19xl mq450:text-10xl">
                    On Going Project
                  </h1>
                </div>
                <div className="flex w-[1280px] max-w-full flex-col items-start justify-start gap-[25px] overflow-x-auto">
                  <div className="box-border flex w-[1279px] flex-row items-start justify-start gap-[60px] bg-snow px-[49px] pb-[27px] pt-5 shadow-[0px_4px_4px_rgba(255,_0,_0,_0.2)] mq800:box-border mq800:pb-5">
                    <img
                      className="relative h-[426.5px] w-[364px] max-w-full object-cover"
                      loading="lazy"
                      alt=""
                      src="images/rectangle-50@2x.png"
                    />
                    <div className="flex max-w-full flex-1 flex-col items-start justify-start gap-[72.39999999999998px]">
                      <ErrorHandler />
                      <div className="box-border flex w-[586px] max-w-full flex-row items-start justify-start px-9 py-0">
                        <div className="flex max-w-full flex-1 flex-row items-start justify-between gap-[20px] mq800:flex-wrap">
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
                  <div className="box-border flex w-[1280px] flex-row items-start justify-start gap-[60px] bg-snow pb-[27px] pl-[49.3px] pr-[49.200000000000045px] pt-5 shadow-[0px_4px_4px_rgba(255,_0,_0,_0.2)] mq800:box-border mq800:pb-5">
                    <img
                      className="relative h-[426.5px] w-[364px] max-w-full object-cover"
                      alt=""
                      src="images/rectangle-50-1@2x.png"
                    />
                    <div className="flex max-w-full flex-1 flex-col items-start justify-start gap-[72.39999999999998px]">
                      <ErrorHandler propPadding="unset" />
                      <div className="box-border flex w-[587px] max-w-full flex-row items-start justify-start py-0 pl-[36.5px] pr-9">
                        <div className="flex max-w-full flex-1 flex-row items-start justify-between gap-[20px] mq800:flex-wrap">
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
                      <div className="relative hidden h-[100px] w-[100px] shrink-0 overflow-hidden" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-center self-stretch px-5 py-0">
              <h1 className="font-inherit relative m-0 flex w-[206px] shrink-0 items-center text-inherit font-medium mq800:text-19xl mq450:text-10xl">{`Work By `}</h1>
            </div>
            <div className="flex max-w-full flex-row items-start justify-between gap-[20px] self-stretch text-13xl mq1325:flex-wrap mq1325:justify-center">
              <div className="flex h-[535px] w-[403px] max-w-full flex-col items-start justify-start gap-[22px]">
                <img
                  className="relative h-[475px] max-w-full shrink-0 self-stretch overflow-hidden rounded-3xs object-cover"
                  loading="lazy"
                  alt=""
                  src="images/rectangle-68@2x.png"
                />
                <div className="box-border flex w-[373px] max-w-full flex-row items-start justify-center px-5 py-0">
                  <h2 className="font-inherit relative m-0 text-inherit font-normal mq800:text-7xl mq450:text-lgi">{`Art Gallery `}</h2>
                </div>
              </div>
              <div className="flex h-[543px] w-[403px] max-w-full flex-col items-start justify-start gap-[30px]">
                <img
                  className="relative h-[475px] max-w-full shrink-0 self-stretch overflow-hidden rounded-3xs object-cover"
                  loading="lazy"
                  alt=""
                  src="images/rectangle-90@2x.png"
                />
                <div className="flex flex-row items-start justify-center self-stretch py-0 pl-[63px] pr-5 mq450:box-border mq450:pl-5">
                  <h2 className="font-inherit relative m-0 text-inherit font-normal mq800:text-7xl mq450:text-lgi">
                    Craft Works
                  </h2>
                </div>
              </div>
              <div className="flex h-[535px] w-[403px] max-w-full flex-col items-start justify-start gap-[22px]">
                <img
                  className="relative h-[475px] max-w-full shrink-0 self-stretch overflow-hidden rounded-3xs object-cover"
                  loading="lazy"
                  alt=""
                  src="images/rectangle-91@2x.png"
                />
                <div className="box-border flex w-[340px] max-w-full flex-row items-start justify-center px-5 py-0">
                  <h2 className="font-inherit relative m-0 inline-block min-w-[104px] text-inherit font-normal mq800:text-7xl mq450:text-lgi">
                    Sewing
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-border flex max-w-full flex-row flex-wrap items-start justify-between gap-[20px] self-stretch bg-darkslategray pb-0 pl-8 pr-9 pt-2.5 font-inter">
          <div className="box-border flex w-[189px] flex-col items-start justify-start gap-[8.166666666666666px] px-[67px] py-[5px]">
            <div className="flex flex-row items-start justify-start py-0 pl-[1.5px] pr-px">
              <div className="relative inline-block min-w-[52px] font-semibold mq450:text-base">
                Links
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="relative inline-block min-w-[55px] font-extralight mq450:text-base">
                Home
              </div>
            </div>
            <div className="flex flex-row items-start justify-start px-0 py-0">
              <div className="relative inline-block min-w-[56px] shrink-0 font-extralight [debug_commit:1cbd860] mq450:text-base">
                About
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 pl-0 pr-0.5">
              <div className="relative inline-block min-w-[53px] font-extralight mq450:text-base">
                News
              </div>
            </div>
            <div className="flex flex-row items-start justify-start px-0 py-0">
              <div className="relative inline-block min-w-[63px] shrink-0 font-extralight [debug_commit:1cbd860] mq450:text-base">
                Events
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 pl-0 pr-2.5">
              <div className="relative inline-block min-w-[45px] font-extralight mq450:text-base">
                Jobs
              </div>
            </div>
            <div className="flex flex-row items-start justify-start self-stretch px-0 py-0">
              <div className="relative inline-block min-w-[74px] shrink-0 font-extralight [debug_commit:1cbd860] mq450:text-base">
                Contact
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[15px] px-[15px] pb-[17px] pt-0">
            <div className="flex flex-row items-start justify-start px-8 py-0">
              <div className="relative inline-block min-w-[120px] font-semibold mq450:text-base">
                Contact Info
              </div>
            </div>
            <div className="flex flex-row items-start justify-start px-10 py-0">
              <div className="flex flex-row items-start justify-start px-0 py-0">
                <div className="relative inline-block min-w-[106px] shrink-0 font-extralight [debug_commit:1cbd860] mq450:text-base">
                  (+251) 8131
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 pl-[9.5px] pr-[9px]">
              <div className="flex flex-row items-start justify-start px-0 py-0">
                <div className="relative shrink-0 font-extralight [debug_commit:1cbd860] mq450:text-base">
                  (+251) 979797979
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start px-0 py-0">
              <div className="relative shrink-0 font-extralight [debug_commit:1cbd860] mq450:text-base">
                (+251) 9 321376534
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[8px] pb-2.5 pl-[2.6000000000000227px] pr-[2.599999999999909px] pt-0 text-center">
            <div className="flex flex-row items-start justify-start py-0 pl-[52.39999999999998px] pr-[52px]">
              <div className="relative flex w-[123px] min-w-[123px] items-center justify-center font-semibold mq450:text-base">
                Social Media
              </div>
            </div>
            <div className="flex h-6 flex-row items-start justify-start gap-[9.96666666666666px]">
              <img
                className="relative h-6 min-h-[24px] w-6 shrink-0 overflow-hidden object-cover"
                loading="lazy"
                alt=""
                src="images/akariconsfacebookfill@2x.png"
              />
              <img
                className="relative h-6 min-h-[24px] w-6 shrink-0 overflow-hidden"
                loading="lazy"
                alt=""
                src="images/vaadinyoutube.svg"
              />
              <img
                className="relative h-6 min-h-[24px] w-6 shrink-0 overflow-hidden"
                loading="lazy"
                alt=""
                src="images/bitwitter.svg"
              />
              <img
                className="relative h-6 min-h-[24px] w-6 shrink-0 overflow-hidden"
                loading="lazy"
                alt=""
                src="images/icoutlinetelegram.svg"
              />
              <img
                className="relative h-6 min-h-[24px] w-6 shrink-0 overflow-hidden"
                loading="lazy"
                alt=""
                src="images/mdilinkedin.svg"
              />
              <img
                className="relative h-6 min-h-[24px] w-6 shrink-0 overflow-hidden"
                loading="lazy"
                alt=""
                src="/riinstagramfill.svg"
              />
              <img
                className="relative h-6 min-h-[24px] w-6 shrink-0 overflow-hidden"
                loading="lazy"
                alt=""
                src="images/icroundemail.svg"
              />
            </div>
          </div>
          <img
            className="relative h-[217px] w-[329px] max-w-full object-cover"
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
