import React, { useContext, useEffect, useState } from "react";
import { FormContext } from "./FormContext";
const CheckboxInputField = ({ fieldDetail, type, sectionId  , sectioninvalid}) => {
 const { handleChange } = useContext(FormContext);
 const [checkboxKey, setCheckboxKey] = useState(1);
 useEffect(() => {
  setCheckboxKey(checkboxKey + 1);
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [fieldDetail.value]);

 return (
  <>
   <div className={`${"checkbox-field-container"} ${sectioninvalid ? " invalid-border" : ""}`}>
    <input className={"input-checkbox"} key={"checkBox-" + fieldDetail?.fieldID + "-" + checkboxKey} type="checkbox" checked={fieldDetail?.value ? true : false} onChange={(e) => handleChange(e, type, fieldDetail?.fieldID, sectionId)}></input>
    <label key={"checkBox-label" + fieldDetail?.fieldID} className={`${"checkbox-field-container-label"} ${fieldDetail?.value === true ? " checkbox-field-label-checked" : ""}`}>
     {fieldDetail?.name}
    </label>
   </div>
  </>
 );
};
export default CheckboxInputField;
