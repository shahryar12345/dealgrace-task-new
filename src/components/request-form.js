import React, { useEffect, useState } from "react";
import { getRequestForm } from "../services/request-form-service";
import TextInputField from "./text-input-field";
const RequestForm = () => {
 const [fromJsonState, setFromJsonState] = useState(null);

 const getRequestFormJson = async () => {
  const response = await getRequestForm();
  console.log(response);
  console.log(response.body);
 };

 useEffect(() => {
  getRequestFormJson();
 }, []);

 return (
  <>
  {/* <div className={"abc"}>

  </div> */}
   <div className="row">
    <div className="col-12">
     <p className="request-form-heading">
      Book a Tow <span className="blue-bold-text">On-Demand For Less</span>
     </p>
    </div>
   </div>

   <div className="row request-form-container-row">
    <div className="col-10 request-form-container">
     <form>
      <div className="row">
       <div className="col-12">
        <TextInputField></TextInputField>
       </div>
       <div className="col-6">
        <TextInputField></TextInputField>
       </div>
       <div className="col-6">
        <TextInputField></TextInputField>
       </div>
      </div>
     </form>
    </div>

    <div className="col-2 request-form-sidebar"></div>
   </div>
  </>
 );
};

export default RequestForm;
