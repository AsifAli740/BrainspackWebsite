import React from "react";
import WhyChooseOurServices from "../../ReUseComponents/WhyChooseOurServices";
import { WHY_CHOOSE_MEAN, WHY_CHOOSE_MEAN_STACK } from "../../Utils/constant";
import WhyChooseUs from "../../ReUseComponents/WhyChooseUs";
import ServicesComp from "../../ReUseComponents/ServicesComp";
import { SERVICES_PROVIDED } from "../../HomePageFolder/Constants";
import NavbarComp from "../../ReUseComponents/NavbarComp";
import ServicePageHeaderLink from "../ServicePageHeaderLink";
import ServiceWebDetailsComp from "../../ReUseComponents/ServiceWebDetailsComp";
import { serviceMeanContent } from "../../Utils/constant";
import FooterComp from "../../HomePageFolder/Footer";

function MeanStack(props) {
  return (
    <>
      <NavbarComp />
      <ServicePageHeaderLink
        activeText={"Services"}
        headerHeading={"MEAN Stack"}
        nestedActiveText={"Mean Stack"}
      />
      <ServicesComp
        serviceName={SERVICES_PROVIDED[4].name}
        serviceText={SERVICES_PROVIDED[4].text}
        servicesImage={SERVICES_PROVIDED[4].image}
      />
      <ServiceWebDetailsComp content={serviceMeanContent} />

      <WhyChooseUs
        data={WHY_CHOOSE_MEAN}
        title={
          "We excel through expertise, innovation, and client-focused success."
        }
      />
      <WhyChooseOurServices data={WHY_CHOOSE_MEAN_STACK} />

      <FooterComp />
    </>
  );
}

export default MeanStack;
