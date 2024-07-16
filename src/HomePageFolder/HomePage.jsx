import React from "react";
import NavbarComp from "../ReUseComponents/NavbarComp";
import BrainspackServices from "./BrainspackServices";
import GetKnowUs from "./GetKnowUs/GetKnowUs";
import DevelopmentProcess from "./DevelopmentProcess";
import MainSlider from "./MainSlider";
import ServicesOfBrainspack from "../ReUseComponents/ServicesOfBrainspack";
import CounterItems from "../ReUseComponents/CounterItems";
import HelpingContainer from "./HelpingContainer";
import LaunchingComp from "./Launching";
import TechServicesComp from "./TechServices";
import FooterComp from "./Footer";
import MainSlider2 from "./MainSlider2";

const HomePage = () => {
  return (
    <>
      <NavbarComp />
      <MainSlider />
      {/* <MainSlider2 /> */}
      <BrainspackServices />
      <GetKnowUs />
      <DevelopmentProcess />
      <ServicesOfBrainspack />
      <LaunchingComp />
      <TechServicesComp />
      <CounterItems />
      <HelpingContainer />
      <FooterComp />
    </>
  );
};

export default HomePage;
