"use client";
import { ToastContainer, toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { createContactus } from "@/slices/contactusSlice";
const ContactUs = () => {
    const [users, setUsers] = useState({full_name: "", email: "", message: "" });
    const [errors, setErrors] = useState({full_name: "", email: "", message: "" })
    const dispatch = useDispatch();
    const { success, error } = useSelector(state => state.contactus);
    const router = useRouter()

    useEffect(() => {
        if (error) {
            console.log(error);
            toast.error(error);
        } else if (success) {
            toast.success("Thank you for your message");
            router.push('/');
        }
    }, [error, success]);
    const handleSubmit = async e => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        e.preventDefault();
        if (!users.full_name.trim()) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              full_name: "Please enter your name.",
            }));
            return;
          } else {
            setErrors((prevErrors) => ({
              ...prevErrors,
              full_name: "",
            }));
          }
          
          if (!users.email.trim()) {
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
          } else {
            setErrors((prevErrors) => ({
              ...prevErrors,
              email: "",
            }));
          }
          
          if (!users.message.trim()) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              message: "Please enter your message.",
            }));
            return;
          } else {
            setErrors((prevErrors) => ({
              ...prevErrors,
              message: "",
            }));
          }
        try {
            dispatch(createContactus(users));
        } catch (error) {
            console.log(error);
        }

    };
    const onInputChange = e => {
        const { name, value } = e.target;
        setUsers({ ...users, [name]: value });
    };

    return (
        <div className="mx-[40px] my-[10px] flex max-h-[70vh] max-w-full flex-col items-center md:mx-[80px] md:my-[20px] ">
            <div className="mb-[50px]">
                <p className="font-primary text-heading_1 font-medium text-meke-200 md:text-heading_2">
                    Contact Us
                </p>
                <p className="font-secondary text-sm font-light text-black md:text-base">
                    Get in-touch with us
                </p>
            </div>
            <div className="flex h-full w-[500px] max-w-full flex-col-reverse gap-x-[100px] rounded-md bg-pink p-8 shadow-xl md:flex-row">
                <form
                    className="mx-auto flex w-[400px] max-w-full flex-col justify-center gap-y-[20px]"
                    onSubmit={handleSubmit}>
                    <div>
                        <p className="mb-[5px] font-secondary font-light">Full Name</p>
                        {errors.full_name && <div className={`text-[#E71D36] mb-2 mt-2}`}>
                            {errors.full_name}</div>}
                        <div className="rounded-6xs flex flex-row items-start justify-start self-stretch border-[1px] border-solid border-darksalmon bg-whitesmoke px-2.5 py-[15px]">
                            <input
                                className="relative inline-block h-[17px] w-full bg-[transparent] p-0 text-left font-secondary  text-sm text-black [border:none] [outline:none]"
                                type="text"
                                placeholder="Enter your name"
                                name="full_name"
                                value={users.full_name}
                                onChange={onInputChange}
                            />

                        </div>
                    </div>
                    <div>
                        <p className="mb-[5px] font-secondary font-light">Email</p>
                        {errors.email && <div className={`text-[#E71D36] mb-2 mt-2}`}>
                            {errors.email}</div>}
                        <div className="rounded-6xs flex flex-row items-start justify-start self-stretch border-[1px] border-solid border-darksalmon bg-whitesmoke px-2.5 py-[15px]">
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
                        <p className="mb-[5px] font-secondary font-light">Message</p>
                        {errors.message && <div className={`text-[#E71D36] mb-2 mt-2}`}>
                            {errors.message}</div>}
                        <div className="rounded-6xs flex flex-row items-start justify-start self-stretch border-[1px] border-solid border-darksalmon bg-whitesmoke px-2.5 py-[15px]">
                            <textarea
                                className="relative inline-block h-[100px] w-full bg-[transparent] p-0 text-left font-secondary text-sm text-black [border:none] [outline:none]"
                                type="text"
                                placeholder="write your comment"
                                name="message"
                                value={users.message}
                                onChange={onInputChange}
                            />
                        </div>
                    </div>
                    <button className="box-border flex h-[50px] flex-row items-center justify-center rounded-[10px] bg-[#E71D36] p-2.5 font-secondary text-base text-white md:text-[24px]">
                        Send
                    </button>
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

export default ContactUs;
