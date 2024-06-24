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

function HomePage(props) {
  return (
    <>
      <NavbarComp />
      <MainSlider />

      <BrainspackServices />
      <GetKnowUs />
      <DevelopmentProcess />

      <ServicesOfBrainspack />
      <CounterItems/>
      <HelpingContainer />
    </>
  );
}

export default HomePage;
