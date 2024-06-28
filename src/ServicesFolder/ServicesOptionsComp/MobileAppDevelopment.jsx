import React from "react";
import ServicesComp from "../../ReUseComponents/ServicesComp";
import { SERVICES_PROVIDED } from "../../HomePageFolder/Constants";
import NavbarComp from "../../ReUseComponents/NavbarComp";
import FooterComp from "../../HomePageFolder/Footer";
import WhyChooseUs from "../../ReUseComponents/WhyChooseUs";

function MobileAppDevelopment(props) {
  return (
    <>
      <NavbarComp />
      <ServicesComp
        serviceName={SERVICES_PROVIDED[2].name}
        serviceText={SERVICES_PROVIDED[2].text}
        servicesImage={SERVICES_PROVIDED[2].image}
      />
      <WhyChooseUs />
      <FooterComp />
    </>
  );
}

export default MobileAppDevelopment;
