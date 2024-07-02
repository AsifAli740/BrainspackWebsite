import React from "react";
import ServicesComp from "../../ReUseComponents/ServicesComp";
import { SERVICES_PROVIDED } from "../../HomePageFolder/Constants";
import FooterComp from "../../HomePageFolder/Footer";
import WhyChooseUs from "../../ReUseComponents/WhyChooseUs";
import NavbarComp from "../../ReUseComponents/NavbarComp";
import ServicePageHeaderLink from "../ServicePageHeaderLink";
import FrontendBackendContainer from "../FrontendBackendContainer";

function WebDevelopment(props) {
  return (
    <>
      <NavbarComp />
      <ServicePageHeaderLink
        activeText={"Services"}
        headerHeading={"Our Services"}
        nestedActiveText={"Web Development"}
      />
      <ServicesComp
        serviceName={SERVICES_PROVIDED[0].name}
        serviceText={SERVICES_PROVIDED[0].text}
        servicesImage={SERVICES_PROVIDED[0].image}
      />
      <FrontendBackendContainer />
      <WhyChooseUs />

      <FooterComp />
    </>
  );
}

export default WebDevelopment;
