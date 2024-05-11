import WeekendYesActiveYesFill from "../../components/weekend-yes-active-yes-fill";
import ActiveYes1 from "../../components/active-yes1";
import ActiveYes from "../../components/active-yes";
import WeekendYes from "../../components/weekend-yes";
import FillYes1 from "../../components/fill-yes1";
import FillYes from "../../components/fill-yes";
import Month202401January from "../../components/month202401-january";
import Month202402February from "../../components/month202402-february";
import Month202403March from "../../components/month202403-march";
import Month202404April from "../../components/month202404-april";
import Month202405May from "../../components/month202405-may";
import Month202406June from "../../components/month202406-june";
import Month202407July from "../../components/month202407-july";
import Month202408August from "../../components/month202408-august";
import Month202409September from "../../components/month202409-september";
import Month202410October from "../../components/month202410-october";
import Month202411November from "../../components/month202411-november";
import Month202412December from "../../components/month202412-december";

const AppointEvent = () => {
  return (
    <div className="relative flex w-full flex-col items-end justify-start gap-[1.812rem] overflow-hidden bg-white leading-[normal] tracking-[normal]">
      <main className="box-border flex max-w-full flex-row items-start justify-end self-stretch pb-[0.687rem] pl-[2.187rem] pr-[2rem] pt-[0rem]">
        <section className="mq750:gap-[2.25rem] flex max-w-full flex-1 flex-col items-end justify-start gap-[4.5rem] text-left font-inter text-[1.5rem] text-black mq450:gap-[1.125rem]">
          <div className="mq750:gap-[2.063rem] mq1275:gap-[4.125rem] flex max-w-full flex-col items-start justify-start gap-[8.25rem] self-stretch mq450:gap-[1rem]">
            <header className="flex max-w-full flex-row items-start justify-end self-stretch text-center font-roboto text-[3rem] text-black">
              <div className="flex w-[78.75rem] max-w-full flex-col items-start justify-start gap-[0.812rem]">
                <div className="relative flex max-w-full flex-row items-start justify-start self-stretch"></div>
                <h1 className="font-inherit relative z-[1] m-0 inline-block w-[18.313rem] whitespace-nowrap text-inherit font-medium">
                  Select Events
                </h1>
              </div>
            </header>
            <div className="flex w-[66.438rem] max-w-full flex-col items-start justify-start">
              <div className="flex flex-col items-end justify-start gap-[0.75rem]">
                <div className="flex flex-row items-start justify-start rounded-xl bg-lavenderblush px-[0.906rem] py-[0.375rem]">
                  <div className="relative inline-block min-w-[0.75rem] mq450:text-[1.188rem]">
                    1
                  </div>
                </div>
                <div className="box-border flex h-[15.438rem] flex-row items-start justify-end py-[0rem] pl-[1.25rem] pr-[0.968rem]">
                  <div className="relative box-border h-[15.75rem] w-[0.313rem] border-r-[5px] border-solid border-darkslateblue" />
                </div>
              </div>
              <div className="mq750:gap-[1.25rem] mq1100:flex-wrap mq1100:gap-[2.563rem] mt-[-0.188rem] flex max-w-full flex-row items-start justify-start gap-[5.125rem] self-stretch">
                <div className="mq750:flex-wrap mq750:gap-[2.25rem] mq750:min-w-full flex max-w-full flex-1 flex-row items-start justify-start gap-[4.5rem] mq450:gap-[1.125rem]">
                  <div className="flex flex-col items-start justify-start px-[0rem] pb-[0rem] pt-[0.937rem]">
                    <div className="flex flex-col items-end justify-start gap-[0.75rem]">
                      <div className="flex flex-row items-start justify-start rounded-xl bg-lavenderblush px-[0.812rem] py-[0.375rem]">
                        <div className="relative inline-block min-w-[0.938rem] mq450:text-[1.188rem]">
                          2
                        </div>
                      </div>
                      <div className="box-border flex h-[15.438rem] flex-row items-start justify-end py-[0rem] pl-[1.25rem] pr-[0.968rem]">
                        <div className="relative box-border h-[15.75rem] w-[0.313rem] border-r-[5px] border-solid border-darkslateblue" />
                      </div>
                      <div className="flex flex-row items-start justify-start rounded-xl bg-lavenderblush px-[0.781rem] py-[0.375rem]">
                        <div className="relative inline-block min-w-[1rem] mq450:text-[1.188rem]">
                          3
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mq750:gap-[1.375rem] mq750:min-w-full flex min-w-[23.625rem] max-w-full flex-1 flex-col items-start justify-start gap-[2.75rem] text-center font-roboto text-[3rem]">
                    <h1 className="font-inherit mq750:text-[2.375rem] relative m-0 inline-block w-[15.938rem] text-inherit font-medium mq450:text-[1.813rem]">
                      Select Time
                    </h1>
                    <div className="mq750:gap-[2rem] mq750:pb-[8.313rem] mq750:box-border mq1100:pt-[1.438rem] mq1100:pb-[12.813rem] mq1100:box-border mq1275:h-auto mq1275:pl-[2rem] mq1275:pr-[2rem] mq1275:box-border box-border flex h-[32.75rem] max-w-full shrink-0 flex-col items-start justify-start gap-[4rem] self-stretch overflow-y-auto border-[1px] border-solid border-cornflowerblue bg-white px-[4rem] pb-[19.75rem] pt-[4rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] mq450:gap-[1rem]">
                      <div className="mq1275:flex-wrap mq1275:justify-center flex w-[76.75rem] max-w-[272%] shrink-0 flex-row items-start justify-between gap-[1.25rem] [debug_commit:1de1738]">
                        <div className="box-border flex w-[21rem] max-w-full shrink-0 flex-row items-start justify-start gap-[1rem] overflow-hidden rounded border-[1px] border-dashed border-blueviolet p-[1rem] mq450:flex-wrap">
                          <WeekendYesActiveYesFill
                            text="00"
                            propBackgroundColor="unset"
                            propPadding="0.343rem 0.312rem"
                            propHeight="unset"
                            propWidth="unset"
                            propFlex="unset"
                            propBorder="unset"
                            propMinWidth="unset"
                            propColor="#b3b3b3"
                            propDisplay="inline-block"
                            propMinWidth1="0.875rem"
                            propAlignSelf="unset"
                            propFlex1="unset"
                            propWidth1="unset"
                          />
                          <WeekendYesActiveYesFill
                            text="00"
                            propBackgroundColor="unset"
                            propPadding="0.343rem 0.312rem"
                            propHeight="unset"
                            propWidth="unset"
                            propFlex="unset"
                            propBorder="unset"
                            propMinWidth="unset"
                            propColor="#17a1fa"
                            propDisplay="inline-block"
                            propMinWidth1="0.875rem"
                            propAlignSelf="unset"
                            propFlex1="unset"
                            propWidth1="unset"
                          />
                          <WeekendYesActiveYesFill
                            text="00"
                            propBackgroundColor="unset"
                            propPadding="0.343rem 0.312rem"
                            propHeight="unset"
                            propWidth="unset"
                            propFlex="unset"
                            propBorder="unset"
                            propMinWidth="unset"
                            propColor="#616161"
                            propDisplay="inline-block"
                            propMinWidth1="0.875rem"
                            propAlignSelf="unset"
                            propFlex1="unset"
                            propWidth1="unset"
                          />
                          <WeekendYesActiveYesFill
                            text="00"
                            propBackgroundColor="unset"
                            propPadding="0.25rem"
                            propHeight="unset"
                            propWidth="unset"
                            propFlex="1"
                            propBorder="1px solid #616161"
                            propMinWidth="1rem"
                            propColor="#616161"
                            propDisplay="inline-block"
                            propMinWidth1="0.875rem"
                            propAlignSelf="unset"
                            propFlex1="unset"
                            propWidth1="unset"
                          />
                          <WeekendYesActiveYesFill
                            text="00"
                            propBackgroundColor="unset"
                            propPadding="0.343rem 0.312rem"
                            propHeight="unset"
                            propWidth="unset"
                            propFlex="unset"
                            propBorder="unset"
                            propMinWidth="unset"
                            propColor="#1270b0"
                            propDisplay="inline-block"
                            propMinWidth1="0.875rem"
                            propAlignSelf="unset"
                            propFlex1="unset"
                            propWidth1="unset"
                          />
                          <WeekendYesActiveYesFill
                            text="00"
                            propBackgroundColor="unset"
                            propPadding="0.25rem"
                            propHeight="unset"
                            propWidth="unset"
                            propFlex="1"
                            propBorder="1px solid #1270b0"
                            propMinWidth="1rem"
                            propColor="#1270b0"
                            propDisplay="inline-block"
                            propMinWidth1="0.875rem"
                            propAlignSelf="unset"
                            propFlex1="unset"
                            propWidth1="unset"
                          />
                          <WeekendYesActiveYesFill
                            text="00"
                            propBackgroundColor="#000"
                            propPadding="0.343rem 0.312rem"
                            propHeight="unset"
                            propWidth="unset"
                            propFlex="unset"
                            propBorder="unset"
                            propMinWidth="unset"
                            propColor="#fff"
                            propDisplay="inline-block"
                            propMinWidth1="0.875rem"
                            propAlignSelf="unset"
                            propFlex1="unset"
                            propWidth1="unset"
                          />
                          <WeekendYesActiveYesFill text="00" />
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[1rem] overflow-hidden rounded border-[1px] border-dashed border-blueviolet p-[1rem]">
                          <ActiveYes1
                            text="00"
                            propHeight="unset"
                            propWidth="unset"
                            propPadding="0.343rem 0.312rem"
                            propColor="#b3b3b3"
                            propDisplay="inline-block"
                            propMinWidth="0.875rem"
                            propAlignSelf="unset"
                            propFlex="unset"
                          />
                          <ActiveYes1 text="00" />
                        </div>
                        <div className="box-border flex h-[3.5rem] w-[6rem] shrink-0 flex-row items-start justify-start gap-[1rem] overflow-hidden rounded border-[1px] border-dashed border-blueviolet p-[1rem]">
                          <ActiveYes
                            text="#"
                            propAlignSelf="stretch"
                            propFlex="1"
                            propPadding="0.343rem 0.531rem"
                            propHeight="unset"
                            propWidth="unset"
                            propColor="#b3b3b3"
                            propAlignSelf1="stretch"
                            propFlex1="1"
                            propDisplay="flex"
                            propMinWidth="unset"
                          />
                          <ActiveYes text="#" />
                        </div>
                        <div className="box-border flex h-[3.5rem] w-[6rem] shrink-0 flex-row items-start justify-start gap-[1rem] overflow-hidden rounded border-[1px] border-dashed border-blueviolet p-[1rem]">
                          <WeekendYes
                            text="Day"
                            propAlignSelf="stretch"
                            propFlex="1"
                            propPadding="0.343rem 0.093rem"
                            propHeight="unset"
                            propWidth="unset"
                            propColor="#b3b3b3"
                            propAlignSelf1="stretch"
                            propFlex1="1"
                            propDisplay="flex"
                            propMinWidth="unset"
                          />
                          <WeekendYes text="Day" />
                        </div>
                        <div className="box-border flex h-[3.5rem] w-[9.25rem] shrink-0 flex-row items-start justify-start gap-[1rem] overflow-hidden rounded border-[1px] border-dashed border-blueviolet p-[1rem]">
                          <FillYes1
                            text="Month"
                            propBorder="unset"
                            propBackgroundColor="unset"
                            propHeight="unset"
                            propAlignSelf="stretch"
                            propFlex="1"
                            propWidth="unset"
                            propColor="#b3b3b3"
                            propAlignSelf1="stretch"
                            propFlex1="1"
                            propDisplay="flex"
                            propMinWidth="unset"
                          />
                          <FillYes1 text="Month" />
                        </div>
                        <div className="box-border flex h-[3.5rem] w-[8.5rem] shrink-0 flex-row items-start justify-start gap-[1rem] overflow-hidden rounded border-[1px] border-dashed border-blueviolet p-[1rem]">
                          <FillYes
                            text="0000"
                            propHeight="unset"
                            propBackgroundColor="unset"
                            propAlignSelf="stretch"
                            propFlex="1"
                            propDebugCommit="unset"
                            propColor="#b3b3b3"
                            propAlignSelf1="stretch"
                            propFlex1="1"
                            propDisplay="flex"
                            propMinWidth="unset"
                          />
                          <FillYes text="0000" />
                        </div>
                      </div>
                      <FillYes
                        text="2024"
                        propHeight="unset"
                        propBackgroundColor="unset"
                        propAlignSelf="unset"
                        propFlex="unset"
                        propDebugCommit="unset"
                        propColor="#b3b3b3"
                        propAlignSelf1="unset"
                        propFlex1="unset"
                        propDisplay="inline-block"
                        propMinWidth="1.75rem"
                      />
                      <div className="flex min-h-[31.5rem] w-[76.75rem] max-w-[272%] shrink-0 flex-row flex-wrap items-start justify-start [debug_commit:1de1738]">
                        <Month202401January />
                        <Month202402February />
                        <Month202403March />
                        <Month202404April />
                        <Month202405May />
                        <Month202406June />
                        <Month202407July />
                        <Month202408August />
                        <Month202409September />
                        <Month202410October />
                        <Month202411November />
                        <Month202412December />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mq1100:flex-1 box-border flex w-[17.875rem] min-w-[17.875rem] flex-col items-start justify-start px-[0rem] pb-[0rem] pt-[5.937rem] text-center mq450:box-border mq450:pt-[1.438rem]">
                  <div className="flex flex-col items-start justify-start gap-[4.375rem] self-stretch mq450:gap-[2.188rem]">
                    <div className="flex flex-row items-start justify-start gap-[3.75rem] self-stretch rounded-8xs bg-pink px-[0.625rem] py-[0.406rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">
                      <div className="flex flex-col items-start justify-start px-[0rem] pb-[0rem] pt-[0.187rem]">
                        <img
                          className="relative h-[3.125rem] w-[3.125rem] shrink-0 overflow-hidden"
                          loading="lazy"
                          alt=""
                          src="images/fluentmdl2breakfast.svg"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[0.187rem]">
                        <h1 className="font-inherit relative m-0 inline-block min-w-[6.75rem] text-inherit font-normal mq450:text-[1.188rem]">
                          Breakfast
                        </h1>
                        <div className="flex flex-row items-start justify-start py-[0rem] pl-[0.812rem] pr-[0.875rem] text-[1.25rem]">
                          <div className="relative inline-block min-w-[5.063rem] whitespace-nowrap mq450:text-[1rem]">
                            3:00 AM
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[3.75rem] self-stretch rounded-8xs bg-pink px-[0.625rem] py-[0.406rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">
                      <div className="flex flex-col items-start justify-start px-[0rem] pb-[0rem] pt-[0.187rem]">
                        <img
                          className="relative h-[3.125rem] w-[3.125rem] shrink-0 overflow-hidden"
                          loading="lazy"
                          alt=""
                          src="images/materialsymbolslunchdiningoutline.svg"
                        />
                      </div>
                      <div className="flex flex-col items-end justify-start gap-[0.187rem]">
                        <div className="flex flex-row items-start justify-end py-[0rem] pl-[0.375rem] pr-[0.25rem]">
                          <h1 className="font-inherit relative m-0 inline-block min-w-[4.375rem] text-inherit font-normal mq450:text-[1.188rem]">
                            Lunch
                          </h1>
                        </div>
                        <div className="relative inline-block min-w-[5rem] whitespace-nowrap text-[1.25rem] mq450:text-[1rem]">
                          6:00 PM
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[3.75rem] self-stretch rounded-8xs bg-pink px-[0.625rem] py-[0.406rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">
                      <div className="flex flex-col items-start justify-start px-[0rem] pb-[0rem] pt-[0.187rem]">
                        <img
                          className="relative h-[3.125rem] w-[3.125rem] shrink-0 overflow-hidden"
                          loading="lazy"
                          alt=""
                          src="images/mdidinner.svg"
                        />
                      </div>
                      <div className="flex flex-col items-end justify-start gap-[0.187rem]">
                        <h1 className="font-inherit relative m-0 inline-block min-w-[4.625rem] text-inherit font-normal mq450:text-[1.188rem]">
                          Dinner
                        </h1>
                        <div className="relative inline-block min-w-[4.75rem] whitespace-nowrap text-[1.25rem] mq450:text-[1rem]">
                          1:00 PM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="flex cursor-pointer flex-row items-start justify-start gap-[1.687rem] rounded-[10px] bg-crimson-200 px-[3.156rem] py-[1.093rem] [border:none]">
            <div className="flex flex-col items-start justify-start px-[0rem] pb-[0rem] pt-[0.187rem]">
              <div className="relative inline-block min-w-[3.438rem] text-left font-inter text-[1.5rem] font-semibold text-white mq450:text-[1.188rem]">
                Next
              </div>
            </div>
            <img
              className="relative h-[2.188rem] min-h-[2.188rem] w-[2.188rem] object-contain"
              alt=""
              src="images/group@2x.png"
            />
          </button>
        </section>
      </main>
    </div>
  );
};

export default AppointEvent;
