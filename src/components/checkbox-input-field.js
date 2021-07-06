import React, { useContext, useEffect, useState } from "react";
import { FormContext } from "./FormContext";
const CheckboxInputField = ({ fieldDetail, type, sectionId }) => {
 const { handleChange } = useContext(FormContext);
 const [checkboxKey, setCheckboxKey] = useState(1);
 useEffect(() => {
    setCheckboxKey(checkboxKey+1);
 }, [fieldDetail.value]);

 return (
  <>
   <div className={"checkbox-field-container"}>
    <input
     key={"checkBox-" + fieldDetail.fieldID + "-" + checkboxKey}
     type="checkbox"
     checked={fieldDetail.value ? true : false}
     onChange={(e) => handleChange(e, type, fieldDetail.fieldID, sectionId)}
    ></input>
    <label key={"checkBox-label" + fieldDetail.fieldID} className={"checkbox-field-container-label"}>
     {fieldDetail.name}
    </label>
   </div>
  </>
 );
};
export default CheckboxInputField;
