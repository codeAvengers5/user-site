"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";
import { formStage, formPayment } from "../../../slices/eventSlice";
import { useState } from "react";
import { useEffect } from "react";

function FormPayment({ pageTitle, previousButton, submitButtonText }) {
  const dispatch = useDispatch();
  const currentStage = useSelector(state => state.event.FormStage); // for previous button
  const formstagepeople = useSelector(state => state.event.FormPayment.people);
  const formstagefoodType = useSelector(
    state => state.event.FormPayment.foodType
  );
  const formstagepay = useSelector(state => state.event.FormPayment.pay);

  // Get Redux Form State and output to JSON format
  const state = useSelector(state => state);
  const stateOutput = `JSON Data Form-Completed: ${JSON.stringify(state, null, 2)}`;
  console.log(stateOutput); // output to console.log

  // form values initial state
  const [formData, setFormData] = useState({
    people: formstagepeople || "",
    foodType: formstagefoodType || "",
    pay: formstagepay || ""
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
  // const validate = (formData) => {

  //   let formErrors = {} // set form errors to none at start

  //   // name
  //   // if (!formData.name) {
  //   //   formErrors.name = "Name required";
  //   // }

  //   // email
  //   const emailRegex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  //   if (!formData.email || !emailRegex.test(formData.email)) {
  //     formErrors.email = 'Valid Email required';
  //   }

  //   // password
  //   const passwordRegex = new RegExp('(?=.*[a-z])+(?=.*[A-Z])+(?=.*[0-9])+(?=.{10,})')
  //   if (!formData.password || !passwordRegex.test(formData.password)) {
  //     formErrors.password = 'The minimum password length is 10 characters and must contain at least 1 lowercase letter, 1 uppercase letter and 1 number)';
  //     //console.log(formData.password.length)
  //   }

  //   return formErrors
  // }

  const [isSubmitted, setIsSubmitted] = useState(false); // state for sent status
  // onsubmit
  const handleSubmit = e => {
    e.preventDefault(); // stop form submission
    // setErrors(validate(formData)) // check errors
    setIsSubmitted(true); // update submit status
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitted) {
      // check if any form errors

      // update Redux Slice
      dispatch(
        formStage(3) // update formStage
      );
      dispatch(
        formPayment({
          // update formSignup
          people: formData.people,
          foodType: formData.foodType,
          pay: formData.pay
        })
      );
    }
  }, [formData, isSubmitted, dispatch, errors]);

  return (
    <>
      <h2 className="text-center text-[48px] font-[500]">{pageTitle}</h2>

      <form
        name="form-payment"
        id="form-payment"
        className="mt-[80px] w-[990px] items-end"
        onSubmit={handleSubmit}>
        <div className="mq675:gap-[20px] flex w-[990px] max-w-full flex-col items-end justify-start font-roboto text-29xl text-black">
          <div className="rounded-12xs flex w-[556px] max-w-full flex-col items-start justify-start gap-[71.7px] bg-mistyrose px-[53.5px] py-[60px] text-center text-base text-black shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] mq450:gap-[18px]">
            {/* <form> */}
            <div className="mb-[20px] flex flex-col items-start justify-start gap-[7.3px] self-stretch">
              <div className="relative inline-block">
                Number of People (Minimum of 200)
              </div>
              <div className="rounded-6xs flex flex-row items-start justify-start self-stretch border-[1px] border-solid border-darksalmon bg-whitesmoke px-2.5 py-[15px]">
                <input
                  className="relative inline-block h-[17px] w-full bg-[transparent] p-0 text-left font-inter text-sm text-black [border:none] [outline:none]"
                  placeholder="100"
                  type="number"
                  name="people"
                  value={formData.people}
                  onChange={e => handleChange(e)}
                />
              </div>
            </div>
            <div className="mb-[10px] flex flex-col items-start justify-start gap-[7.3px] self-stretch">
              <label htmlFor="content" className="relative inline-block">
                Fasting or Non-fasting
              </label>
              <select
                id="content"
                name="foodType"
                value={formData.foodType}
                onChange={e => handleChange(e)}
                className="text-gray-900 focus:border-daksalmon dark:border-gray-600 dark:placeholder-gray-400 w-full border border-darksalmon bg-whitesmoke px-3 py-3 text-sm focus:ring-darksalmon dark:bg-red-100 dark:text-white dark:focus:border-red-100 dark:focus:ring-red-100">
                <option selected>select</option>
                <option value="non">Non-fasting</option>
                <option value="fasting">Fasting</option>
              </select>
            </div>
            {/* </form> */}

            <div className="box-border flex w-full flex-row items-start justify-end self-stretch px-1 py-0">
              <div className="flex w-full flex-col items-start justify-start gap-[21.4px]">
                <div className="relative inline-block">With Cash or Food</div>
                <div className="text-mini box-border flex max-w-full flex-row items-start justify-start self-stretch py-0 pl-[7px] pr-0 text-left">
                  <div className="box-border flex w-full flex-row flex-wrap items-start justify-between gap-[20px]">
                    <div className="flex items-center">
                      <input
                        id="inline-radio"
                        type="radio"
                        value="cash"
                        name="pay"
                        onChange={e => handleChange(e)}
                        checked={formData.pay === "cash"}
                        className="text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 focus:ring-2"
                      />
                      <label
                        htmlFor="inline-radio"
                        className="text-gray-900 dark:text-gray-300 ms-2 text-sm font-medium">
                        cash
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="inline-2-radio"
                        type="radio"
                        value="food"
                        name="pay"
                        onChange={e => handleChange(e)}
                        checked={formData.pay === "food"}
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
            <div className="flex flex-row items-start justify-center self-stretch">
              <img
                className="relative h-[69px] w-[248.5px] object-cover"
                loading="lazy"
                alt=""
                src="/images/group-101@2x.png"
              />
            </div>
          </div>
        </div>
      </form>

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
          <input type="submit" value={submitButtonText || "Submit"} />
        </p>
      </div>
    </>
  );
}

export default FormPayment;
