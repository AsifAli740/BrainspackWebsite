import React from "react";
import {
  MissionContent,
  MissionHeading,
  MissonImageBg,
  OurMissionBox,
  OurVisionBox,
  OurVisionHeading,
  OurVisionHeadingBox,
  OurVisionImageBox,
  OurVisionImageIntroWrapper,
  OurVisionImageWrapper,
  OurVisionIntroWrapper,
  OurVisionMissionBox,
  OurVisionMissionWrapper,
  SpinningImage,
  VisionContent,
  VisionHeading,
} from "./aboutUsStyled";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { ThemeConsumer } from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import ourVisionImage from "../Assets/images/resources/get-to-know-img-1.jpg";
import { Box } from "@mui/material";

function OurVisionMission(props) {
  return (
    <OurVisionMissionWrapper>
      <MissonImageBg></MissonImageBg>
      <OurVisionHeading>
        <TrendingUpIcon
          sx={{ fontSize: "50px", fontWeight: "900", color: "#55ad88" }}
        />
        OUR VISION AND MISSION
      </OurVisionHeading>

      <OurVisionImageIntroWrapper>
        <OurVisionImageBox className="ourVisionImageBox">
          <ScrollAnimation animateIn="slideInLeft">
            <Box
              component={"img"}
              width={"100%"}
              height={"540px"}
              src={ourVisionImage}
            />
          </ScrollAnimation>
        </OurVisionImageBox>
        <OurVisionIntroWrapper>
          <OurVisionBox>
            <VisionHeading>Our Vision:</VisionHeading>
            <VisionContent>
              Our Vision is to be a globally recognized IT service and
              consultancy partner, empowering businesses with innovative
              solutions and enabling sustainable growth in the digital age.We
              are dedicated to empowering businesses through strategic IT
              services and consultancy.
            </VisionContent>
          </OurVisionBox>
          <OurMissionBox>
            <MissionHeading>Our Mission:</MissionHeading>
            <MissionContent>
              Our Mission is to provide value by harnessing the power of
              technology, fostering continuous learning, and promoting
              collaboration. We navigate our clients through the complexities of
              the digital landscape, ensuring long-term success and growth in an
              ever-evolving technological ecosystem. Committed to exceeding
              expectations, building lasting partnerships, and contributing to
              the digital advancement of businesses worldwide.
            </MissionContent>
          </OurMissionBox>
        </OurVisionIntroWrapper>
      </OurVisionImageIntroWrapper>
    </OurVisionMissionWrapper>
  );
}

export default OurVisionMission;
