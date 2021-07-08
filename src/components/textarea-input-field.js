import React, { useContext } from "react";
import { FormContext } from "./FormContext";
const TextAreaInputField = ({ fieldDetail, sectionId }) => {
 const { handleChange } = useContext(FormContext);
 return (
  <>
   <div style={{ position: "relative" }}>
    <label key={"inputField-label" + fieldDetail?.fieldID} className={"text-area-input-field-label"}>
     {fieldDetail?.name}
    </label>
    <textarea value={fieldDetail?.value} maxLength={fieldDetail?.maxLength} key={"inputField-" + fieldDetail?.fieldID} className="text-area-input-field" required={fieldDetail?.required ? true : false} type="text" onChange={(e) => handleChange(e, "notes", fieldDetail?.fieldID, sectionId)} placeholder={fieldDetail?.placeholder}></textarea>
    {fieldDetail?.required && !fieldDetail?.value ? <div className="requiredIcon-text-area">*</div> : null}
   </div>
  </>
 );
};
export default TextAreaInputField;
