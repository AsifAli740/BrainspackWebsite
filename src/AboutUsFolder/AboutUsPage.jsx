import React from "react";
import NavbarComp from "../ReUseComponents/NavbarComp";
import AboutPageHeaderBg from "../ReUseComponents/AboutPageHeaderBg";
import OurVisionMission from "./OurVisionMission";
import CounterItems from "../ReUseComponents/CounterItems";
import FooterComp from "../HomePageFolder/Footer";
import TeamCarousal from "./TeamCarousal";
import AboutBusinessComp from "./AboutBusinessComp";
import "animate.css";
import ServicesProvider from "./ServicesProvider";

function AboutUsPage() {
  return (
    <>
      <NavbarComp />
      <AboutPageHeaderBg activeText={"About Us"} headerHeading={"About Us"} />
      <ServicesProvider />
      <AboutBusinessComp />
      <OurVisionMission />
      <CounterItems />
      <TeamCarousal />

      <FooterComp />
    </>
  );
}

export default AboutUsPage;
