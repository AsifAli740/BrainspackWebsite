import React from "react";
import {
  DataProtectionHeading,
  DataProtectionText,
  DataProtectionTitle,
  DataProtectionWrapper,
  EmpoweringBussiness,
  HelpingContainerImageBox,
  HelpingContainerWrapper,
  HelpingContent,
  HelpingContentBox,
  HelpingContentWrapper,
  HelpingHeading,
  HelpingLineImageWrapper,
  HelpingPointsWrapper,
  OptimizeText,
  OptimizeTitle,
  OptimizeWrapper,
  TechnologySolutionHeading,
} from "./homePageStyled";
import twoDots from "../Assets/images/shapes/section-title-shape.png";
import { Box } from "@mui/material";
import { GetKnowUsTitle } from "./GetKnowUs/GetKnowUsStyled";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';


function HelpingContainer(props) {
  return (
    <HelpingContainerWrapper>
      <HelpingContainerImageBox></HelpingContainerImageBox>
      <HelpingContentWrapper>
        <HelpingLineImageWrapper></HelpingLineImageWrapper>
        <HelpingContent>
          <HelpingContentBox>
            <Box>


          <Box display={"flex"} alignItems={"center"} gap={"10px"}>
            <Box component={"img"} src={twoDots} />
            <TechnologySolutionHeading>Technology solution </TechnologySolutionHeading>
          </Box>
            <HelpingHeading>Helping businesses around the world</HelpingHeading>
            </Box>
            <EmpoweringBussiness>Empowering Global Businesses with Innovative Solutions.</EmpoweringBussiness>
            <HelpingPointsWrapper>
              <DataProtectionWrapper>
                <Box >
                <AdminPanelSettingsIcon sx={{fontSize:"65px !important", color: "#2be4ac"}}/>
                </Box>
                <DataProtectionTitle>Data Protection :</DataProtectionTitle>
                <DataProtectionText>Safeguarding Your Digital Assets with Vigilance.</DataProtectionText>

              </DataProtectionWrapper>
              <OptimizeWrapper>
              <Box >
                <SettingsSuggestIcon sx={{fontSize:"65px !important", color: "#2be4ac"}}/>
                </Box>
                <OptimizeTitle>Optimize IT System :</OptimizeTitle>
                <OptimizeText>Driving Efficiency Through Strategic Innovation.</OptimizeText>


              </OptimizeWrapper>
            </HelpingPointsWrapper>
            
          </HelpingContentBox>
        </HelpingContent>
      </HelpingContentWrapper>
    </HelpingContainerWrapper>
  );
}

export default HelpingContainer;
