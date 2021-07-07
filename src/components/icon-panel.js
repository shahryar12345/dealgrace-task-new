import React from "react";
import chatIcon from "../images/chat-icon.svg";
import dollarIcon from "../images/dollar.svg";
import peopleIcon from "../images/people.svg";

const IconPanel = () => {
 return (
  <div className="col-3 request-form-sidebar">
   <div className="row">
    <div className="col-12">
     <p className="side-bar-heading">
      Why book on <span>Dealgrace?</span>
     </p>
    </div>
    <div className="col-12 col-m-4 reduce-padding">
     <div className="row request-bar-lifted-icon">
      <div className="col-12">
       <img alt="logo-chat" src={chatIcon} className="side-bar-icons"></img>
      </div>
      <div className="col-12 side-bar-icon-text-container">
       <div className="col-12 ">Send out your service request to nearby Pros</div>
      </div>
     </div>
    </div>
    <hr className="side-bar-horizontal-line"></hr>
    <div className="col-12 col-m-4 vertical-right-border reduce-padding vertical-left-border">
     <div className="row">
      <div className="col-12">
       <img alt="logo-dollar" src={dollarIcon} className="side-bar-icons reduce-top-margin"></img>
      </div>
      <div className="col-12 side-bar-icon-text-container">
       <div className="col-12 ">Pros bid and can re-bid on you request, matching or beating competition</div>
      </div>
     </div>
    </div>
    <hr className="side-bar-horizontal-line"></hr>
    <div className="col-12 col-m-4 reduce-padding">
     <div className="row request-bar-lifted-icon">
      <div className="col-12">
       <img alt="logo-people" src={peopleIcon} className="side-bar-icons"></img>
      </div>
      <div className="col-12 side-bar-icon-text-container">
       <div className="col-12 ">You choose any Pro based on price and reviews</div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default IconPanel;
