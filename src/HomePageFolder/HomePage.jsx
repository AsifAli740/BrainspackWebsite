import React from "react";
import NavbarComp from "../ReUseComponents/NavbarComp";
import BrainspackServices from "./BrainspackServices";
import GetKnowUs from "./GetKnowUs/GetKnowUs";
import DevelopmentProcess from "./DevelopmentProcess";
import MainSlider from "./MainSlider";
import ServicesOfBrainspack from "../ReUseComponents/ServicesOfBrainspack";
import CounterItems from "../ReUseComponents/CounterItems";
import HelpingContainer from "./HelpingContainer";
// import GetKnowUs from "../HomePageFolder/GetKnowUs/GetKnowUs";
import LaunchingComp from "./Launching";
import TechServicesComp from "./TechServices";
import FooterComp from "./Footer";
import CustomizedSteppers from "../ReUseComponents/Stepper";
import MeanStack from "../ServicesFolder/WebDevelopmentSkills/MeanStack";

const HomePage = (props) => {
  return (
    <>
      <NavbarComp />
      <MainSlider />
      <BrainspackServices />
      <GetKnowUs />
      <DevelopmentProcess />
      <ServicesOfBrainspack />
      <LaunchingComp />
      <TechServicesComp />
      <CounterItems />
      <HelpingContainer />
      <FooterComp />
      <CustomizedSteppers />
      <MeanStack />
    </>
  );
};

export default HomePage;
