"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "../../../node_modules/next/navigation";
import { forgotPassword, resetState } from "@/slices/auth";
export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [successful, setSuccessful] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const { loading, success, error } = useSelector(state => state.auth);

  const handleSubmit = e => {
    e.preventDefault();

    if (!email) {
      return;
    }

    dispatch(forgotPassword({ email: email }))
      .then(() => {
        setSuccessful(true);
      })
      .catch(() => {
        setSuccessful(false);
      });
  };

  useEffect(() => {
    return () => {
      dispatch(resetState());
    };
  }, [dispatch]);

  useEffect(() => {
    if (success) {
      router.push("/verify");
    }
  }, [success]);

  return (
    <div className="mx-auto flex h-screen min-h-screen items-center justify-center px-6 py-8 lg:py-0">
      <div className="w-full rounded-md bg-white p-6 shadow-lg sm:max-w-md">
        <h1 className="mb-6 text-center text-2xl font-bold text-bt_primary">
          Forgot Password
        </h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="text-gray-700 mb-2  block  text-base"
              htmlFor="email">
              Email
            </label>
            <input
              className="border-gray-300 focus:border-blue-500 w-full rounded-md border px-3 py-2 focus:outline-none"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <button className="flex w-[100px] cursor-pointer flex-row items-start justify-start rounded-8xs bg-[#E71D36] px-[10px] py-[3px] shadow-lg [border:none]  hover:border-2 md:py-[6.5px]">
            <div className="relative inline-block w-[100px] text-center font-inter text-xl font-semibold leading-[28px] text-white mq450:text-base mq450:leading-[22px]">
              send
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
