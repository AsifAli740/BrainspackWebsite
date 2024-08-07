import React, { useState } from "react";
import ServicesComp from "../../ReUseComponents/ServicesComp";
import ServicePageHeaderLink from "../ServicePageHeaderLink";
import { SERVICES_PROVIDED } from "../../HomePageFolder/Constants";
import NavbarComp from "../../ReUseComponents/NavbarComp";
import FooterComp from "../../HomePageFolder/Footer";
import WhyChooseUs from "../../ReUseComponents/WhyChooseUs";
import WhyChooseOurServices from "../../ReUseComponents/WhyChooseOurServices";
import {
  WHY_CHOOSE_DIGITAL,
  WHY_CHOOSE_DIGITAL_MARKETING,
} from "../../Utils/constant";

function DigitalMarketing(props) {
  const [digital, setDigital] = useState();
  return (
    <>
      <NavbarComp />
      <ServicePageHeaderLink
        activeText={"Services"}
        headerHeading={"Our Services"}
        nestedActiveText={"Digital Marketing"}
      />
      <WhyChooseUs
        data={WHY_CHOOSE_DIGITAL}
        title={
          "Innovative strategies, measurable success, customized for your business triumph."
        }
      />
      <WhyChooseOurServices data={WHY_CHOOSE_DIGITAL_MARKETING} />
      <ServicesComp
        serviceName={SERVICES_PROVIDED[3].name}
        serviceText={SERVICES_PROVIDED[3].text}
        servicesImage={SERVICES_PROVIDED[3].image}
      />
      <ServiceWebDetailsComp content={serviceDigitalContent} />
      <WhyChooseUs />
      <FooterComp />
    </>
  );
}

export default DigitalMarketing;
