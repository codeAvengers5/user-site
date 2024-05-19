"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../slices/auth";
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
      console.log("e", error);
    } else if (success) {
      console.log("s", success);
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
    <div className="font-Roboto relative h-[1025px] w-full overflow-hidden border-2 border-meke-200 bg-white text-left text-xl text-darkslategray">
      <b className="absolute left-[827px] top-[233px] text-29xl">
        Create your account
      </b>
      <div className="absolute left-[831px] top-[359px] font-medium">Name</div>
      <div className="absolute left-[831px] top-[497px] font-medium">Email</div>
      <div className="absolute left-[831px] top-[643px] font-medium">
        Password
      </div>

      <div className="absolute left-[831px] top-[398px] h-[70px] w-[488px] shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)]">
        <input
          type="text"
          placeholder="UserName"
          name="username"
          value={users.username}
          onChange={onInputChange}
          className="absolute left-[0px] top-[0px] h-[70px] w-[488px] bg-snow"
        />
      </div>
      <div className="absolute left-[831px] top-[543px] h-[70px] w-[488px] shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)]">
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={users.email}
          onChange={onInputChange}
          className="absolute left-[0px] top-[0px] h-[70px] w-[488px] bg-snow"
        />
      </div>
      <div className="absolute left-[831px] top-[686px] h-[70px] w-[488px] shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)]">
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={users.password}
          onChange={onInputChange}
          className="absolute left-[0px] top-[0px] h-[70px] w-[488px] bg-snow"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-crimson absolute left-[831px] top-[826px] box-border flex h-[76px] w-[492px] flex-row items-center justify-center rounded-[25px] p-2.5 text-5xl text-red-200">
        <div className="relative font-medium">Sign up</div>
      </button>
      <div className="absolute left-[1142px] top-[98px] font-medium">
        Already a member?
      </div>
      <img
        className="absolute left-[37px] top-[36px] h-[146px] w-[247px] rounded-[50%] object-cover"
        alt=""
        src="images/ellipse-10@2x.png"
      />
      <div className="absolute left-[-1808px] top-[2201px] h-[171px] w-[366px] bg-lightsteelblue" />
      <div className="absolute left-[169px] top-[1986px] h-[269px] w-[880px]" />
      <img
        className="absolute left-[0px] top-[148px] h-[877px] w-[695px] object-cover"
        alt=""
        src="images/mobilelogin-1@2x.png"
      />
      <div className="text-crimson absolute left-[1222px] top-[136px] h-6 w-[79px]">
        <Link href="/login">
          <div className="absolute left-[29px] top-[0px] font-medium">
            Login
          </div>
          <img
            className="absolute left-[0px] top-[0px] h-6 w-6 overflow-hidden"
            alt=""
            src="images/mdi_password.svg"
          />
        </Link>
      </div>
    </div>
  );
};

export default Registration;
