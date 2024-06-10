"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
const API_URI = process.env.NEXT_PUBLIC_API_URI

const ConfirmEmail = () => {
  const [confirmationCode, setConfirmationCode] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  // const [errors, setErrors] = useState({ error: null, email: "" })

  const handleSubmit = async e => {
    e.preventDefault();
    if (!confirmationCode) {
      setMessage("Please enter confirmation Code")
    }
    try {
      const res = await fetch(API_URI + "confirmemail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ confirmationCode })
      });
      const data = await res.json();
      console.log(data.success);
      if (data && data.success === true) {
        router.push("/login");
        console.log("login");
        setMessage("Email confirmed successfully!");
     
      } else {
        setMessage(data.message || "Invalid confirmation code.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className=" w-full  max-w-md rounded-lg bg-pink p-12 shadow-lg">
        <h1 className="mb-10 text-center text-2xl font-bold">
          Confirm Your Email
        </h1>
        <form onSubmit={handleSubmit}>
          {message && <p className={`text-[#E71D36] mb-2 mt-2}`}>{message}</p>}

          <label
            htmlFor="confirmationCode"
            className="text-gray-700 mb-2 block">
            Confirmation Code
          </label>
          <input
            type="text"
            id="confirmationCode"
            value={confirmationCode}
            onChange={e => setConfirmationCode(e.target.value)}
            className="focus:ring-indigo-500 mb-4 w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2"
            required
          />
          <button
            type="submit"
            className="w-full rounded-xl bg-[#E71D36] py-2 text-white transition duration-300 hover:bg-[#E71D36]">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConfirmEmail;
