import React from "react";
import NavbarComp from "../../ReUseComponents/NavbarComp";
import ServicesComp from "../../ReUseComponents/ServicesComp";
import { SERVICES_PROVIDED } from "../../HomePageFolder/Constants";
import FooterComp from "../../HomePageFolder/Footer";
import WhyChooseUs from "../../ReUseComponents/WhyChooseUs";

function UiUxDesigning(props) {
  return (
    <>
      <NavbarComp />
      <ServicesComp
        serviceName={SERVICES_PROVIDED[1].name}
        serviceText={SERVICES_PROVIDED[1].text}
        servicesImage={SERVICES_PROVIDED[1].image}
      />
      <WhyChooseUs />
      <FooterComp />
    </>
  );
}

export default UiUxDesigning;
