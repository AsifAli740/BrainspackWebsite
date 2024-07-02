import React from "react";
import ServicesComp from "../../ReUseComponents/ServicesComp";
import ServicePageHeaderLink from "../ServicePageHeaderLink";
import { SERVICES_PROVIDED } from "../../HomePageFolder/Constants";
import NavbarComp from "../../ReUseComponents/NavbarComp";
import FooterComp from "../../HomePageFolder/Footer";
import WhyChooseUs from "../../ReUseComponents/WhyChooseUs";
import { WHY_CHOOSE_MOBILE, WHY_CHOOSE_MOBILE_APP } from "../../Utils/constant";
import WhyChooseOurServices from "../../ReUseComponents/WhyChooseOurServices";

function MobileAppDevelopment(props) {
  return (
    <>
      <NavbarComp />
      <ServicesComp
        serviceName={SERVICES_PROVIDED[2].name}
        serviceText={SERVICES_PROVIDED[2].text}
        servicesImage={SERVICES_PROVIDED[2].image}
      />
      <ServicePageHeaderLink
        activeText={"Services"}
        headerHeading={"Our Services"}
        nestedActiveText={"Mobile App Development"}
      />
      <WhyChooseUs
        data={WHY_CHOOSE_MOBILE}
        title={
          "We excel through expertise, innovation, and client-focused success."
        }
      />
      <WhyChooseOurServices data={WHY_CHOOSE_MOBILE_APP} />
      <FooterComp />
    </>
  );
}

export default MobileAppDevelopment;
