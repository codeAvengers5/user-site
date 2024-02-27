import React from "react";
import Form from "@/components/Form";
import Card from "@/components/Card";

const Page = () => {
  const handleFormSubmit = formData => {
    console.log(formData);
  };

  const fields = [
    {
      id: 1,
      feildType: "textFeild",
      label: "Name of Employee",
      name: "fullName",
      type: "text",
      placeholder: "Enter your full name"
    },
    {
      id: 2,
      feildType: "textFeild",
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Enter the password"
    },
    {
      id: 3,
      feildType: "textFeild",
      label: "Role",
      name: "role",
      placeholder: "role"
    },
    {
      id: 4,
      feildType: "textFeild",
      label: "Salary/Wage",
      name: "salaryWage",
      type: "text",
      placeholder: "Salary"
    },
    {
      id: 5,
      feildType: "textFeild",
      label: "Email",
      name: "email",
      type: "text",
      placeholder: "email"
    },
    {
      id: 6,
      feildType: "textFeild",
      label: "Department",
      name: "department",
      type: "text",
      placeholder: "department"
    },
    {
      id: 7,
      feildType: "textFeild",
      label: "Work start date",
      name: "workStartDate",
      type: "date",
      placeholder: "date"
    },
    {
      id: 8,
      feildType: "textFeild",
      label: "Gender",
      name: "gender",
      type: "text",
      placeholder: "gender"
    },
    {
      id: 9,
      feildType: "fileFeild",
      label: "Image of National ID/License ID",
      name: "image",
      type: "file",
      placeholder: "salary"
    }
  ];

  return (
    <>
      <div className="mb-[40px] ml-[450px] mt-[200px]">
        <Card variant="card2" height="100%" className="my-custom-card-class">
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

export default Page;
