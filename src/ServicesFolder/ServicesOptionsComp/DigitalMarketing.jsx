import React from "react";
import ServicesComp from "../../ReUseComponents/ServicesComp";
import ServicePageHeaderLink from "../ServicePageHeaderLink";
import { SERVICES_PROVIDED } from "../../HomePageFolder/Constants";
import NavbarComp from "../../ReUseComponents/NavbarComp";
import FooterComp from "../../HomePageFolder/Footer";
import WhyChooseUs from "../../ReUseComponents/WhyChooseUs";
import ServiceWebDetailsComp from "../../ReUseComponents/ServiceWebDetailsComp";
import { serviceDigitalContent } from "../../Utils/constant";

function DigitalMarketing(props) {
  return (
    <>
      <NavbarComp />
      <ServicePageHeaderLink
        activeText={"Services"}
        headerHeading={"Our Services"}
        nestedActiveText={"Digital Marketing"}
      />
      <ServicesComp
        serviceName={SERVICES_PROVIDED[3].name}
        serviceText={SERVICES_PROVIDED[3].text}
        servicesImage={SERVICES_PROVIDED[3].image}
      />
    <ServiceWebDetailsComp content={serviceDigitalContent}/>
    <WhyChooseUs />
      <FooterComp />
    </>
  );
}

export default DigitalMarketing;
