"use client";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { formStage, formPersonal } from "../../../slices/eventSlice";
import "./styles.scss";

function FormPersonal({ pageTitle, submitButtonText, previousButton }) {
  // redux
  const dispatch = useDispatch();

  // get Redux store values for formUserPrivacy
  const currentStage = useSelector(state => state.event.FormStage); // for previous button
  const formstagefullName = useSelector(
    state => state.event.FormPersonal.fullName
  );
  const formstagephoneNumber = useSelector(
    state => state.event.FormPersonal.phoneNumber
  );

  const state = useSelector(state => state);
  //console.log(stateOutput) // output to console.log

  // form values initial state
  const [formData, setFormData] = useState({
    fullName: formstagefullName || "",
    phoneNumber: formstagephoneNumber || ""
  });

  // form values onchange
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // form validation checks
  const [errors, setErrors] = useState({});

  const [isSubmitted, setIsSubmitted] = useState(false); // state for sent status
  // onsubmit
  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitted) {
      // check if any form errors

      // update Redux Slice
      dispatch(
        formStage(3) // update formStage
      );
      dispatch(
        formPersonal({
          // update formSignup
          fullName: formData.fullName,
          phoneNumber: formData.phoneNumber
        })
      );
    }
  }, [formData, isSubmitted, dispatch, errors]);

  return (
    <>
      <h2 className="text-center text-[48px] font-[500]">{pageTitle}</h2>

      <form
        name="form-personal"
        id="form-personal"
        className="mt-[80px]"
        onSubmit={e => handleSubmit(e)}>
        <div className="mq675:gap-[20px] flex w-[990px] max-w-full flex-col items-end justify-start gap-[41px] text-center font-roboto text-29xl text-black">
          <div className="flex h-[417px] w-[556px] max-w-full flex-col items-start justify-start text-base text-black">
            <div className="rounded-12xs relative box-border flex max-w-full flex-col items-center justify-start gap-[59.8px] self-stretch bg-mistyrose px-5 py-[60px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] mq450:gap-[30px]">
              <div className="flex w-[393px] max-w-full flex-col items-start justify-start gap-[7px]">
                <div className="relative inline-block w-[76px] min-w-[76px]">
                  Full Name
                </div>
                <div className="rounded-6xs flex flex-row items-start justify-start self-stretch border-[1px] border-solid border-darksalmon bg-whitesmoke px-2.5 py-[15px]">
                  <input
                    className="relative inline-block h-[17px] w-full bg-[transparent] p-0 text-left font-inter text-sm text-black [border:none] [outline:none]"
                    placeholder="name"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
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
                      className="relative inline-block h-[17px] w-full bg-[transparent] p-0 text-left font-inter text-sm text-black [border:none] [outline:none]"
                      placeholder="P.no"
                      type="text"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="btn-array flex">
          {previousButton && (
            <p>
              <input
                type="submit"
                value={`Back`}
                onClick={() => dispatch(formStage(currentStage - 1))}
              />
            </p>
          )}
          <p>
            <input type="submit" value={submitButtonText || "Next"} />
          </p>
        </div>
      </form>
    </>
  );
}

export default FormPersonal;
