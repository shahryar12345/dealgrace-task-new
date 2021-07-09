import React, { useContext, useState } from "react";
import { FormContext } from "./FormContext";
const TextInputField = ({ fieldDetail, sectionId, formSubmitState }) => {
 const [isFocusedState, setisFocusedState] = useState(false);

 const { handleChange } = useContext(FormContext);
 return (
  <>
   <div style={{ position: "relative" }} className={"input-text-field-container"}>
    <label key={"inputField-label" + fieldDetail?.fieldID} className={`${"text-input-field-label"}  ${isFocusedState ? " blue-bold-text" : ""}`}>
     {fieldDetail?.name}
    </label>
    <input
     onFocus={() => setisFocusedState(true)}
     onBlur={() => setisFocusedState(false)}
     value={fieldDetail?.value}
     maxLength={fieldDetail?.maxLength}
     key={"inputField-" + fieldDetail?.fieldID}
     className={`${"text-input-field"} ${fieldDetail?.required && !fieldDetail?.value && formSubmitState ? " invalid-border" : ""}`}
     required={fieldDetail?.required ? true : false}
     type="text"
     onChange={(e) => handleChange(e, "none", fieldDetail?.fieldID, sectionId)}
     placeholder={fieldDetail?.placeholder}
    ></input>
    {fieldDetail?.required && !fieldDetail?.value ? <div className={`${"requiredIcon"} ${fieldDetail?.required && !fieldDetail?.value && formSubmitState ? " requiredIcon-form-submit" : ""}`}>*</div> : null}
    {fieldDetail?.required && !fieldDetail?.value && formSubmitState ? (
     <>
      <div className="invalid-text">{fieldDetail?.name + " is required"}</div>
     </>
    ) : null}
   </div>
  </>
 );
};
export default TextInputField;
