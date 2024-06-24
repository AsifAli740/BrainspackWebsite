import React from "react";
import {
  HelpingContainerImageBox,
  HelpingContainerWrapper,
  HelpingContent,
  HelpingContentWrapper,
  HelpingHeading,
  HelpingLineImageWrapper,
  TechnologySolutionHeading,
} from "./homePageStyled";
import twoDots from "../Assets/images/shapes/section-title-shape.png";
import { Box } from "@mui/material";
import { GetKnowUsTitle } from "./GetKnowUs/GetKnowUsStyled";


function HelpingContainer(props) {
  return (
    <HelpingContainerWrapper>
      <HelpingContainerImageBox></HelpingContainerImageBox>
      <HelpingContentWrapper>
        <HelpingLineImageWrapper></HelpingLineImageWrapper>
        <HelpingContent>
          <Box display={"flex"} alignItems={"center"} gap={"10px"}>
            <Box component={"img"} src={twoDots} />
            <TechnologySolutionHeading>Technology solution </TechnologySolutionHeading>
          </Box>
            <HelpingHeading>Helping businesses around the world</HelpingHeading>
        </HelpingContent>
      </HelpingContentWrapper>
    </HelpingContainerWrapper>
  );
}

export default HelpingContainer;
