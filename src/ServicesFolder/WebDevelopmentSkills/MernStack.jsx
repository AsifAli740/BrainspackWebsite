import React from "react";
import { WHY_CHOOSE_MERN, WHY_CHOOSE_MERN_STACK } from "../../Utils/constant";
import WhyChooseOurServices from "../../ReUseComponents/WhyChooseOurServices";
import ServicesComp from "../../ReUseComponents/ServicesComp";
import { SERVICES_PROVIDED } from "../../HomePageFolder/Constants";
import WhyChooseUs from "../../ReUseComponents/WhyChooseUs";
import NavbarComp from "../../ReUseComponents/NavbarComp";
import FooterComp from "../../HomePageFolder/Footer";

function MernStack(props) {
  return (
    <>
      <ServicesComp
        serviceName={SERVICES_PROVIDED[5].name}
        serviceText={SERVICES_PROVIDED[5].text}
        servicesImage={SERVICES_PROVIDED[5].image}
      />
      <WhyChooseUs
        data={WHY_CHOOSE_MERN}
        title={
          "We excel through expertise, innovation, and client-focused success."
        }
      />
      <WhyChooseOurServices data={WHY_CHOOSE_MERN_STACK} />
    </>
  );
}

export default MernStack;
