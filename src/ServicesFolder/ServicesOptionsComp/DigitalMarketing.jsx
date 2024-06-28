import React from 'react';
import NavbarComp from '../../ReUseComponents/NavbarComp';
import ServicePageHeaderLink from '../ServicePageHeaderLink';

function DigitalMarketing(props) {
    return (
        <>
            <NavbarComp />
            <ServicePageHeaderLink activeText={"Services"} headerHeading={"Our Services"} nestedActiveText={"Digital Marketing"} />
        </>
    );
}

export default DigitalMarketing;