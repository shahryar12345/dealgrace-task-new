import React, { useEffect, useState } from "react";

import InputField from "./input-field";
const Section = ({ sectionDetails }) => {
 return (
  <div className="row">
   <div className="col-12">
    <p>{sectionDetails.headerText}</p>
   </div>

   {sectionDetails.fields.map((field) => {
    return (
     <div className={sectionDetails.fields.length >= 2 && sectionDetails.type === "none" ? "col-6" : sectionDetails.type !== "none" ? "col-3" : "col-12"}>
      <InputField key={"InputField" + field.fieldID} fieldDetail={field} type={sectionDetails.type} sectionId={sectionDetails.sectionID} />
     </div>
    );
   })}
  </div>
 );
};
export default Section;
