import React, { useEffect, useState, createContext } from "react";
import { getRequestForm } from "../services/request-form-service";
import { FormContext } from "./FormContext";
import Section from "./section";
const RequestForm = () => {
 const [formJsonState, setformJsonState] = useState(null);

 const [sectionKey, setsectionKey] = useState(1);

 const getRequestFormJson = async () => {
  const response = await getRequestForm();
  console.log(response);
  setformJsonState(response);
 };

 useEffect(() => {
  getRequestFormJson();
 }, []);

 const handleChange = (e, type, fieldId, sectionId) => {
  e.preventDefault();
  let updatedValue = "";
  if (type === "none") {
   // update text field value here
   updatedValue = e.target.value;
   console.log(e.target.value);
  } else if (type === "multi" || type === "radio") {
   //update checkboxes value here
   updatedValue = e.target.checked;
   console.log(e.target.checked);
  }

  // Update the value in states
  const updatedState = formJsonState;
  let updatedSectionIndex = updatedState.data["0"].formData.formPages[0].sections.findIndex((item) => {
   return item.sectionID === sectionId;
  });
  let updatedSectionObject = updatedState.data["0"].formData.formPages[0].sections[updatedSectionIndex];
  if (updatedSectionObject.type === "none" || updatedSectionObject.type === "multi") {
   updatedSectionObject.fields.forEach((field) => {
    if (field.fieldID === fieldId) {
     field.value = updatedValue;
    }
   });
  } else if (updatedSectionObject.type === "radio") {
   // in case of radio type , de-select other field values and change onlu current field value.
   updatedSectionObject.fields.forEach((field) => {
    if (field.fieldID === fieldId) {
     field.value = updatedValue;
    } else {
     field.value = false;
    }
   });
  }

  updatedState.data["0"].formData.formPages[0].sections[updatedSectionIndex] = updatedSectionObject;
  setformJsonState(JSON.parse(JSON.stringify(updatedState)));
  console.log("updated states : ", updatedState);
 };

 return (
  <>
   <div className="row">
    <div className="header-image-container"></div>
    <div className="col-12">
     <p className="request-form-heading">
      Book a Tow <span className="blue-bold-text">On-Demand For Less</span>
     </p>
    </div>
   </div>

   {formJsonState !== null ? (
    <div className="row request-form-container-row">
     <FormContext.Provider value={{ handleChange }}>
      <div className="col-10 request-form-container">
       <form>
        <div className="row">
         {formJsonState.data["0"].formData.formPages[0].sections.map((section) => {
          return (
           <div className="col-12">
            <Section key={section.sectionID} sectionDetails={section}></Section>
           </div>
          );
         })}
        </div>
        <div className="row">
         <div className="col-12">
          <input type={"submit"} className="submit-button"></input>
         </div>
        </div>
       </form>
      </div>
     </FormContext.Provider>
     <div className="col-2 request-form-sidebar"></div>
    </div>
   ) : (
    <h1>Loading....</h1>
   )}
  </>
 );
};

export default RequestForm;
