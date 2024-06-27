import React from 'react';
import NavbarComp from '../ReUseComponents/NavbarComp';
import AboutPageHeaderBg from '../ReUseComponents/AboutPageHeaderBg';
import OurVisionMission from './OurVisionMission';
import CounterItems from '../ReUseComponents/CounterItems';
import SwipeableTextMobileStepper from '../Carousel/TeamMemberCarousel';
import TeamCarousel from '../Carousel/carousel';


function AboutUsPage() {
    return (
        <>
        <NavbarComp />
        <AboutPageHeaderBg activeText={"About Us"} headerHeading={"About Us"} />
        <OurVisionMission />
        <CounterItems/>
        <TeamCarousel />

        



            
        </>
    );
}

export default AboutUsPage;