import React from 'react';
import NavbarComp from '../../ReUseComponents/NavbarComp';
import ServicePageHeaderLink from '../ServicePageHeaderLink';

function UiUxDesigning(props) {
    return (
        <>
            <NavbarComp />
            <ServicePageHeaderLink activeText={"Services"} headerHeading={"Our Services"} nestedActiveText={"UI UX Designing"} />
        </>
    );
}

export default UiUxDesigning;