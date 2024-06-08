"use client";
import { deleteExistingEvent, fetchEvent, getEventById } from '@/slices/eventSlice';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import DeleteConfirmationModal from '@/components/deleteconfirm';
import { fetchJob } from '@/slices/jobSlice';
import { useRouter } from '../../../node_modules/next/navigation';
const API_URI = process.env.NEXT_PUBLIC_API_URI

export default function page() {
    const [jobPosts, setJobPosts] = useState([{
        title: "",
        closingDate: "",
        status: ""
    }]);
    const [selectedId, setSelectedId] = useState("")
    const [showConfirmationModal, setShowConfirmationModal] = useState(false)
    const dispatch = useDispatch();
    const { eventData } = useSelector(state => state.event);
    const { jobApply } = useSelector(state => state.jobApply);

    const router = useRouter();
    useEffect(() => {
        dispatch(fetchEvent());
        dispatch(fetchJob());
    }, [dispatch]);

    const handleChapa = (e, eventId) => {
        e.preventDefault();
        axios
            .post(API_URI + "payment", { eventId }, {
                withCredentials: true
            })
            .then(res => {
                setTimeout(() => {
                    window.location.href = res.data.paymentUrl;
                }, 30000);
            })
            .catch(error => {
                console.log(error);
            });
    };
    const handleDelete = eventId => {
        setSelectedId(eventId);
        setShowConfirmationModal(true);
    };
    const handleEdit = eventId => {
        dispatch(getEventById(eventId));
        router.push("/events/eventappoint");
    }
    const confirmDeleteEventPost = async () => {
        try {
            dispatch(deleteExistingEvent(selectedId));
            setShowConfirmationModal(false);
            setTimeout(() => {
                window.location.reload();
            }, 3500);
        } catch (error) {
            console.log("Error deleting event:", error);
            setShowConfirmationModal(false);
        }
    };

    const cancelDeleteEventPost = () => {
        setShowConfirmationModal(false);
    };

    const columns = [
        { title: "Job Title", key: "title" },
        {
            title: "Closing Date",
            key: "closingDate",
            render: (column, row) => {
                const closingDate = new Date(row.closingDate);
                const formattedDate = `${closingDate.getMonth() + 1}/${closingDate.getDate()}/${closingDate.getFullYear()}`;
                return formattedDate;
            }
        },
        {
            title: "Status",
            key: "status",
        }
    ];
    const columns1 = [
        { title: "Event Type", key: "event_type" },
        { title: "Num_of_ppl", key: "no_of_ppl" },
        { title: "Time", key: "food_time" },
        {
            title: "Event Date",
            key: "date_of_event",
            render: (column, row) => {
                const closingDate = new Date(row.date_of_event);
                const formattedDate = `${closingDate.getMonth() + 1}/${closingDate.getDate()}/${closingDate.getFullYear()}`;
                return formattedDate;
            }
        },
        {
            title: "Payment Status",
            key: "paymentStatus",
        },
        {
            title: "Action",
            key: "status",
            render: (column, row) => {
                if (row.paymentStatus === "pending") {
                    return (
                        <div className="flex flex-row items-center justify-center self-stretch space-x-4">
                            <form onSubmit={(e) => handleChapa(e, row._id)}>
                                <button type="submit">
                                    <img
                                        src="/images/group-101@2x.png"
                                        alt="chapa image"
                                        className="h-[30px] w-[30px] object-cover sm:h-[40px] sm:w-[150px]"
                                        loading="lazy"
                                    />
                                </button>
                            </form>

                            <button
                                onClick={() => handleEdit(row._id)}
                                className="flex min-w-[100px] gap-[5px]">
                                <FaEdit size={24} className="rounded text-bt_secondary" />
                            </button>
                            <button
                                onClick={() => handleDelete(row._id)}
                                className="flex min-w-[100px] gap-[5px]">
                                <MdDelete size={24} className="rounded text-bt_tertiary" />
                            </button>

                        </div>
                    );
                }
                else if (row.paymentStatus === "with_food") {
                    return (
                        <div className="flex flex-row items-center justify-center self-stretch space-x-4">
                            <button
                                onClick={() => handleEdit(row._id)}
                                className="flex min-w-[100px] gap-[5px]">
                                <FaEdit size={24} className="rounded text-bt_secondary" />
                            </button>
                            <button
                                onClick={() => handleDelete(row._id)}
                                className="flex min-w-[100px] gap-[5px]">
                                <MdDelete size={24} className="rounded text-bt_tertiary" />
                            </button>

                        </div>
                    );
                }
                else {
                    <></>
                }
            }
        }
    ];
    return (
        <div className="mx-[40px] md:mx-[80px]">
            <div className="mb-[30px] flex flex-wrap gap-[100px] md:flex-row">
                <div className="flex flex-row justify-between">
                    <div className="container mx-auto px-4">
                        <div className="p-2 font-primary text-heading_2 font-bold md:text-heading_1">
                            Jobs You have Applied
                        </div>
                        <div className="flex flex-col justify-between xl:flex-row">
                            <div>
                                <div className="overflow-x-auto">
                                    <table className="w-[900px] max-w-full table-auto border-separate border-spacing-x-0 font-secondary text-small  font-regular text-black md:text-base">
                                        <colgroup>
                                            {columns.map((_, index) => (
                                                <col key={`col-${index}`} className="w-auto" />
                                            ))}
                                        </colgroup>
                                        <thead className="bg-meke-500">
                                            <tr>
                                                {columns.map((column, index) => (
                                                    <th
                                                        key={`headCell-${index}`}
                                                        className="!z-0 bg-black px-2 py-[15px] text-left font-secondary font-regular text-white">
                                                        {column.title}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {(!jobApply.length) ? (
                                                <tr>
                                                    <td
                                                        colSpan={columns.length}
                                                        className="font-secondary text-bt_tertiary">
                                                        No jobs found
                                                    </td>
                                                </tr>
                                            ) : (
                                                jobApply?.map((row, index) => (
                                                    <tr
                                                        key={`row-${index}`}
                                                        className="bg-[#FFF2F2] hover:opacity-[70%]">
                                                        {columns.map((column, index2) => {
                                                            const value = column.render
                                                                ? column.render(column, row)
                                                                : row[column.key];
                                                            return (
                                                                <td
                                                                    key={`cell-${index2}`}
                                                                    className={`px-2 py-[15px]`}>
                                                                    {value}
                                                                </td>
                                                            );
                                                        })}
                                                    </tr>
                                                ))
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[50px]">
                    <div className="container mx-auto px-4">
                        <div className="p-2 font-primary text-heading_2 font-bold md:text-heading_1">
                            Events you have Appointed
                        </div>
                        <div className="flex flex-col justify-between xl:flex-row">
                            <div>
                                <div className="overflow-x-auto">
                                    <table className="w-[900px] max-w-full table-auto border-separate border-spacing-x-0 font-secondary text-small  font-regular text-black md:text-base">
                                        <colgroup>
                                            {columns1.map((_, index) => (
                                                <col key={`col-${index}`} className="w-auto" />
                                            ))}
                                        </colgroup>
                                        <thead className="bg-meke-500">
                                            <tr>
                                                {columns1.map((column, index) => (
                                                    <th
                                                        key={`headCell-${index}`}
                                                        className="!z-0 bg-black px-2 py-[15px] text-left font-secondary font-regular text-white">
                                                        {column.title}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {(!eventData.length) ? (
                                                <tr>
                                                    <td
                                                        colSpan={columns1.length}
                                                        className="font-secondary text-bt_tertiary">
                                                        No Event Appointed yet
                                                    </td>
                                                </tr>
                                            ) : (
                                                eventData.map((row, index) => (
                                                    <tr
                                                        key={`row-${index}`}
                                                        className="bg-[#FFF2F2] hover:opacity-[70%]">
                                                        {columns1.map((column, index2) => {
                                                            const value = column.render
                                                                ? column.render(column, row)
                                                                : row[column.key];
                                                            return (
                                                                <td
                                                                    key={`cell-${index2}`}
                                                                    className={`px-2 py-[15px]`}>
                                                                    {value}
                                                                </td>
                                                            );
                                                        })}
                                                    </tr>
                                                ))
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DeleteConfirmationModal
                show={showConfirmationModal}
                onClose={cancelDeleteEventPost}
                onConfirm={confirmDeleteEventPost}
            />
        </div>
    )
}
