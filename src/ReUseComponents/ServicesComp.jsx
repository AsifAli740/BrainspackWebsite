import { Box, Typography } from "@mui/material";
import {
  ServicesCompWrapper,
  ServicesCompBox,
  ServicesCompRightBox,
  ServicesCompLeftBox,
  ServicesProvidedBox,
  ServicesCompImageBox,
  ServicesCompContentBox,
  ServicesCompContentName,
  ServicesCompContentText,
  ServicesProvidedImageBox,
  ServicesProvidedImageContainer,
  ServicesProvidedContactUs,
  ServicesProvidedImageWrapper,
  ServicesProvidedMiniBox,
  ServicesText,
  EasySolutionsText,
  HaveAnyQuesText,
  ContactNumberText,
  EasySolutionsTextBox,
} from "./ServicesCompStyled";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { OUR_SERVICES, SERVICES_PROVIDED } from "../HomePageFolder/Constants";
import {
  DiscoverMoreBtn,
  IconBox,
  IconBoxImage,
} from "../HomePageFolder/homePageStyled";
import { Link, NavLink } from "react-router-dom";
import "../ExternalCss/GetKnowUs.css";
import { CustomBtn, CustomBtnWebDevelopment } from "./NavbarStyled";

const ServicesComp = ({ serviceName, serviceText, servicesImage }) => {
  return (
    <>
      <ServicesCompWrapper>
        <ServicesCompBox>
          <ServicesCompLeftBox>
            <ServicesProvidedBox>
              <ServicesProvidedMiniBox>
                <Box height={"5%"} padding={"30px 0px 0px 10px"}>
                  <ServicesText>Services</ServicesText>
                </Box>
                <Box
                  className="servicesParent"
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"10px"}
                >
                  {OUR_SERVICES.map((service) => (
                    <Box>
                      <Box className="parentLink">
                        <NavLink
                          className={`services ${service?.class}`}
                          to={service.link}
                        >
                          {service.name}

                          <ArrowRightAltIcon
                            className="arrow-right"
                            sx={{ color: "#55ad88" }}
                          />
                        </NavLink>
                        <Box className="innerChild">
                          {service.child
                            ? service.child.map((child) => {
                                return (
                                  <NavLink
                                    className={`services ${child.class}`}
                                    to={child.link}
                                  >
                                    {child.name}

                                    <ArrowRightAltIcon
                                      className="arrow-right"
                                      sx={{ color: "#55ad88" }}
                                    />
                                  </NavLink>
                                );
                              })
                            : ""}
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </ServicesProvidedMiniBox>
            </ServicesProvidedBox>
            <ServicesProvidedImageContainer>
              <ServicesProvidedImageBox>
                <ServicesProvidedImageWrapper>
                  <IconBox>
                    <IconBoxImage></IconBoxImage>
                  </IconBox>
                  <EasySolutionsTextBox>
                    <EasySolutionsText>
                      Easy solutions to your tech problem
                    </EasySolutionsText>
                  </EasySolutionsTextBox>
                  <Box>
                    <HaveAnyQuesText variant="h6">
                      Have any question?
                    </HaveAnyQuesText>
                    <ContactNumberText variant="h6">
                      Free +91-9168117671
                    </ContactNumberText>
                  </Box>
                </ServicesProvidedImageWrapper>
              </ServicesProvidedImageBox>
            </ServicesProvidedImageContainer>
            <Link to={"/contact"}>
              {" "}
              <CustomBtnWebDevelopment className="discover-button">
                <Box className="discover-web-dev-overlay"></Box>
                <DiscoverMoreBtn className="typo">
                  {"Contact us"}
                </DiscoverMoreBtn>
              </CustomBtnWebDevelopment>
            </Link>
          </ServicesCompLeftBox>
          <ServicesCompRightBox>
            <Box
              component={"img"}
              height={"443px"}
              width={"100%"}
              backgroundRepeat={"no-repeat"}
              src={servicesImage}
            />

            <ServicesCompContentBox>
              <ServicesCompContentName>{serviceName}</ServicesCompContentName>
              <ServicesCompContentText>{serviceText}</ServicesCompContentText>
            </ServicesCompContentBox>
          </ServicesCompRightBox>
        </ServicesCompBox>
      </ServicesCompWrapper>
    </>
  );
};
export default ServicesComp;
