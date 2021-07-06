import React, { useEffect, useState, createContext } from "react";
import { getRequestForm } from "../services/request-form-service";
import { FormContext } from "./FormContext";
import Section from "./section";
const RequestForm = () => {
 const [fromJsonState, setFromJsonState] = useState({
  status: "success",
  data: {
   0: {
    serviceID: 46,
    serviceFormID: 49,
    formData: {
     title: "Towing",
     formPages: [
      {
       pageID: 1,
       sections: [
        {
         type: "none",
         fields: [
          {
           name: "Make, Model, Year",
           value: "",
           fieldID: 1,
           dataType: "string",
           required: true,
           maxLength: 100,
           fieldOrder: 0,
           placeholder: "Ex: Honda, Civic, 2021",
          },
         ],
         sectionID: 1,
         headerText: "Vehicle Details",
         sectionOder: 0,
        },
        {
         type: "none",
         fields: [
          {
           name: "Origin Location",
           value: "",
           fieldID: 5,
           dataType: "string",
           required: true,
           maxLength: 100,
           fieldOrder: 0,
           placeholder: "Address/Street intersection",
          },
          {
           name: "Origin City",
           value: "",
           fieldID: 6,
           dataType: "string",
           required: true,
           maxLength: 100,
           fieldOrder: 1,
           placeholder: "Chicago",
          },
          {
           name: "Destination Location",
           value: "",
           fieldID: 7,
           dataType: "string",
           required: true,
           maxLength: 100,
           fieldOrder: 2,
           placeholder: "Address/Street intersection",
          },
          {
           name: "Destination City",
           value: "",
           fieldID: 8,
           dataType: "string",
           required: true,
           maxLength: 100,
           fieldOrder: 3,
           placeholder: "Lombard",
          },
         ],
         sectionID: 2,
         headerText: "Towing Details",
         sectionOder: 1,
        },
        {
         type: "radio",
         fields: [
          {
           name: "2 Wheel Drive",
           value: "",
           fieldID: 9,
           dataType: "checkbox",
           required: true,
           maxLength: 0,
           fieldOrder: 0,
           placeholder: "",
          },
          {
           name: "4 Wheel Drive",
           value: "",
           fieldID: 10,
           dataType: "checkbox",
           required: true,
           maxLength: 0,
           fieldOrder: 1,
           placeholder: "",
          },
          {
           name: "Don't Know",
           value: "",
           fieldID: 11,
           dataType: "checkbox",
           required: true,
           maxLength: 0,
           fieldOrder: 2,
           placeholder: "",
          },
         ],
         sectionID: 13,
         headerText: "Drivetrain",
         sectionOder: 10,
        },
        {
         type: "multi",
         fields: [
          {
           name: "Immediately",
           value: "",
           fieldID: 33,
           dataType: "checkbox",
           required: true,
           maxLength: 100,
           fieldOrder: 0,
          },
          {
           name: "1-5 days",
           value: "",
           fieldID: 34,
           dataType: "checkbox",
           required: true,
           maxLength: 100,
           fieldOrder: 1,
          },
          {
           name: "6-14 days",
           value: "",
           fieldID: 35,
           dataType: "checkbox",
           required: true,
           maxLength: 100,
           fieldOrder: 2,
          },
          {
           name: "15-30 days",
           value: "",
           fieldID: 36,
           dataType: "checkbox",
           required: true,
           maxLength: 100,
           fieldOrder: 3,
          },
         ],
         sectionID: 11,
         headerText: "When Did You Want the Tow?",
         sectionOder: 11,
        },
       ],
       pageOrder: 0,
      },
     ],
    },
   },
   configuration: {
    showDelgraceFeatureSectionOnTopForMobile: false,
   },
  },
  message: "Retrieved service form.",
 });

 const [sectionKey, setsectionKey] = useState(1);

 const getRequestFormJson = async () => {
  const response = await getRequestForm();
  console.log(response);
  console.log(response.body);
 };

 useEffect(() => {
  getRequestFormJson();
  setFromJsonState({
   status: "success",
   data: {
    0: {
     serviceID: 46,
     serviceFormID: 49,
     formData: {
      title: "Towing",
      formPages: [
       {
        pageID: 1,
        sections: [
         {
          type: "none",
          fields: [
           {
            name: "Make, Model, Year",
            value: "",
            fieldID: 1,
            dataType: "string",
            required: true,
            maxLength: 100,
            fieldOrder: 0,
            placeholder: "Ex: Honda, Civic, 2021",
           },
          ],
          sectionID: 1,
          headerText: "Vehicle Details",
          sectionOder: 0,
         },
         {
          type: "none",
          fields: [
           {
            name: "Origin Location",
            value: "",
            fieldID: 5,
            dataType: "string",
            required: true,
            maxLength: 100,
            fieldOrder: 0,
            placeholder: "Address/Street intersection",
           },
           {
            name: "Origin City",
            value: "",
            fieldID: 6,
            dataType: "string",
            required: true,
            maxLength: 100,
            fieldOrder: 1,
            placeholder: "Chicago",
           },
           {
            name: "Destination Location",
            value: "",
            fieldID: 7,
            dataType: "string",
            required: true,
            maxLength: 100,
            fieldOrder: 2,
            placeholder: "Address/Street intersection",
           },
           {
            name: "Destination City",
            value: "",
            fieldID: 8,
            dataType: "string",
            required: true,
            maxLength: 100,
            fieldOrder: 3,
            placeholder: "Lombard",
           },
          ],
          sectionID: 2,
          headerText: "Towing Details",
          sectionOder: 1,
         },
         {
          type: "radio",
          fields: [
           {
            name: "2 Wheel Drive",
            value: "",
            fieldID: 9,
            dataType: "checkbox",
            required: true,
            maxLength: 0,
            fieldOrder: 0,
            placeholder: "",
           },
           {
            name: "4 Wheel Drive",
            value: "",
            fieldID: 10,
            dataType: "checkbox",
            required: true,
            maxLength: 0,
            fieldOrder: 1,
            placeholder: "",
           },
           {
            name: "Don't Know",
            value: "",
            fieldID: 11,
            dataType: "checkbox",
            required: true,
            maxLength: 0,
            fieldOrder: 2,
            placeholder: "",
           },
          ],
          sectionID: 13,
          headerText: "Drivetrain",
          sectionOder: 10,
         },
         {
          type: "multi",
          fields: [
           {
            name: "Immediately",
            value: "",
            fieldID: 33,
            dataType: "checkbox",
            required: true,
            maxLength: 100,
            fieldOrder: 0,
           },
           {
            name: "1-5 days",
            value: "",
            fieldID: 34,
            dataType: "checkbox",
            required: true,
            maxLength: 100,
            fieldOrder: 1,
           },
           {
            name: "6-14 days",
            value: "",
            fieldID: 35,
            dataType: "checkbox",
            required: true,
            maxLength: 100,
            fieldOrder: 2,
           },
           {
            name: "15-30 days",
            value: "",
            fieldID: 36,
            dataType: "checkbox",
            required: true,
            maxLength: 100,
            fieldOrder: 3,
           },
          ],
          sectionID: 11,
          headerText: "When Did You Want the Tow?",
          sectionOder: 11,
         },
        ],
        pageOrder: 0,
       },
      ],
     },
    },
    configuration: {
     showDelgraceFeatureSectionOnTopForMobile: false,
    },
   },
   message: "Retrieved service form.",
  });
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
  const updatedState = fromJsonState;
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
  setFromJsonState(JSON.parse(JSON.stringify(updatedState)));
  console.log("updated states : ", updatedState);
 };

 return (
  <>
   <div className="row">
    <div className="col-12">
     <p className="request-form-heading">
      Book a Tow <span className="blue-bold-text">On-Demand For Less</span>
     </p>
    </div>
   </div>

   <div className="row request-form-container-row">
    <FormContext.Provider value={{ handleChange }}>
     <div className="col-10 request-form-container">
      <form>
       <div className="row">
        {fromJsonState.data["0"].formData.formPages[0].sections.map((section) => {
         return (
          <div className="col-12">
           <Section key={section.sectionID} sectionDetails={section}></Section>
          </div>
         );
        })}
       </div>
      </form>
     </div>
    </FormContext.Provider>
    <div className="col-2 request-form-sidebar"></div>
   </div>
  </>
 );
};

export default RequestForm;
