import React from 'react';
import NavbarComp from '../../ReUseComponents/NavbarComp';
import ServicePageHeaderLink from '../ServicePageHeaderLink';
import { serviceMernContent } from '../../Utils/constant';
import FooterComp from '../../HomePageFolder/Footer';
import ServiceWebDetailsComp from '../../ReUseComponents/ServiceWebDetailsComp';

function MernStack(props) {
    return (
        <>
            <NavbarComp />
            <ServicePageHeaderLink
        activeText={"Services"}
        headerHeading={"MERN Stack"}
        nestedActiveText={"Mern Stack"}
      />
      <ServiceWebDetailsComp content={serviceMernContent} />

<FooterComp />
        </>
    );
}

export default MernStack;