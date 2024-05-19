"use client";
import React from "react";
import { useSelector } from "react-redux";
import LazyLoad from "react-lazyload";
import "./style.scss";
import FormEvent from "@/components/Forms/Step1/Step-1";
import FormPersonal from "@/components/Forms/step2/Step-2";
import FormPayment from "@/components/Forms/step3/Step-3";

const AppointEvent = () => {
  const { FormStage } = useSelector(state => state.event);

  return (
    <div className="w-full max-w-[100vw]">
      <section className="m-[40px] mt-[40px] min-h-[700px] max-w-full p-[20px] md:mx-[80px]">
        <section className="flex items-center justify-start">
          {/* When adding/removing components, update the progress bar below */}
          <LazyLoad once>
            <div className="progressbar">
              <div
                className={
                  FormStage === 1 || FormStage === 2 || FormStage === 3
                    ? "progress-step progress-step-active"
                    : "progress-step"
                }></div>
              <div
                className={
                  FormStage === 2 || FormStage === 3
                    ? "progress-step progress-step-active"
                    : "progress-step"
                }></div>
              <div
                className={
                  FormStage === 3
                    ? "progress-step progress-step-active"
                    : "progress-step"
                }></div>
            </div>
          </LazyLoad>
          <div className="ml-[200px] w-full">
            {FormStage === 1 && (
              // Signup Page
              <LazyLoad once>
                <div className="wrap">
                  <FormEvent
                    pageTitle={"Event Information"} // form page stage title
                    submitButtonText={"Next"} // submit next button display text
                    previousButton={false} // show/hide previous button
                  />
                </div>
              </LazyLoad>
            )}

            {FormStage === 2 && (
              // Privacy Page
              <LazyLoad once>
                <div className="wrap">
                  <FormPersonal
                    pageTitle={"Personal Information"} // form page stage title
                    submitButtonText={"Next"} // submit next button display text
                    previousButton={true} // show/hide previous button
                  />
                </div>
              </LazyLoad>
            )}

            {FormStage === 3 && (
              // Completion Page
              <LazyLoad once>
                <div className="wrap">
                  <FormPayment
                    pageTitle={"Payment Information"}
                    submitButtonText={"Submit"}
                    previousButton={true} // form page stage title
                  />
                </div>
              </LazyLoad>
            )}
          </div>
        </section>
      </section>
    </div>
  );
};

export default AppointEvent;
