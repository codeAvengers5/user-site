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
      placeholder: "Enter a Title"
    },
    {
      id: 2,
      feildType: "areaFeild",
      label: "Description",
      name: "Description",
      type: "text",
      placeholder: "Enter a description "
    },

    {
      id: 3,
      fieldType: "radioField",
      label: "Options",
      options: [
        { label: "All", value: "all" },
        { label: "Employee", value: "employee" }
      ]
    },
    {
      id: 4,
      feildType: "fileFeild",
      label: "Image National ID/Licens Id",
      name: "Description",
      type: "file"
    }
  ];

  return (
    <>
      <div className="bg-whitesmoke relative box-border flex h-[1024px] w-full flex-col items-end justify-start gap-[5px_0px] overflow-hidden px-4 pb-[890px] pt-20">
        <div className="font-inter flex w-[1159px] flex-row items-start justify-start px-[73px]  py-0 text-left text-[24px] text-black">
          <div className="flex flex-1 flex-row items-start justify-between">
            <button className="box-border  flex w-[123px] cursor-pointer flex-row items-center justify-center rounded-[10px] bg-[#85CBF8] p-2.5">
              <div className="font-inter relative text-left text-[24px] text-white">
                News
              </div>
            </button>
            <div className="rounded-3xs box-border flex w-[123px] flex-row items-center justify-center p-2.5">
              <div className="relative">Policy</div>
            </div>
          </div>
        </div>
        <div className="relative box-border h-0.5 w-[1086px] border-t-[2px] border-solid border-[#85CBF8]" />
      </div>
      <div className="mb-[20px] ml-[600px] mt-[-850px]">
        <Card variant="card2" className="my-custom-card-class">
          <Form
            fields={fields}
            onSubmit={handleFormSubmit}
            btnText={<span className="">Add News</span>}
            className="my-form-class mb-40  ml-[30px] mt-[90px] flex w-[520px] flex-col gap-5 "
          />
        </Card>
      </div>
    </>
  );
};

export default page;
