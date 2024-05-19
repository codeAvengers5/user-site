"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../slices/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const initialState = {
  username: "",
  email: "",
  password: ""
};

const Registration = () => {
  const [users, setUser] = useState(initialState);
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
      toast.error("Registration Failed!");
    } else if (success) {
      toast.success("Registered successful!");
    }
  }, [error, success]);
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      console.log("user", users);
      dispatch(register(users));
    } catch (error) {
      console.log(error);
    }
  };

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
            {" "}
            <p className="mb-[5px] font-secondary font-light">Username</p>
            <div className="rounded-6xs flex flex-row items-start justify-start self-stretch border-[1px] border-solid border-darksalmon bg-whitesmoke px-2.5 py-[15px]">
              <input
                className="relative inline-block h-[17px] w-full bg-[transparent] p-0 text-left font-secondary text-sm text-black [border:none] [outline:none]"
                type="text"
                placeholder="Enter your email"
                name="email"
                value={users.username}
                onChange={onInputChange}
              />
              {/* <CustomErrorViewer
              isShow={errors.email !== ""}
              text={errors.email}
            /> */}
            </div>
          </div>
          <div>
            {" "}
            <p className="mb-[5px] font-secondary font-light">Email</p>
            <div className="rounded-6xs flex flex-row items-start justify-start self-stretch border-[1px] border-solid border-darksalmon bg-whitesmoke px-2.5 py-[15px]">
              <input
                className="relative inline-block h-[17px] w-full bg-[transparent] p-0 text-left font-secondary  text-sm text-black [border:none] [outline:none]"
                type="text"
                placeholder="Enter your email"
                name="email"
                value={users.email}
                onChange={onInputChange}
              />
              {/* <CustomErrorViewer
              isShow={errors.email !== ""}
              text={errors.email}
            /> */}
            </div>
          </div>
          <div>
            {" "}
            <p className="mb-[5px] font-secondary font-light">Password</p>
            <div className="rounded-6xs flex flex-row items-start justify-start self-stretch border-[1px] border-solid border-darksalmon bg-whitesmoke px-2.5 py-[15px]">
              <input
                className="relative inline-block h-[17px] w-full bg-[transparent] p-0 text-left font-secondary text-sm text-black [border:none] [outline:none]"
                type="password"
                placeholder="Enter your password"
                name="password"
                value={users.password}
                onChange={onInputChange}
              />
              {!users.password ? (
                ""
              ) : (
                <PasswordChecklist
                  className="text-sm"
                  rules={["capital", "specialChar", "minLength", "number"]}
                  minLength={8}
                  value={users.password}
                />
              )}
            </div>
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
