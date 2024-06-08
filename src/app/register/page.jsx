"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../slices/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dynamic from "../../../node_modules/next/dynamic";
import { useRouter } from "../../../node_modules/next/navigation";
import { CustomErrorViewer } from "@/components/errorviewer";
import { validate } from "@/utils/validate";
const PasswordChecklist = dynamic(() => import("react-password-checklist"), {
  ssr: false
});
const initialState = {
  username: "",
  email: "",
  password: ""
};

const Registration = () => {
  const router = useRouter();
  const [users, setUser] = useState(initialState);
  const [errors, setErrors] = useState({ error: null, username: "", email: "", password: "" })
  const dispatch = useDispatch();
  const onInputChange = e => {
    const { name, value } = e.target;
    setUser({ ...users, [name]: value });
  };

  const { user, success, valid, isLoggedIn, error, msg } = useSelector(
    state => state.auth
  );

  useEffect(() => {
    if (error) {
      setErrors({ error: error })
      toast.error(errors.error)
      return;
    }
  }, [error, success]);
  const handleSubmit = async e => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!users.username) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: "Please enter your UserName.",
      }));
      return;
    } 
    if (!users.email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter your email.",
      }));
      return;
    } else if (!emailRegex.test(users.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email.",
      }));
      return;
    }
    else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "",
      }));
    }
    if (!users.password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Please enter your password.",
      }));
      return;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "",
      }));
    }
    try {
      dispatch(register(users));
    } catch (error) {
      console.log(error);
    }
  };
  if (success) {
    // console.log("success");
    router.push("/confirmemail");
  }

  return (
    <div className="mx-[40px] my-[10px] flex max-h-[70vh] max-w-full flex-col items-center md:mx-[80px] md:my-[20px] ">
      <div className="mb-[50px]">
        <p className="font-primary text-heading_1 font-medium text-meke-200 md:text-heading_2">
          Create your account
        </p>
      </div>
      <div className="flex h-[500px] w-[500px] max-w-full flex-col-reverse gap-x-[100px] rounded-md bg-pink bg-opacity-[10%] p-8 shadow-xl md:flex-row">
        <form
          className="mx-auto flex w-[400px] max-w-full flex-col justify-center gap-y-[20px]"
          onSubmit={handleSubmit}>
          <div>
            <p className="mb-[5px] font-secondary font-light">Username</p>
            <div className="rounded-6xs flex flex-row items-start justify-start self-stretch border-[1px] border-solid border-darksalmon bg-whitesmoke px-2.5 py-[15px]">
            {errors.username && <div className={`text-[#E71D36] mb-2 mt-2}`}>
              {errors.username}</div>}
              <input
                className="relative inline-block h-[17px] w-full bg-[transparent] p-0 text-left font-secondary text-sm text-black [border:none] [outline:none]"
                type="text"
                placeholder="Enter your email"
                name="username"
                value={users.username}
                onChange={onInputChange}
              />

            </div>
          </div>
          <div>
            <p className="mb-[5px] font-secondary font-light">Email</p>
            <div className="rounded-6xs flex flex-row items-start justify-start self-stretch border-[1px] border-solid border-darksalmon bg-whitesmoke px-2.5 py-[15px]">
            {errors.email && <div className={`text-[#E71D36] mb-2 mt-2}`}>
              {errors.email}</div>}
              <input
                className="relative inline-block h-[17px] w-full bg-[transparent] p-0 text-left font-secondary  text-sm text-black [border:none] [outline:none]"
                type="text"
                placeholder="Enter your email"
                name="email"
                value={users.email}
                onChange={onInputChange}
              />

            </div>
          </div>
          <div>
            <p className="mb-[5px] font-secondary font-light">Password</p>
            <div className="rounded-6xs flex flex-row items-start justify-start self-stretch border-[1px] border-solid border-darksalmon bg-whitesmoke px-2.5 py-[15px]">
            {errors.password && <div className={`text-[#E71D36] mb-2 mt-2}`}>
              {errors.password}</div>}
              <input
                className="relative inline-block h-[17px] w-full bg-[transparent] p-0 text-left font-secondary text-sm text-black [border:none] [outline:none]"
                type="password"
                placeholder="Enter your password"
                name="password"
                value={users.password}
                onChange={onInputChange}
              />

            </div> 
            {/* {!users.password ? (
              ""
            ) : (
              <PasswordChecklist
                className="text-sm"
                rules={["capital", "specialChar", "minLength", "number"]}
                minLength={8}
                value={users.password}
              />
            )} */}
          </div>
          <button className="box-border flex h-[50px] flex-row items-center justify-center rounded-[10px] bg-[#E71D36] p-2.5 font-secondary text-base text-white md:text-[24px]">
            Signup
          </button>
          <div className="text-center font-secondary text-sm font-light">
            Already have an account?
            <Link href="/login" className="font-semibold text-meke-100">
              {" "}
              Login
            </Link>
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        className="absolute right-0 top-0 mt-20 w-[40px] max-w-sm p-4"
      />
    </div>
  );
};

export default Registration;
