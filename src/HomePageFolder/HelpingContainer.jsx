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
  TrustedSourceWrapper2,
} from "./homePageStyled";
import twoDots from "../Assets/images/shapes/section-title-shape.png";
import { Box, Typography } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import ScrollAnimation from "react-animate-on-scroll";
import helpingBlackImage from "../Assets/images/shapes/helping-shape-1.png";

function HelpingContainer(props) {
  return (
    <HelpingContainerWrapper>
      <TrustedSourceWrapper className="trustWrapper2">
        <ScrollAnimation animateIn="fadeInUp">
          <TrustedSourceWrapper2>
            <TrustedSourceBox>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                height={"140px"}
              >
                <TrustedSourceTextBox>
                  <TrustedSourceText>
                    Trusted source in IT services
                  </TrustedSourceText>
                </TrustedSourceTextBox>
                <IconBox>
                  <IconBoxImage></IconBoxImage>
                </IconBox>
                <QueryBox>
                  <AnyQuestionText>Have any question?</AnyQuestionText>
                  <NumberText>Free +91-9168117671</NumberText>
                </QueryBox>
              </Box>
            </TrustedSourceBox>
          </TrustedSourceWrapper2>
        </ScrollAnimation>
      </TrustedSourceWrapper>

      <HelpingContainerImageBox></HelpingContainerImageBox>
      <HelpingContentWrapper>
        <HelpingLineImageWrapper className="helpingLineImageWrapper">
          <ScrollAnimation animateIn="slideInRight">
            <Box
              component={"img"}
              width={"390px"}
              height={"500px"}
              src={helpingBlackImage}
            />
          </ScrollAnimation>
        </HelpingLineImageWrapper>
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
