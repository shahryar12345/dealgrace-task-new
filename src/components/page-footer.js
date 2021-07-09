import React from "react";
import fbIcon from "../images/fb.svg";
import twitterIcon from "../images/twitter.svg";
import instaIcon from "../images/insta.svg";
import youtubeIcon from "../images/youtube.svg";

const PageFooter = () => {
 return (
  <div className="footer-container" style={{textAlign:"center"}}>
   <div className="row">
    <div className={"col-m-12 col-2 icon-container"}>
     <img alt="logo-chat" src={fbIcon} className="social-icon"></img>
     <img alt="logo-chat" src={twitterIcon} className="social-icon"></img>
     <img alt="logo-chat" src={instaIcon} className="social-icon"></img>
     <img alt="logo-chat" src={youtubeIcon} className="social-icon" style={{width:"32px"}}></img>
    </div>

    <div className={"col-m-12 col-5 link-container"}>
     <div className="footer-links">
      <a href={"?"}>How it works</a>
      <span> </span>
      <a href={"?"} >Contact Us</a>
      <span>|</span>
      <a href={"?"}>Privacy Policy</a>
      <span> </span>+
      <a href={"?"}>Terms of Use</a>
     </div>
    </div>
    <div className={"col-m-12 col-4 copyright-container"}>
     <div>© 2021 Syndafy Inc.</div>
    </div>
   
   </div>
  </div>
 );
};

export default PageFooter;
