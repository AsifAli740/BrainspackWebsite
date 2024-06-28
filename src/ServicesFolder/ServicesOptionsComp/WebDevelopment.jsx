import React from 'react';
import NavbarComp from '../../ReUseComponents/NavbarComp';
import ServicePageHeaderLink from '../ServicePageHeaderLink';
import FrontendBackendContainer from '../FrontendBackendContainer';

function WebDevelopment() {
    return (
        <>
        <NavbarComp />
        <ServicePageHeaderLink activeText={"Services"} headerHeading={"Our Services"} nestedActiveText={"Web Development"} />
        <FrontendBackendContainer />

        </>
    );
}

export default WebDevelopment;