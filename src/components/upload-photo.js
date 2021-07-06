import React, { useEffect, useState } from "react";
const UploadPhoto = () => {
 const [toggleState, setToggleState] = useState(false);
 const handleToggle = (e) => {
  e.preventDefault();
  setToggleState(!toggleState);
 };
 return (
  <div className={"UploadPhoto-container"} onClick={(e) => handleToggle(e)}>
   <div className={"UploadPhoto-heading"}>Picture Upload</div>
   <div className={"UploadPhoto-Icon"}>
    <span>+</span>
   </div>
   {toggleState && <div className={"UploadPhoto-Content"}>Feature comming soon.</div>}
  </div>
 );
};
export default UploadPhoto;
