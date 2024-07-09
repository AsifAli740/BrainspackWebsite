import {
  AbsoluteBox,
  TechServicesContainer,
  TechServicesImageBox,
  TechServicesText,
  TechServicesTextBox,
  TechServicesTextWrapper,
  TechServicesWrapper,
  LearnMoreBtn,
  CustomFab,
  FabText,
} from "./homePageStyled";
import { Box, Button, Fab, Typography } from "@mui/material";
import techServices from "../Assets/images/resources/tech-services-img-1.jpg";
// import twoDots from "../../Assets/images/shapes/section-title-shape.png";
import twoDots from "../Assets/images/shapes/section-title-shape.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import {
  GetKnowUsTitle,
  GetKnowUsTitle2,
  Offerings,
} from "./GetKnowUs/GetKnowUsStyled";
import { TECH_SERVICES } from "../Utils/constant";

const TechServicesComp = () => {
  return (
    <>
      <TechServicesContainer>
        <TechServicesWrapper>
          <TechServicesImageBox
            position={"relative"}
            className="getToKnowUsAnimation"
          >
            <Box
              component={"img"}
              height={"95%"}
              width={"85%"}
              src={techServices}
            />
            <AbsoluteBox>
              <TechServicesTextBox>
                <TechServicesText>
                  Tech solutions bringing your business ideas to digital life
                </TechServicesText>
                <Box>
                  <LearnMoreBtn endIcon={<ArrowRightAltIcon />}>
                    Learn more
                  </LearnMoreBtn>
                </Box>
              </TechServicesTextBox>
            </AbsoluteBox>
          </TechServicesImageBox>
          <TechServicesTextWrapper>
            <Box display={"flex"} alignItems={"center"} gap={"10px"}>
              <Box component={"img"} src={twoDots} />
              <GetKnowUsTitle>Stay protected</GetKnowUsTitle>
            </Box>
            <Box>
              <GetKnowUsTitle2>
                Tech services for your business ideas:
              </GetKnowUsTitle2>
            </Box>
            <Box>
              <Offerings>
                Unlock tailored excellence with brainspack tech services
              </Offerings>
            </Box>
            {TECH_SERVICES.map((service) => (
              <Box display={"flex"} alignItems={"center"} gap={"20px"}>
                <CustomFab>{service.icon}</CustomFab>
                <FabText>{service.name}</FabText>
              </Box>
            ))}
          </TechServicesTextWrapper>
        </TechServicesWrapper>
      </TechServicesContainer>
    </>
  );
};
export default TechServicesComp;
