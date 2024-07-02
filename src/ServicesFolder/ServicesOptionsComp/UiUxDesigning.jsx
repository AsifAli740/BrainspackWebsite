import React from "react";
import NavbarComp from "../../ReUseComponents/NavbarComp";

import ServicesComp from "../../ReUseComponents/ServicesComp";
import { SERVICES_PROVIDED } from "../../HomePageFolder/Constants";
import FooterComp from "../../HomePageFolder/Footer";
import WhyChooseUs from "../../ReUseComponents/WhyChooseUs";
import ServicePageHeaderLink from "../ServicePageHeaderLink";
import ServiceWebDetailsComp from "../../ReUseComponents/ServiceWebDetailsComp";
import { serviceUiUxContent } from "../../Utils/constant";

function UiUxDesigning(props) {
  return (
    <>
      <NavbarComp />
      <ServicePageHeaderLink
        activeText={"Services"}
        headerHeading={"Our Services"}
        nestedActiveText={"UI UX Designing"}
      />
      <ServicesComp
        serviceName={SERVICES_PROVIDED[1].name}
        serviceText={SERVICES_PROVIDED[1].text}
        servicesImage={SERVICES_PROVIDED[1].image}
      />
      <ServiceWebDetailsComp content={serviceUiUxContent}/>
      <WhyChooseUs />

      <FooterComp />
    </>
  );
}

export default UiUxDesigning;
