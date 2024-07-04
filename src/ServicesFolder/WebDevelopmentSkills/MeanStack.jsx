import React from "react";
import NavbarComp from "../../ReUseComponents/NavbarComp";
import ServicePageHeaderLink from "../ServicePageHeaderLink";
import ServiceWebDetailsComp from "../../ReUseComponents/ServiceWebDetailsComp";
import { serviceMeanContent } from "../../Utils/constant";
import FooterComp from "../../HomePageFolder/Footer";

function MeanStack(props) {
  return (
    <>
      <NavbarComp />
      <ServicePageHeaderLink
        activeText={"Services"}
        headerHeading={"MEAN Stack"}
        nestedActiveText={"Mean Stack"}
      />
            <ServiceWebDetailsComp content={serviceMeanContent} />

            <FooterComp />
    </>
  );
}

export default MeanStack;
