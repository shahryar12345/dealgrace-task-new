import React, { useContext, useState } from "react";
import { FormContext } from "./FormContext";
const TextAreaInputField = ({ fieldDetail, sectionId, formSubmitState }) => {
 const [isFocusedState, setisFocusedState] = useState(false);

 const { handleChange } = useContext(FormContext);
 return (
  <>
   <div style={{ position: "relative" }}>
    <label key={"inputField-label" + fieldDetail?.fieldID} className={`${"text-area-input-field-label"}  ${isFocusedState ? " blue-bold-text" : ""}`}>
     {fieldDetail?.name}
    </label>
    <textarea
     onFocus={() => setisFocusedState(true)}
     onBlur={() => setisFocusedState(false)}
     value={fieldDetail?.value}
     maxLength={fieldDetail?.maxLength}
     key={"inputField-" + fieldDetail?.fieldID}
     className={`${"text-area-input-field"} ${fieldDetail?.required && !fieldDetail?.value && formSubmitState ? " invalid-border" : ""}`}
     required={fieldDetail?.required ? true : false}
     type="text"
     onChange={(e) => handleChange(e, "notes", fieldDetail?.fieldID, sectionId)}
     placeholder={fieldDetail?.placeholder}
    ></textarea>
    {fieldDetail?.required && !fieldDetail?.value ? <div className="requiredIcon-text-area">*</div> : null}
    {fieldDetail?.required && !fieldDetail?.value && formSubmitState ? (
     <>
      <div className="invalid-text invalid-text-text-area">{fieldDetail?.name + " is required"}</div>
     </>
    ) : null}
   </div>
  </>
 );
};
export default TextAreaInputField;
