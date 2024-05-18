import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";
import { formStage, formInfo, createEventappoint } from "../../../slices/eventSlice";
import FormPayment from '../step4/Step-4';
function FormInfo({ pageTitle, previousButton, submitButtonText }) {
  const dispatch = useDispatch();
  const currentStage = useSelector((state) => state.event.FormStage);
  const formEvent = useSelector((state) => state.event.FormEvent);
  const formPersonal = useSelector((state) => state.event.FormPersonal);
  const formstagepeople = useSelector((state) => state.event.FormInfo.people);
  const formstagefoodType = useSelector((state) => state.event.FormInfo.foodType);
  const formstagepay = useSelector((state) => state.event.FormInfo.pay);


  const [formData, setFormData] = useState({
    people: formstagepeople || "",
    foodType: formstagefoodType || "",
    pay: formstagepay || ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [eventId, setEventId] = useState(null);
  const [showFormPayment, setShowFormPayment] = useState(false);
  const [cash, setCash] = useState(formData.pay)
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitted(true);
    if (Object.keys(errors).length === 0 && isSubmitted) {
      // dispatch(formStage(4));
      dispatch(
        formInfo({
          people: formData.people,
          foodType: formData.foodType,
          pay: formData.pay,
        })
      );

      try {
        const eventData = {
          event_type: formEvent.event,
          no_of_ppl: formData.people,
          full_name: formPersonal.fullName,
          fasting: formData.foodType,
          phone_no: formPersonal.phoneNumber,
          date_of_event: formEvent.date,
          food_time: formEvent.time,
          with_cash: formData.pay,
        };


        const response = await dispatch(createEventappoint(eventData));
        console.log(response.payload);
        setEventId(response.payload._id);
        setCash(response.payload.with_cash)
        setShowFormPayment(true);
      } catch (error) {
        console.error("Failed to create event: ", error);
      }
    }
  };
  let price;
  if (formData.pay) {
    if (formData.foodType) {
      price = formData.people * 45;
    } else {
      price = formData.people * 75;
    }
  }
  return (
    <>
      {showFormPayment && isSubmitted ? (
        <FormPayment with_cash={cash} eventId={eventId} price={price}/>
      ) : (
        <div>
          <h2 className="text-center text-[48px] font-[500]">{pageTitle}</h2>
          <form
            name="form-info"
            id="form-info"
            className="mt-[80px] w-[990px] items-end"
            onSubmit={e => handleSubmit(e)}
          >
            {/* Form Fields */}
            <div className="mq675:gap-[20px] flex w-[990px] max-w-full flex-col items-end justify-start font-roboto text-29xl text-black">
              <div className="rounded-12xs flex w-[556px] max-w-full flex-col items-start justify-start gap-[71.7px] bg-mistyrose px-[53.5px] py-[60px] text-center text-base text-black shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] mq450:gap-[18px]">
                {/* Number of People */}
                <div className="mb-[20px] flex flex-col items-start justify-start gap-[7.3px] self-stretch">
                  <div className="relative inline-block">Number of People (Minimum of 200)</div>
                  <div className="rounded-6xs flex flex-row items-start justify-start self-stretch border-[1px] border-solid border-darksalmon bg-whitesmoke px-2.5 py-[15px]">
                    <input
                      className="relative inline-block h-[17px] w-full bg-[transparent] p-0 text-left font-inter text-sm text-black [border:none] [outline:none]"
                      placeholder="100"
                      type="number"
                      name="people"
                      value={formData.people}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {/* Food Type */}
                <div className="mb-[10px] flex flex-col items-start justify-start gap-[7.3px] self-stretch">
                  <label htmlFor="content" className="relative inline-block">Fasting or Non-fasting</label>
                  <select
                    id="content"
                    name="foodType"
                    value={formData.foodType}
                    onChange={handleChange}
                    className="text-gray-900 focus:border-darksalmon w-full border border-darksalmon bg-whitesmoke px-3 py-3 text-sm focus:ring-darksalmon"
                  >
                    <option defaultValue>select</option>
                    <option value={false}>Non-fasting</option>
                    <option value={true}>Fasting</option>
                  </select>
                </div>
                {/* Payment Method */}
                <div className="box-border flex w-full flex-row items-start justify-end self-stretch px-1 py-0">
                  <div className="flex w-full flex-col items-start justify-start gap-[21.4px]">
                    <div className="relative inline-block">With Cash or Food</div>
                    <div className="text-mini box-border flex max-w-full flex-row items-start justify-start self-stretch py-0 pl-[7px] pr-0 text-left">
                      <div className="box-border flex w-full flex-row flex-wrap items-start justify-between gap-[20px]">
                        <div className="flex items-center">
                          <input
                            id="inline-radio"
                            type="radio"
                            value={true}
                            name="pay"
                            onChange={handleChange}
                            checked={formData.pay === "true"}
                            className="text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 h-4 w-4 focus:ring-2"
                          />
                          <label htmlFor="inline-radio" className="text-gray-900 ms-2 text-sm font-medium">Cash</label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="inline-2-radio"
                            type="radio"
                            value={false}
                            name="pay"
                            onChange={handleChange}
                            checked={formData.pay === "false"}
                            className="text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 h-4 w-4 focus:ring-2"
                          />
                          <label htmlFor="inline-2-radio" className="text-gray-900 ms-2 text-sm font-medium">Food</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Submit Buttons */}
            <div className="btn-array flex pt-[30px]">
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
        </div>
      )} </>
  );
}

export default FormInfo;
