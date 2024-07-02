import React from "react";
import NavbarComp from "../ReUseComponents/NavbarComp";
import AboutPageHeaderBg from "../ReUseComponents/AboutPageHeaderBg";
import GetInTouch from "./GetInTouch";
import FooterComp from "../HomePageFolder/Footer";

function Contact(props) {
  return (
    <>
      <NavbarComp />
      <AboutPageHeaderBg activeText={"Contact"} headerHeading={"Contact Us"} />
      <GetInTouch />
      <FooterComp />
    </>
  );
}

export default Contact;
