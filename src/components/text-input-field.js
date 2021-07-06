import React from "react";
const TextInputField = () => {
 const handle = (e) => {
  console.log(e.target.value);
 };
 return (
  <>
   <input className="text-input-field" type="text" onChange={(e) => handle(e)}></input>
  </>
 );
};
export default TextInputField;
