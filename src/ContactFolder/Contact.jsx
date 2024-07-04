import React from "react";
import NavbarComp from "../ReUseComponents/NavbarComp";
import AboutPageHeaderBg from "../ReUseComponents/AboutPageHeaderBg";
import GetInTouch from "./GetInTouch";
import FooterComp from "../HomePageFolder/Footer";
import MernStack from "../ServicesFolder/WebDevelopmentSkills/MernStack";

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
