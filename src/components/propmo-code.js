import React, { useEffect, useState } from "react";
const PromoCode = () => {
 const [toggleState, setToggleState] = useState(false);
 const handleToggle = (e) => {
  e.preventDefault();
  setToggleState(!toggleState);
 };
 return (
  <div className={"PromoCode-container"} onClick={(e) => handleToggle(e)}>
   <div className={"PromoCode-heading"}>Promo Code</div>
   <div className={"PromoCode-Icon"}>
    <span>+</span>
   </div>
   {toggleState && <div className={"PromoCode-Content"}>Feature comming soon.</div>}
  </div>
 );
};
export default PromoCode;
