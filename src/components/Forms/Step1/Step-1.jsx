"use client";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { formStage, formEvent } from "../../../slices/eventSlice";
import "./styles.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function FormEvent({ pageTitle, submitButtonText, previousButton }) {
  // redux
  const dispatch = useDispatch();

  // get Redux store values for formUserSignup
  const currentStage = useSelector(state => state.event.FormStage); // for previous button
  const formstageEvent = useSelector(state => state.event.FormEvent.event);
  const formstageTime = useSelector(state => state.event.FormEvent.time);
  const formstageDate = useSelector(state => state.event.FormEvent.date);

  // form values initial state
  const [formData, setFormData] = useState({
    event: formstageEvent || "",
    time: formstageTime || "",
    date: formstageDate || ""
  });

  // form values onchange
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleDate = date => {
    const dateOnly = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );
    setFormData({
      ...formData,
      date: dateOnly
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
        formStage(2) // update formStage
      );
      dispatch(
        formEvent({
          // update formSignup
          event: formData.event,
          time: formData.time,
          date: formData.date
        })
      );
    }
  }, [formData, isSubmitted, dispatch, errors]);
  // console.log(errors, formData)

  return (
    <>
      <h2 className="text-center text-[48px] font-[500]">{pageTitle}</h2>

      <form name="form-event" id="form-event" onSubmit={e => handleSubmit(e)}>
        <label htmlFor="event" className="text-[34px] font-[500]">
          Select Events<span className="required-asterix">*</span>
        </label>
        <div className="mb-[50px] flex flex-wrap gap-[10px]">
          <article className="card1">
            <input
              type="radio"
              id="card1"
              name="event"
              value="weeding"
              checked={formData.event === "weeding"}
              onChange={e => handleChange(e)}
            />
            <div className="card">
              <img
                className="relative h-[100px] w-[100px] shrink-0"
                alt=""
                src="/images/wpfweddingcake.svg"
              />
              <p className="relative mt-2">Wedding</p>
            </div>
          </article>
          <article className="card2">
            <input
              type="radio"
              id="radio"
              name="event"
              value="birthday"
              checked={formData.event === "birthday"}
              onChange={e => handleChange(e)}
            />
            <div className="card">
              <img
                className="relative h-[100px] w-[100px] shrink-0"
                alt=""
                src="/images/twemojibirthdaycake.svg"
              />
              <p className="relative  mt-2">Birthday</p>
            </div>
          </article>
          <article className="card3">
            <input
              type="radio"
              id="card3"
              name="event"
              value="teskar"
              checked={formData.event === "teskar"}
              onChange={e => handleChange(e)}
            />
            <div className="card">
              <img
                className="relative h-[100px] w-[100px] shrink-0"
                alt=""
                src="/images/gameiconsdeadlystrike.svg"
              />
              <p className="relative  mt-2">Teskar</p>
            </div>
          </article>
          <article className="card4">
            <input
              type="radio"
              id="card4"
              name="event"
              value="graduation"
              checked={formData.event === "graduation"}
              onChange={e => handleChange(e)}
            />
            <div className="card">
              <img
                className="relative h-[100px] w-[100px] shrink-0"
                alt=""
                src="/images/graduation-cap-svgrepo-com 1.png"
              />
              <p className="relative  mt-2">Graduation</p>
            </div>
          </article>
        </div>
        {errors.event && <span className="error-message">{errors.event}</span>}

        <div>
          <label htmlFor="time" className="text-[34px] font-[500]">
            Select Time<span className="required-asterix">*</span>
          </label>
          <div className="flex w-full gap-[80px]">
            <div className="date-picker  border-2 border-meke-550 p-4">
              <DatePicker
                name="date"
                selected={formData.date}
                onChange={date => {
                  handleDate(date);
                }}
                dateFormat="yyyy-MM-dd"
                calendarClassName="always-open"
                shouldCloseOnSelect={false}
                inline
                monthsShown={2}
              />
            </div>
            <div className="max-w-[400px]">
              <ul
                id="time"
                className="flex flex-col items-start justify-start gap-[20px]">
                <li className="time">
                  <input
                    type="radio"
                    id="break"
                    value="Breakfast"
                    className="hidden"
                    name="time"
                    checked={formData.time === "Breakfast"}
                    onChange={e => handleChange(e)}
                  />
                  <label
                    htmlFor="break"
                    className="rounded-8x flex w-[280px] cursor-pointer flex-row items-start justify-start gap-[50px] self-stretch bg-pink px-[10px] py-[7px] shadow-[0px_10px_40px_rgba(0,_0,_0,_0.19)]">
                    <img
                      className="relative h-[50px] w-[50px] shrink-0 overflow-hidden"
                      loading="lazy"
                      alt=""
                      src="/images/fluentmdl2breakfast.svg"
                    />
                    <div className="flex flex-col items-start justify-start gap-[0.187rem]">
                      <h1 className="relative m-0 inline-block min-w-[6.75rem] font-secondary text-base font-normal mq450:text-[1.188rem]">
                        Breakfast
                      </h1>
                      <p className="relative inline-block min-w-[5.063rem] whitespace-nowrap font-secondary mq450:text-[1rem]">
                        3:00 AM
                      </p>
                    </div>
                  </label>
                </li>
                <li className="time">
                  <input
                    type="radio"
                    id="lunch"
                    value="Lunch"
                    className="hidden"
                    name="time"
                    checked={formData.time === "Lunch"}
                    onChange={e => handleChange(e)}
                  />
                  <label
                    htmlFor="lunch"
                    className="rounded-8x flex w-[280px] cursor-pointer flex-row items-start justify-start gap-[50px] self-stretch  bg-pink px-[10px] py-[7px] shadow-[0px_10px_40px_rgba(0,_0,_0,_0.19)]">
                    <img
                      className="relative h-[50px] w-[50px] shrink-0 overflow-hidden"
                      loading="lazy"
                      alt=""
                      src="/images/materialsymbolslunchdiningoutline.svg"
                    />
                    <div className="flex flex-col items-start justify-start gap-[0.187rem]">
                      <h1 className="relative m-0 inline-block min-w-[6.75rem] font-secondary text-base font-normal mq450:text-[1.188rem]">
                        Lunch
                      </h1>
                      <p className="relative inline-block min-w-[5.063rem] whitespace-nowrap font-secondary mq450:text-[1rem]">
                        6:00 PM
                      </p>
                    </div>
                  </label>
                </li>
                <li className="time">
                  <input
                    type="radio"
                    id="dinner"
                    value="Dinner"
                    className="hidden"
                    name="time"
                    checked={formData.time === "Dinner"}
                    onChange={e => handleChange(e)}
                  />
                  <label
                    htmlFor="dinner"
                    className="rounded-8x flex w-[280px] cursor-pointer flex-row items-start justify-start gap-[50px] self-stretch  bg-pink px-[10px] py-[7px] shadow-[0px_10px_40px_rgba(0,_0,_0,_0.19)]">
                    <img
                      className="relative h-[50px] w-[50px] shrink-0 overflow-hidden"
                      loading="lazy"
                      alt=""
                      src="/images/mdidinner.svg"
                    />
                    <div className="flex flex-col items-start justify-start gap-[0.187rem]">
                      <h1 className="relative m-0 inline-block min-w-[6.75rem] font-secondary text-base font-normal mq450:text-[1.188rem]">
                        Dinner
                      </h1>
                      <p className="relative inline-block min-w-[5.063rem] whitespace-nowrap font-secondary mq450:text-[1rem]">
                        1:00 PM
                      </p>
                    </div>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="disclaimer-text">
          <span className="required-asterix">*</span> required fields
        </p>

        <div className="btn-array">
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
      </form>
    </>
  );
}

export default FormEvent;
