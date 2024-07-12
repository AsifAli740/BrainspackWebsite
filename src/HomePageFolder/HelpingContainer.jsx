import React from "react";
import {
  AnyQuestionText,
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
  IconBox,
  IconBoxImage,
  NumberText,
  OptimizeText,
  OptimizeTitle,
  OptimizeWrapper,
  QueryBox,
  TechnologySolutionHeading,
  TrustedSourceBox,
  TrustedSourceText,
  TrustedSourceTextBox,
  TrustedSourceWrapper,
} from "./homePageStyled";
import twoDots from "../Assets/images/shapes/section-title-shape.png";
import { Box, Typography } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

function HelpingContainer(props) {
  return (
    <HelpingContainerWrapper>
      <TrustedSourceWrapper>
        <TrustedSourceBox className="trustedAnimation">
          <TrustedSourceTextBox>
            <TrustedSourceText>Trusted source in IT services</TrustedSourceText>
          </TrustedSourceTextBox>
          <IconBox>
            <IconBoxImage></IconBoxImage>
          </IconBox>
          <QueryBox>
            <AnyQuestionText>Have any question?</AnyQuestionText>
            <NumberText>Free +91-9168117671</NumberText>
          </QueryBox>
        </TrustedSourceBox>
      </TrustedSourceWrapper>
      <HelpingContainerImageBox></HelpingContainerImageBox>
      <HelpingContentWrapper>
        <HelpingLineImageWrapper></HelpingLineImageWrapper>
        <HelpingContent>
          <HelpingContentBox>
            <Box>
              <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                <Box component={"img"} src={twoDots} />
                <TechnologySolutionHeading>
                  Technology solution{" "}
                </TechnologySolutionHeading>
              </Box>
              <HelpingHeading>
                Helping businesses around the world
              </HelpingHeading>
            </Box>
            <EmpoweringBussiness>
              Empowering Global Businesses with Innovative Solutions.
            </EmpoweringBussiness>
            <HelpingPointsWrapper>
              <DataProtectionWrapper>
                <Box>
                  <AdminPanelSettingsIcon
                    sx={{ fontSize: "65px !important", color: "#2be4ac" }}
                  />
                </Box>
                <DataProtectionTitle>Data Protection :</DataProtectionTitle>
                <DataProtectionText>
                  Safeguarding Your Digital Assets with Vigilance.
                </DataProtectionText>
              </DataProtectionWrapper>
              <OptimizeWrapper>
                <Box>
                  <SettingsSuggestIcon
                    sx={{ fontSize: "65px !important", color: "#2be4ac" }}
                  />
                </Box>
                <OptimizeTitle>Optimize IT System :</OptimizeTitle>
                <OptimizeText>
                  Driving Efficiency Through Strategic Innovation.
                </OptimizeText>
              </OptimizeWrapper>
            </HelpingPointsWrapper>
          </HelpingContentBox>
        </HelpingContent>
      </HelpingContentWrapper>
    </HelpingContainerWrapper>
  );
}

export default HelpingContainer;
