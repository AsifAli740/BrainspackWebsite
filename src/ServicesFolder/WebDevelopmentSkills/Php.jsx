import React from "react";
import { WHY_CHOOSE_PHP, WHY_CHOOSE_Php } from "../../Utils/constant";
import WhyChooseOurServices from "../../ReUseComponents/WhyChooseOurServices";
import ServicesComp from "../../ReUseComponents/ServicesComp";
import { SERVICES_PROVIDED } from "../../HomePageFolder/Constants";
import WhyChooseUs from "../../ReUseComponents/WhyChooseUs";
import NavbarComp from "../../ReUseComponents/NavbarComp";
import FooterComp from "../../HomePageFolder/Footer";
import ServicePageHeaderLink from "../ServicePageHeaderLink";

function Php(props) {
  return (
    <>
      <NavbarComp />
      <ServicePageHeaderLink
        activeText={"Services"}
        headerHeading={"PHP"}
        nestedActiveText={"PHP"}
      />
      <ServicesComp
        serviceName={SERVICES_PROVIDED[6].name}
        serviceText={SERVICES_PROVIDED[6].text}
        servicesImage={SERVICES_PROVIDED[6].image}
      />
      <WhyChooseUs
        data={WHY_CHOOSE_Php}
        title={
          "We excel through expertise, innovation, and client-focused success."
        }
      />
      <WhyChooseOurServices data={WHY_CHOOSE_PHP} />
      <FooterComp />
    </>
  );
}

export default Php;
