import React from "react";
import ServicesComp from "../../ReUseComponents/ServicesComp";
import ServicePageHeaderLink from "../ServicePageHeaderLink";
import { SERVICES_PROVIDED } from "../../HomePageFolder/Constants";
import NavbarComp from "../../ReUseComponents/NavbarComp";
import FooterComp from "../../HomePageFolder/Footer";
import WhyChooseUs from "../../ReUseComponents/WhyChooseUs";
import ServiceWebDetailsComp from "../../ReUseComponents/ServiceWebDetailsComp";
import { serviceMobileContent } from "../../Utils/constant";

function MobileAppDevelopment(props) {
  return (
    <>
      <NavbarComp />
      <ServicePageHeaderLink
        activeText={"Services"}
        headerHeading={"Our Services"}
        nestedActiveText={"Mobile App Development"}
      />
      <ServicesComp
        serviceName={SERVICES_PROVIDED[2].name}
        serviceText={SERVICES_PROVIDED[2].text}
        servicesImage={SERVICES_PROVIDED[2].image}
      />
          <ServiceWebDetailsComp content={serviceMobileContent}/>

      <WhyChooseUs />
      <FooterComp />
    </>
  );
}

export default MobileAppDevelopment;
