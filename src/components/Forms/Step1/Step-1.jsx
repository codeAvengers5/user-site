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
  const [errors, setErrors] = useState({
    event: "",
    time: "",
    date: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // state for sent status
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
  const handleSubmit = e => {
    e.preventDefault();
    if (!formData.event) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        event: "Please select an event.",
      }));
      return;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        event: "",
      }));
    }
    // Validate time selection
    if (!formData.time) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        time: "Please select a time.",
      }));
      return;
    }
    else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        time: "",
      }));
    }

    // Validate date selection
    if (!formData.date) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        date: "Please select a date.",
      }));
      return;
    } else if (formData.date < new Date()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        date: "Please select a future date.",
      }));
      return;

    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        date: "",
      }));
    }
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (isSubmitted) {
      dispatch(
        formStage(2)
      );
      dispatch(
        formEvent({
          event: formData.event,
          time: formData.time,
          date: formData.date
        })
      );
    }
  }, [formData, isSubmitted, dispatch]);

  return (
    <>
      <h2 className="text-center font-primary text-heading_2 font-bold md:text-heading_1">
        {pageTitle}
      </h2>

      <form
        name="form-event"
        id="form-event"
        className="m-[5px]"
        onSubmit={e => handleSubmit(e)}>
        <label
          htmlFor="event"
          className="font-secondary text-base font-medium md:text-heading_2">
          Select Events<span className="required-asterix">*</span>
        </label>
        {errors.event && <div className={`text-[#E71D36] font-bold mb-2 mt-2}`}>
          {errors.event}
        </div>}
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
              <p className="relative mt-2 font-secondary">Wedding</p>
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
              <p className="relative  mt-2 font-secondary">Birthday</p>
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
              <p className="relative  mt-2 font-secondary">Teskar</p>
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
              <p className="relative  mt-2 font-secondary">Graduation</p>
            </div>
          </article>
        </div>
        <div>
          <label
            htmlFor="time"
            className=" font-secondary text-base font-medium md:text-heading_2">
            Select Time and Date<span className="required-asterix">*</span>
          </label>
          <div className="flex w-full flex-col-reverse gap-[80px] md:flex-row">
            {errors.date && <div className={`text-[#E71D36] font-bold mb-2 mt-2}`}>
              {errors.date}
            </div>}
            <div className="date-picker  border-2 border-meke-550 p-1 sm:p-4">

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
              {errors.time && <div className={`text-[#E71D36] font-bold mb-2 mt-2}`}>
                {errors.time}
              </div>}
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
                    className="rounded-8x flex w-[240px] cursor-pointer flex-row items-start justify-start gap-[50px] self-stretch bg-pink px-[10px] py-[7px] shadow-[0px_10px_40px_rgba(0,_0,_0,_0.19)] md:min-w-[280px]">
                    <img
                      className="relative h-[50px] w-[50px] shrink-0 overflow-hidden"
                      loading="lazy"
                      alt=""
                      src="/images/fluentmdl2breakfast.svg"
                    />
                    <div className="flex flex-col items-start justify-start gap-[0.187rem]">
                      <h1 className="relative m-0 inline-block  font-secondary text-base font-normal">
                        Breakfast
                      </h1>
                      <p className="relative inline-block  whitespace-nowrap font-secondary">
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
                    className="rounded-8x flex w-[240px] cursor-pointer flex-row items-start justify-start gap-[50px] self-stretch bg-pink  px-[10px] py-[7px] shadow-[0px_10px_40px_rgba(0,_0,_0,_0.19)] md:w-[280px]">
                    <img
                      className="relative h-[50px] w-[50px] shrink-0 overflow-hidden"
                      loading="lazy"
                      alt=""
                      src="/images/materialsymbolslunchdiningoutline.svg"
                    />
                    <div className="flex flex-col items-start justify-start gap-[0.187rem]">
                      <h1 className="relative m-0 inline-block min-w-[6.75rem] font-secondary text-base font-normal ">
                        Lunch
                      </h1>
                      <p className="relative inline-block min-w-[5.063rem] whitespace-nowrap font-secondary">
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
                    className="rounded-8x flex w-[240px] cursor-pointer flex-row items-start justify-start gap-[50px] self-stretch bg-pink  px-[10px] py-[7px] shadow-[0px_10px_40px_rgba(0,_0,_0,_0.19)] md:w-[280px]">
                    <img
                      className="relative h-[50px] w-[50px] shrink-0 overflow-hidden"
                      loading="lazy"
                      alt=""
                      src="/images/mdidinner.svg"
                    />
                    <div className="flex flex-col items-start justify-start gap-[0.187rem]">
                      <h1 className="relative m-0 inline-block min-w-[6.75rem] font-secondary text-base font-normal">
                        Dinner
                      </h1>
                      <p className="relative inline-block min-w-[5.063rem] whitespace-nowrap font-secondary">
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
