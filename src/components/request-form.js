import React, { useEffect, useState } from "react";

import { getCategory, getRequestForm, getService } from "../services/request-form-service";
import { FormContext } from "./FormContext";
import Section from "./section";
import useWindowDimensions from "../custome-hooks/windowsDimension";
import PageHeader from "./page-header";
import PageFooter from "./page-footer";
const RequestForm = () => {
 const [formJsonState, setformJsonState] = useState(null);
 const [serviceCategoryJson, setServiceCategoryJson] = useState({
  service: null,
  category: null,
 });
 const [headerImageURLState, setheaderImageURLState] = useState(null);

 const { height, width } = useWindowDimensions();

 const getJsonsFromAPI = async () => {
  const response = await getRequestForm();
  console.log(response);
  setformJsonState(response);

  // Now Call the service and Category API to fetch the data
  let serviceData = await getService();
  let categoryData = await getCategory();

  setServiceCategoryJson({ service: serviceData, category: categoryData });
  console.log("Service json : ", serviceData);
  console.log("Category json : ", categoryData);
  setHeaderImageURL(serviceData, categoryData);
 };

 const setHeaderImageURL = (serviceData, categoryData) => {
  // select the default header images according to screen size
  if (width <= 600) {
   // for mobile
   // if image is assigned to service it will  precedence over category image.
   if (serviceData.data.diwM) {
    setheaderImageURLState(serviceData.data.diwM);
   } else {
    setheaderImageURLState(categoryData.data[0].diwM.URL);
   }
  } else {
   // for desktop
   // if image is assigned to service it will  precedence over category image.
   if (serviceData.data.diwD) {
    setheaderImageURLState(serviceData.data.diwD);
   } else {
    setheaderImageURLState(categoryData.data[0].diwD.URL);
   }
  }
 };

 useEffect(() => {
  if (serviceCategoryJson.service && serviceCategoryJson.category) {
   setHeaderImageURL(serviceCategoryJson.service, serviceCategoryJson.category);
  }
 }, [width]);

 useEffect(() => {
  getJsonsFromAPI();
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
    <PageHeader />
    <div className="header-image-container" style={{ backgroundImage: "url(" + headerImageURLState + ")" }}></div>
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

   <div className="row">
    <div className="col-12 footer-col">
     <PageFooter />
    </div>
   </div>
  </>
 );
};

export default RequestForm;
