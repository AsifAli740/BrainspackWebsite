import React from 'react';
import NavbarComp from '../ReUseComponents/NavbarComp';
import AboutPageHeaderBg from '../ReUseComponents/AboutPageHeaderBg';
import BrainspackServices from '../HomePageFolder/BrainspackServices';
import ServicesOfBrainspack from '../ReUseComponents/ServicesOfBrainspack';
import TechServicesComp from '../HomePageFolder/TechServices';
import FooterComp from '../HomePageFolder/Footer';

function Services(props) {
    return (
        <>
        <NavbarComp />
        <AboutPageHeaderBg activeText={"Services"} headerHeading={"Our Services"} />
        <BrainspackServices />
        <ServicesOfBrainspack />
        <TechServicesComp />
        <FooterComp />

        
            
        </>
    );
}

export default Services;