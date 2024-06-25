import React from 'react';
import NavbarComp from '../ReUseComponents/NavbarComp';
import AboutPageHeaderBg from '../ReUseComponents/AboutPageHeaderBg';

function Contact(props) {
    return (
        <>
        <NavbarComp />
        <AboutPageHeaderBg activeText={"Contact"} headerHeading={"Contact Us"} />
            
        </>
    );
}

export default Contact;