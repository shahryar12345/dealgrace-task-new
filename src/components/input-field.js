import React from "react";
import TextInputField from "./text-input-field";
import CheckboxInputField from "./checkbox-input-field";
import TextAreaInputField from "./textarea-input-field";

const InputField = ({ fieldDetail, type, sectionId }) => {
 switch (type) {
  case "none":
   return <TextInputField key={"TextInputField" + fieldDetail.fieldID} fieldDetail={fieldDetail} sectionId={sectionId}></TextInputField>;
  case "radio":
  case "multi":
   return <CheckboxInputField key={"TextInputField" + fieldDetail.fieldID} fieldDetail={fieldDetail} type={type} sectionId={sectionId}></CheckboxInputField>;
  case "notes":
   return <TextAreaInputField key={"TextAreaInputField" + fieldDetail.fieldID} fieldDetail={fieldDetail} sectionId={sectionId}></TextAreaInputField>;
  default:
   return null;
 }
};

export default InputField;
