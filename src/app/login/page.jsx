"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../slices/auth";
const Login = () => {
  const [users, setUsers] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const { success, error } = useSelector(state => state.auth);

  useEffect(() => {
    if (error) {
      console.log(error);
    } else if (success) {
      console.log(success);
    }
  }, [error, success]);
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      console.log("user", users);
      dispatch(login(users));
    } catch (error) {
      console.log(error);
    }
  };
  const onInputChange = e => {
    const { name, value } = e.target;
    setUsers({ ...users, [name]: value });
  };

  return (
    <div className="font-Roboto relative h-[1025px] w-full overflow-hidden bg-white text-left text-xl text-darkslategray">
      <b className="absolute left-[824px] top-[259px] text-[48px]">
        LOGIN ACCOUNT
      </b>
      <div className="absolute left-[826.5px] top-[381px] font-medium">
        Username
      </div>
      <div className="absolute left-[826.5px] top-[546px] font-medium">
        Password
      </div>
      <div className="absolute left-[826.5px] top-[440px] h-[70px] w-[488px] shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)]">
        <input
          type="text"
          placeholder="UserName or Email"
          name="email"
          value={users.email}
          onChange={onInputChange}
          className="absolute left-0 top-0 h-[70px] w-[488px] rounded bg-snow px-2 py-1.5"
        />
      </div>
      <div className="absolute left-[826.5px] top-[605px] h-[70px] w-[488px] shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)]">
        <input
          type="password"
          name="password"
          value={users.password}
          onChange={onInputChange}
          className="absolute left-0 top-0 h-[70px] w-[488px] rounded bg-snow px-2 py-1.5"
        />
      </div>
      <div className="absolute left-[827px] top-[720px] flex flex-row justify-between">
        <button
          onClick={handleSubmit}
          className="box-border  flex h-[50px] w-[100px] flex-row items-center justify-center rounded-[10px] bg-[#E71D36] p-2.5 text-[24px] text-white">
          <div className="relative font-medium">Login</div>
        </button>
        <div className=" pl-[190px] font-medium">
          <Link href="/">Already a member?</Link>
        </div>
      </div>
      <img
        className="absolute left-[37px] top-[36px] h-[146px] w-[247px] rounded-[50%] object-cover"
        alt=""
        src="/images/ellipse-10@2x.png"
      />
      <div className="absolute left-[-1808px] top-[2201px] h-[171px] w-[366px] bg-lightsteelblue" />
      <div className="absolute left-[169px] top-[1986px] h-[269px] w-[880px]" />
      <img
        className="absolute left-[0px] top-[148px] h-[877px] w-[695px] object-cover"
        alt=""
        src="images/mobilelogin-1@2x.png"
      />
    </div>
  );
};

export default Login;
