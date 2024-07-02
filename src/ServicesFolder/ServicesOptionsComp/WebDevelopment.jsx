import React from "react";
import ServicesComp from "../../ReUseComponents/ServicesComp";
import { SERVICES_PROVIDED } from "../../HomePageFolder/Constants";
import FooterComp from "../../HomePageFolder/Footer";
import WhyChooseUs from "../../ReUseComponents/WhyChooseUs";
import NavbarComp from "../../ReUseComponents/NavbarComp";
import ServicePageHeaderLink from "../ServicePageHeaderLink";
import FrontendBackendContainer from "../FrontendBackendContainer";
import { WHY_CHOOSE_WEB } from "../../Utils/constant";

function WebDevelopment(props) {
  return (
    <>
      <NavbarComp />
      <ServicesComp
        serviceName={SERVICES_PROVIDED[0].name}
        serviceText={SERVICES_PROVIDED[0].text}
        servicesImage={SERVICES_PROVIDED[0].image}
      />
      <WhyChooseUs
        data={WHY_CHOOSE_WEB}
        title={"Excellence Through Tailored Web Development Services."}
      />
      <ServicePageHeaderLink
        activeText={"Services"}
        headerHeading={"Our Services"}
        nestedActiveText={"Web Development"}
      />
      <FrontendBackendContainer />

      <FooterComp />
    </>
  );
}

export default WebDevelopment;
