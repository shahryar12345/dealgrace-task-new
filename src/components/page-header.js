import logo from "../images/dealgrace_logo.png";
import menuIcon from "../images/hamburger-icon.svg";
import searchIcon from "../images/search-icon.svg";

import React from "react";

const PageHeader = () => {
 return (
  <div className="header-bar">
   <div className={"logo-menu-container"}>
    <div className={"icon-Container"}>
     <a href="?">
      <img alt="logo-company" src={logo} className="logo"></img>
     </a>
    </div>
    <div className={"menu-login-Container"}>
     <a href="?" className="login-button">
      Login
     </a>
    </div>
    <div className={"search-Icon-Container"}>
     <img alt="logo-search-icon" src={searchIcon} className="search-Icon"></img>
    </div>

    <div className={"menu-icon-container"}>
     <img alt="logo-menu" src={menuIcon} className="menu-icon"></img>
    </div>
   </div>
  </div>
 );
};

export default PageHeader;
