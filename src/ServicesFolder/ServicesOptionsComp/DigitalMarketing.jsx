import React from "react";
import ServicesComp from "../../ReUseComponents/ServicesComp";
import ServicePageHeaderLink from "../ServicePageHeaderLink";
import { SERVICES_PROVIDED } from "../../HomePageFolder/Constants";
import NavbarComp from "../../ReUseComponents/NavbarComp";
import FooterComp from "../../HomePageFolder/Footer";
import WhyChooseUs from "../../ReUseComponents/WhyChooseUs";

function DigitalMarketing(props) {
  return (
    <>
      <NavbarComp />
      <ServicesComp
        serviceName={SERVICES_PROVIDED[3].name}
        serviceText={SERVICES_PROVIDED[3].text}
        servicesImage={SERVICES_PROVIDED[3].image}
      />
      <ServicePageHeaderLink
        activeText={"Services"}
        headerHeading={"Our Services"}
        nestedActiveText={"Digital Marketing"}
      />
      <WhyChooseUs />
      <FooterComp />
    </>
  );
}

export default DigitalMarketing;
