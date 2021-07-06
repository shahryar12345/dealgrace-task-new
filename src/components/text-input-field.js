import React, { useContext } from "react";
import { FormContext } from "./FormContext";
const TextInputField = ({ fieldDetail, sectionId }) => {
 const { handleChange } = useContext(FormContext);
 return (
  <>
   <div style={{ position: "relative" }}>
    <label key={"inputField-label" + fieldDetail.fieldID} className={"text-input-field-label"}>
     {fieldDetail.name}
    </label>
    <input value={fieldDetail.value} maxLength={fieldDetail.maxLength} key={"inputField-" + fieldDetail.fieldID} className="text-input-field" required={"required"} type="text" onChange={(e) => handleChange(e, "none", fieldDetail.fieldID, sectionId)} placeholder={fieldDetail.placeholder}></input>

    {fieldDetail.required && !fieldDetail.value ? <div className="requiredIcon">*</div> : null}
   </div>
  </>
 );
};
export default TextInputField;
