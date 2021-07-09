import React, { useEffect, useState } from "react";

import InputField from "./input-field";
const Section = ({ sectionDetails, formSubmit }) => {
 const [invalidSectionState, setInvalidSectionState] = useState(false);

 useEffect(() => {
  if ((sectionDetails.type === "multi" || sectionDetails.type === "radio") && formSubmit) {
   setInvalidSectionState(checkInvalidSection(sectionDetails));
   console.log("section updated");
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [sectionDetails.fields, formSubmit]);

 const checkInvalidSection = (sectionDetails) => {
  try {
   let isInvalid = true;
   sectionDetails?.fields?.forEach((field) => {
    if (field?.required && field?.value && field?.value !== "") {
     isInvalid = false;
    } else if (field?.required === false) {
     isInvalid = false;
    }
   });
   return isInvalid;
  } catch (e) {
   console.log("Error occur while checking section validation.", e);
  }
 };

 return (
  <>
   <div className="row">
    <div className="col-12 col-m-12">
     <p className="section-heading">{sectionDetails.headerText}</p>
    </div>

    {sectionDetails.fields.map((field, fieldIndex) => {
     return (
      <div
       key={"InputField" + field?.fieldID + "-" + fieldIndex + "-Col-key"}
       className={sectionDetails?.fields.length >= 2 && sectionDetails?.type === "none" ? "col-6 col-m-12" : sectionDetails?.fields?.length === 2 && (sectionDetails.type === "radio" || sectionDetails.type === "multi") ? "col-6 col-m-12" : sectionDetails.type !== "none" && sectionDetails.type !== "notes" ? "col-3 col-m-6" : "col-12 col-m-12"}
      >
       <InputField key={"InputField" + field.fieldID + "-" + fieldIndex} fieldDetail={field} type={sectionDetails.type} sectionId={sectionDetails.sectionID} formSubmitState={formSubmit} sectioninvalid={invalidSectionState} />
      </div>
     );
    })}
   </div>
   {invalidSectionState && formSubmit && (sectionDetails?.type === "multi" || sectionDetails?.type === "radio") ? (
    <>
     <div>
      <div className="invalid-text-section">{"Please select one of these"}</div>
     </div>
    </>
   ) : null}
  </>
 );
};
export default Section;
