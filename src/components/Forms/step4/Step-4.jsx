import React from "react";
import Image from "next/image";
import logo from "../../../../public/images/Group72.png";
import axios from "axios";
import Link from "../../../../node_modules/next/link";

function FormPayment({ with_cash, eventId, price }) {
  const handleChapa = e => {
    console.log("clicked chapa");
    e.preventDefault();
    axios
      .post("http://localhost:8000/payment", { eventId })
      .then(res => {
        setTimeout(() => {
          window.location.href = res.data.paymentUrl;
        }, 5000);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div className="m-[40px] mt-[40px] flex min-h-[400px] flex-col items-center justify-center md:mx-[80px]">
      <div className="relative h-[100px] w-[100px] overflow-hidden">
        <Image
          src={logo}
          alt="Logo"
          layout="fill"
          objectFit="cover"
          className="object-top"
        />
      </div>
      <div className="mt-[-20px] flex h-full max-w-full flex-col items-center justify-center rounded bg-[#fcf9f9] px-6 py-16 shadow-lg md:w-[500px]">
        <p className="pb-4 font-primary text-heading_1 font-medium">Success</p>
        <p className="pb-20 font-secondary text-base font-medium">
          Your Event has been Appointed Successfully
        </p>
        {with_cash === true ? (
          <>
            <p>Complete your Payment</p>
            <p>{price}</p>
            <div className="flex flex-row items-start justify-center self-stretch">
              <form onSubmit={handleChapa}>
                <button type="submit">
                  <img
                    src="/images/group-101@2x.png"
                    alt="chapa image"
                    className="relative h-[69px] w-[248.5px] object-cover"
                    loading="lazy"
                  />
                </button>
              </form>
            </div>
          </>
        ) : (
          <>
            <Link
              href="/"
              className="flex cursor-pointer flex-row items-start justify-start rounded-8xs border-none bg-[#E71D36] px-[20px] py-[4px] hover:bg-[#e71d35bb] md:py-[6.5px]">
              <div className="relative inline-block text-center font-secondary text-base font-semibold text-white  md:text-medium">
                Back To Home
              </div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default FormPayment;
