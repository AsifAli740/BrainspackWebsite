import React from 'react';
import NavbarComp from '../../ReUseComponents/NavbarComp';
import ServicePageHeaderLink from '../ServicePageHeaderLink';

function MobileAppDevelopment(props) {
    return (
        <>
            <NavbarComp />
            <ServicePageHeaderLink activeText={"Services"} headerHeading={"Our Services"} nestedActiveText={"Mobile App Development"} />
        </>
    );
}

export default MobileAppDevelopment;