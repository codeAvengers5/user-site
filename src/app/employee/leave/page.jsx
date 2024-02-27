import React from "react";
import Form from "@/components/Form";
import Card from "@/components/Card";

const page = () => {
  const handleFormSubmit = formData => {
    console.log(formData);
  };

  const fields = [
    {
      id: 1,
      feildType: "textFeild",
      label: "Full Name",
      name: "fullName",
      type: "text",
      placeholder: "Enter your full name"
    },

    {
      id: 2,
      feildType: "textFeild",
      label: "Duration",
      name: "duration",
      type: "text",
      placeholder: "Enter the duration"
    },
    {
      id: 3,
      feildType: "textFeild",
      label: "Permission Detail",
      name: "permissionDetail",
      options: [
        { label: "Maternity Leave", value: "maternity" },
        { label: "Annual Leave", value: "annual" },
        { label: "Sick Leave", value: "sick" }
      ],
      placeholder: "Select permission leave details"
    },
    {
      id: 4,
      feildType: "textFeild",
      label: "Leave Date",
      name: "leaveDate",
      type: "date",
      placeholder: "Select the leave date"
    }
  ];

  return (
    <>
      <div className="flex space-x-4">
        <div className="absolute left-[377px] top-[135px] leading-[20px] text-[#17A1FA]">
          Leave Application
        </div>

        <div className="absolute left-[704px] top-[135px] leading-[20px]">
          Status
        </div>
      </div>

      <div className="mb-[40px] ml-[450px] mt-[200px]">
        <Card variant="card2" height="600px" className="my-custom-card-class">
          <Form
            fields={fields}
            onSubmit={handleFormSubmit}
            btnText={<span className="">Submit</span>}
            className="my-form-class mb-40  ml-[30px] mt-[49px] flex w-[520px] flex-col gap-5 "
          />
        </Card>
      </div>
    </>
  );
};

export default page;
