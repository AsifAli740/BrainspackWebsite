import React from "react";
import NavbarComp from "../ReUseComponents/NavbarComp";
import BrainspackServices from "./BrainspackServices";
import GetKnowUs from "./GetKnowUs/GetKnowUs";
import DevelopmentProcess from "./DevelopmentProcess";

function HomePage(props) {
  return (
    <>
      <NavbarComp />
      <BrainspackServices />
      <GetKnowUs />
      <DevelopmentProcess />
    </>
  );
}

export default HomePage;
