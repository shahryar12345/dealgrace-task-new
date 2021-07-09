import React, { useEffect, useState } from "react";
import { getCategory, getRequestForm, getService } from "../services/request-form-service";
import { FormContext } from "./FormContext";
import Section from "./section";
import useWindowDimensions from "../custome-hooks/windowsDimension";
import PageHeader from "./page-header";
import PageFooter from "./page-footer";
import UploadPhoto from "./upload-photo";
import PromoCode from "./promo-code";
import IconPanel from "./icon-panel";

const RequestForm = ({ match }) => {
 const [formJsonState, setformJsonState] = useState(null);
 const [serviceCategoryJson, setServiceCategoryJson] = useState({
  service: null,
  category: null,
 });
 const [headerImageURLState, setheaderImageURLState] = useState(null);

 const { width } = useWindowDimensions();

 const getJsonsFromAPI = async () => {
  try {
   // On Default route , Auto Towing service data is fetched from JSON file, otherwise other service data will be fetched according to id provided
   let id = match?.params?.id ? match?.params?.id : 0;

   const response = await getRequestForm(id);
   console.log(response);
   setformJsonState(response);
   // Now Call the service and Category API to fetch the data
   let serviceData = await getService(id);
   let categoryData = await getCategory(id);
   setServiceCategoryJson({ service: serviceData, category: categoryData });
   setHeaderImageURL(serviceData, categoryData);
  } catch (e) {
   console.log("Getting error from Json APIs");
  }
 };

 const setHeaderImageURL = (serviceData, categoryData) => {
  try {
   // select the default header images according to screen size
   if (width <= 600) {
    // for mobile
    // if image is assigned to service it will  precedence over category image.
    if (serviceData?.data?.diwM) {
     setheaderImageURLState(serviceData?.data?.diwM);
    } else {
     setheaderImageURLState(categoryData?.data[0]?.diwM?.URL);
    }
   } else {
    // for desktop
    // if image is assigned to service it will  precedence over category image.
    if (serviceData?.data?.diwD) {
     setheaderImageURLState(serviceData?.data?.diwD);
    } else {
     setheaderImageURLState(categoryData?.data[0]?.diwD?.URL);
    }
   }
  } catch (e) {
   console.log("Error while setting Header image URL");
  }
 };

 useEffect(() => {
  if (serviceCategoryJson.service && serviceCategoryJson.category) {
   // Set the Header URL when screen width is changed
   setHeaderImageURL(serviceCategoryJson.service, serviceCategoryJson.category);
  }
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [width]);

 useEffect(() => {
  // Call method to hit APIs and get the required data
  getJsonsFromAPI();
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []);

 const handleChange = (e, type, fieldId, sectionId) => {
  try {
   e.preventDefault();
   let updatedValue = "";
   if (type === "none" || type === "notes") {
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
   let updatedSectionIndex = updatedState?.data["0"]?.formData?.formPages[0]?.sections.findIndex((item) => {
    return item?.sectionID === sectionId;
   });
   let updatedSectionObject = updatedState?.data["0"]?.formData?.formPages[0]?.sections[updatedSectionIndex];
   if (updatedSectionObject?.type !== "radio") {
    updatedSectionObject?.fields.forEach((field) => {
     if (field?.fieldID === fieldId) {
      field.value = updatedValue;
     }
    });
   } else if (updatedSectionObject?.type === "radio") {
    // in case of radio type , de-select other field values and change onlu current field value.
    updatedSectionObject?.fields?.forEach((field) => {
     if (field?.fieldID === fieldId) {
      field.value = field?.value === true ? true : updatedValue;
     } else {
      field.value = false;
     }
    });
   }

   updatedState.data["0"].formData.formPages[0].sections[updatedSectionIndex] = updatedSectionObject;
   setformJsonState(JSON.parse(JSON.stringify(updatedState)));
   console.log("updated states : ", updatedState);
  } catch (e) {
   console.log("Error occur while handling change in fields");
  }
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Submitted JSON ", formJsonState?.data["0"]);
 };

 const getHeading = () => {
  try {
   let headingText = serviceCategoryJson?.service?.data?.heading;
   let highLigtedText = serviceCategoryJson?.service?.data?.headingHighlightedText;
   return (
    <p className="request-form-heading">
     {headingText?.substring(0, headingText.indexOf(highLigtedText))}
     <span className="blue-bold-text">{highLigtedText}</span>
     {headingText?.substring(headingText.indexOf(highLigtedText) + highLigtedText.length)}
    </p>
   );
  } catch (e) {
   console.log("Getting Error While Getting Dynamic Page Heading.");
  }
 };

 return (
  <>
   <div key={"request-form-main-row"} id={"request-form-main-row"} className="row">
    <PageHeader key={"page-header-key"} />
    {headerImageURLState !== null && headerImageURLState !== undefined ? (
     <>
      <div key={"header-image-container-key"} id={"header-image-container-key"} className="header-image-container" style={{ backgroundImage: "url(" + headerImageURLState + ")" }}>
       <div key={"request-form-heading-container-mobile-key"} id={"request-form-heading-container-mobile-key"} className="col-12 request-form-heading-container-mobile">
        {getHeading()}
       </div>
      </div>
      <div key={"request-form-heading-container-desktop-key"} id={"request-form-heading-container-desktop-key"} className="col-12 request-form-heading-container-desktop">
       {getHeading()}
      </div>
     </>
    ) : (
     <h4 key={"header-image-error-msg-key"} id={"header-image-error-msg-key"}>
      {"Header Image not available."}
     </h4>
    )}
   </div>

   {formJsonState !== null && formJsonState !== undefined ? (
    <>
     <IconPanel key={"Icon-panel-key"} />
     <div key={"request-form-container-row-key"} id={"request-form-container-row-key"} className="row request-form-container-row">
      <FormContext.Provider value={{ handleChange }}>
       <div key={"request-form-container-key"} id={"request-form-container-key"} className="col-10 col-m-12 request-form-container">
        <form>
         <div id={"section-row-key"} key={"section-row-key"} className="row">
          {formJsonState?.data["0"]?.formData?.formPages[0]?.sections.map((section, sectionIdex) => {
           return (
            <div id={"section-col-" + section?.sectionID + "-" + sectionIdex} key={"section-col-" + section?.sectionID + "-" + sectionIdex} className="col-12 col-m-12">
             <Section key={section?.sectionID} sectionDetails={section}></Section>
            </div>
           );
          })}
         </div>
         <div id={"upload-photo-row-key"} key={"upload-photo-row-key"} className="row">
          <div id={"upload-photo-col-key"} key={"upload-photo-col-key"} className="col-12">
           <UploadPhoto key={"upload-photo-key"} />
          </div>
         </div>
         <div id={"promo-code-row-key"} key={"promo-code-row-key"} className="row">
          <div id={"promo-code-col-key"} key={"promo-code-col-key"} className="col-12">
           <PromoCode key={"promo-code-key"} />
          </div>
         </div>

         <div key={"submit-btn-row-key"} id={"submit-btn-row-key"} className="row">
          <div key={"submit-btn-col-key"} id={"submit-btn-col-key"} className="col-12  submit-button-container">
           <input key={"submit-btn-key"} id={"submit-btn-key"} type={"submit"} value={"Submit"} onSubmit={(e) => handleSubmit(e)} className="submit-button"></input>
          </div>
         </div>
        </form>
       </div>
      </FormContext.Provider>
     </div>
    </>
   ) : (
    <div className="form-loading-text-container">
     <h4>Loading form....</h4>
    </div>
   )}

   <div key={"page-footer-row-key"} id={"page-footer-row-key"} className="row">
    <div key={"page-footer-col-key"} id={"page-footer-col-key"} className="col-12 footer-col">
     <PageFooter key={"page-footer-key"} />
    </div>
   </div>
  </>
 );
};

export default RequestForm;
