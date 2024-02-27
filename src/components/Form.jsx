import React, { useState } from "react";
import InputField from "./InputField";
import Text from "./TextField";
import Button from "./Button";
import TextArea from "./TextArea";

const Form = ({ fields, onSubmit, btnText, className }) => {
  const [formData, setFormData] = useState({});
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleRadioChange = value => {
    setSelectedValue(value);
  };

  const handleFileChange = e => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formDataAll = {
      ...formData,
      selectedValue: selectedValue,
      selectedFile: selectedFile
    };
    onSubmit(formDataAll);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={
          className ||
          "flex w-full flex-col gap-y-[14px] md:w-[580px] md:max-w-full"
        }>
        {fields.map(field => (
          <div key={field.id}>
            {field.feildType === "textFeild" && (
              <>
                <Text className="pb-[14px]" content={field.label} />
                <InputField
                  type={field.type}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  {...field.props}
                  placeholder={field.placeholder}
                />
              </>
            )}
            {field.feildType === "areaFeild" && (
              <>
                <Text className="pb-[14px]" content={field.label} />
                <TextArea
                  type={field.type}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  {...field.props}
                  placeholder={field.placeholder}
                  rows="5"
                  cols="53"
                />
              </>
            )}
            {field.fieldType === "radioField" && (
              <div className="flex flex-row gap-[10px]">
                {field.options.map(option => (
                  <div key={option.value}>
                    <input
                      type="radio"
                      id={option.value}
                      name={field.label}
                      value={option.value}
                      checked={selectedValue === option.value}
                      onChange={() => handleRadioChange(option.value)}
                    />
                    <label htmlFor={option.value}>{option.label}</label>
                  </div>
                ))}
              </div>
            )}
            {field.feildType === "fileFeild" && (
              <div>
                <Text className="pb-[14px]" content={field.label} />
                <InputField
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  placeholder={field.placeholder}
                />
              </div>
            )}
          </div>
        ))}
        <Button type="submit" size="large" color="bt_primary">
          {btnText}
        </Button>
      </form>
    </div>
  );
};

export default Form;
