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
} from "./ServicesCompStyled";
// import SERVICES_PROVIDED from "../HomePageFolder/Constants";
import { OUR_SERVICES, SERVICES_PROVIDED } from "../HomePageFolder/Constants";
import { IconBox, IconBoxImage } from "../HomePageFolder/homePageStyled";
import { Link, NavLink } from "react-router-dom";
import "../ExternalCss/GetKnowUs.css";

const ServicesComp = ({ serviceName, serviceText, servicesImage }) => {
  return (
    <>
      <ServicesCompWrapper>
        <ServicesCompBox>
          <ServicesCompLeftBox>
            <ServicesProvidedBox>
              <ServicesProvidedMiniBox>
                <Box>
                  <ServicesText>Services</ServicesText>
                </Box>
                {OUR_SERVICES.map((service) => (
                  <Box>
                    <Link className="services" to={service.link}>
                      {service.name}
                    </Link>
                  </Box>
                ))}
              </ServicesProvidedMiniBox>
            </ServicesProvidedBox>
            <ServicesProvidedImageContainer>
              <ServicesProvidedImageBox>
                <ServicesProvidedImageWrapper>
                  <IconBox>
                    <IconBoxImage></IconBoxImage>
                  </IconBox>
                  <Box>
                    <Typography variant="h5">
                      Easy solutions to your tech problem
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h6">Have any question?</Typography>
                    <Typography variant="h6">Free +91-9168117671</Typography>
                  </Box>
                </ServicesProvidedImageWrapper>
              </ServicesProvidedImageBox>
            </ServicesProvidedImageContainer>
            <ServicesProvidedContactUs>
              <Link className="contactUs" to={"/Contact"}>
                Contact Us
              </Link>
            </ServicesProvidedContactUs>
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
