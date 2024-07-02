import React, { useState } from "react";
import NavbarComp from "../../ReUseComponents/NavbarComp";
import ServicesComp from "../../ReUseComponents/ServicesComp";
import { SERVICES_PROVIDED } from "../../HomePageFolder/Constants";
import FooterComp from "../../HomePageFolder/Footer";
import WhyChooseUs from "../../ReUseComponents/WhyChooseUs";
import ServicePageHeaderLink from "../ServicePageHeaderLink";
import WhyChooseOurServices from "../../ReUseComponents/WhyChooseOurServices";
import { WHY_CHOOSE, WHY_CHOOSE_UI_DESIGNING } from "../../Utils/constant";

const UiUxDesigning = () => {
  return (
    <>
      <NavbarComp />
      <ServicesComp
        serviceName={SERVICES_PROVIDED[1].name}
        serviceText={SERVICES_PROVIDED[1].text}
        servicesImage={SERVICES_PROVIDED[1].image}
      />
      <ServicePageHeaderLink
        activeText={"Services"}
        headerHeading={"Our Services"}
        nestedActiveText={"UI UX Designing"}
      />
      <WhyChooseUs
        data={WHY_CHOOSE}
        title={
          "Creating visually engaging websites for seamless user experiences and branding."
        }
      />
      <WhyChooseOurServices data={WHY_CHOOSE_UI_DESIGNING} />

      <FooterComp />
    </>
  );
};

export default UiUxDesigning;
