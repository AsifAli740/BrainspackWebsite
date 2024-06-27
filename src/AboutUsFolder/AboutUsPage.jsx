import React from 'react';
import NavbarComp from '../ReUseComponents/NavbarComp';
import AboutPageHeaderBg from '../ReUseComponents/AboutPageHeaderBg';
import OurVisionMission from './OurVisionMission';
import CounterItems from '../ReUseComponents/CounterItems';
import SwipeableTextMobileStepper from '../Carousel/TeamMemberCarousel';
import TeamCarousel from '../Carousel/carousel';
import { Box, Typography } from "@mui/material";
import twoDots from "../Assets/images/shapes/section-title-shape.png";
import {
  GetKnowUsTitle,
  GetKnowUsTitle2,
} from "../HomePageFolder/GetKnowUs/GetKnowUsStyled";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import LaunchingComp from "../HomePageFolder/Launching";
import {
    ServiceProvideBox,
    ServiceProvideContent,
    ServiceProvideContentBox,
    ServiceProvideImageBox,
    ServiceProvideImageBox1,
    ServiceProvideImageBox2,
    ServiceProvideWrapper,
    ShapingFutureText,
  } from "./aboutUsStyled";
import FooterComp from '../HomePageFolder/Footer';


function AboutUsPage() {
    return (
        <>
        <NavbarComp />
        <AboutPageHeaderBg activeText={"About Us"} headerHeading={"About Us"} />
        <ServiceProvideWrapper>
        <ServiceProvideBox>
          <ServiceProvideContentBox>
            <Box display={"flex"} alignItems={"center"} gap={"10px"}>
              <Box component={"img"} src={twoDots} />
              <GetKnowUsTitle>Stay protected</GetKnowUsTitle>
            </Box>
            <Box>
              <GetKnowUsTitle2>Brainspack provide IT Services</GetKnowUsTitle2>
            </Box>
            <Box>
              <ShapingFutureText>
                <span>
                  <FormatQuoteIcon />
                </span>
                Shaping The Future of Business With Web.{" "}
                <span>
                  <FormatQuoteIcon />
                </span>
              </ShapingFutureText>
            </Box>
            <Box>
              <ServiceProvideContent>
                Brainspack excels in delivering cutting-edge IT services,
                offering personalized solutions precisely aligned with unique
                business requirements. With a commitment to driving success in
                the digital realm, we ensure businesses thrive through advanced,
                custom approaches that enhance their digital presence and
                performance.
              </ServiceProvideContent>
            </Box>
          </ServiceProvideContentBox>
          <ServiceProvideImageBox>
            <ServiceProvideImageBox1></ServiceProvideImageBox1>
            <ServiceProvideImageBox2></ServiceProvideImageBox2>
          </ServiceProvideImageBox>
        </ServiceProvideBox>
      </ServiceProvideWrapper>
      <LaunchingComp />
        <OurVisionMission />
        <CounterItems/>
        <TeamCarousel />
        <FooterComp />

        



            
        </>
    );
}

export default AboutUsPage;
