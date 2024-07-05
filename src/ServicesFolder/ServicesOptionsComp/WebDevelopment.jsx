import React from "react";
import ServicesComp from "../../ReUseComponents/ServicesComp";
import { SERVICES_PROVIDED } from "../../HomePageFolder/Constants";
import FooterComp from "../../HomePageFolder/Footer";
import WhyChooseUs from "../../ReUseComponents/WhyChooseUs";
import NavbarComp from "../../ReUseComponents/NavbarComp";
import ServicePageHeaderLink from "../ServicePageHeaderLink";
import FrontendBackendContainer from "../FrontendBackendContainer";
import { WHY_CHOOSE_WEB } from "../../Utils/constant";
import { Outlet } from "react-router-dom";
import FrontAndBackendDetailsComp from "../../ReUseComponents/FrontAndBackendDetails";
import DevelopmentProcess from "../../HomePageFolder/DevelopmentProcess";

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
      <FrontAndBackendDetailsComp />
      <FrontendBackendContainer />
      <DevelopmentProcess />
      <WhyChooseUs
        data={WHY_CHOOSE_WEB}
        title={"Excellence Through Tailored Web Development Services."}
      />

      <FooterComp />
      {/* <Outlet /> */}
    </>
  );
}

export default WebDevelopment;
