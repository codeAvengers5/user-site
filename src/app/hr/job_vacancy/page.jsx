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
      label: "Title",
      name: "title",
      type: "text",
      placeholder: "Enter ya title"
    },

    {
      id: 2,
      feildType: "areaFeild",
      label: "Description",
      name: "description",
      type: "text",
      placeholder: "Enter a description"
    },
    {
      id: 3,
      feildType: "textFeild",
      label: "Requirment",
      name: "requirment",
      type: "text",
      placeholder: "Enter a requirment"
    },
    {
      id: 4,
      feildType: "textFeild",
      label: "Responsibility",
      name: "responsiblity",
      type: "text",
      placeholder: "Enter a responsibility"
    },
    {
      id: 5,
      feildType: "textFeild",
      label: "Salary",
      name: "salary",
      type: "text",
      placeholder: "Enter a salary"
    }
  ];

  return (
    <>
      <div className="mb-[40px] ml-[450px] mt-[150px]">
        <Card variant="card2" height="750px" className="my-custom-card-class">
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
