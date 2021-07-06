import React, { useContext } from "react";
import { FormContext } from "./FormContext";
const TextInputField = ({ fieldDetail, sectionId }) => {

 const { handleChange } = useContext(FormContext);
 return (
  <>
   <label key={"inputField-label"+fieldDetail.fieldID} className={"text-input-field-label"}>{fieldDetail.name}</label>
   <input key={"inputField-"+fieldDetail.fieldID} className="text-input-field" required={"required"} type="text" onChange={(e) => handleChange(e, "none", fieldDetail.fieldID, sectionId)} placeholder={fieldDetail.placeholder}></input>
  </>
 );
};
export default TextInputField;
