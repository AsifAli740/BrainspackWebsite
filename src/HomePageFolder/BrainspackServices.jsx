import {
  ServicesWrapper,
  ServicesBox,
  ServicesCard,
  ServicesHeading,
  ServicesCardMedia,
  LearnMoreBtn,
  OverlayWrapper,
  OverlayTop,
  OverlapContentWrapper,
  OverlapText,
  OverlayTextHeading,
  OverlayTextSubHeading,
  ServicesHeadingWrapper,
  ServicesCardWrapper,
} from "./homePageStyled";
import { SERVICES_CONTENT } from "./Constants";
import { Box, Typography } from "@mui/material";
import { serviceCardContent } from "../Utils/constant";
import {
  CardHeading,
  CardSubHeading,
} from "../ReUseComponents/serviceBrainspackStyled";
import { Link, useNavigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const BrainspackServices = () => {
  const navigate = useNavigate();
  return (
    <>
      <ServicesWrapper>
        <ServicesBox>
          {SERVICES_CONTENT.map((service) => (
            <ServicesCard position={"relative"} className="container">
              <ServicesCardWrapper
                className={"imageServiceBox"}
                boxSizing={"border-box"}
                overflow={"hidden"}
              >
                <ServicesCardMedia
                  component="img"
                  src={service.image}
                  className="scaleImage"
                />
                <OverlayWrapper className="overlay"></OverlayWrapper>
                <OverlayTop className="overlay-top">
                  <OverlapContentWrapper>
                    <OverlapText className="text">
                      <Typography>{service.icons}</Typography>
                      <Link className="link-style" to={service.link}>
                        <OverlayTextHeading className="overlay-heading">
                          {service.name}
                        </OverlayTextHeading>
                      </Link>
                      <OverlayTextSubHeading>
                        {service.subHeading}
                      </OverlayTextSubHeading>
                      <Box>
                        <Link to={service.link}>
                          <LearnMoreBtn
                            className="Learn-more"
                            sx={{ color: "#55ad88!important" }}
                            endIcon={<ArrowRightAltIcon />}
                          >
                            Learn more
                          </LearnMoreBtn>
                        </Link>
                      </Box>
                    </OverlapText>
                  </OverlapContentWrapper>
                </OverlayTop>
                <ServicesHeadingWrapper>
                  <ServicesHeading variant="h5">{service.name}</ServicesHeading>
                </ServicesHeadingWrapper>
              </ServicesCardWrapper>
            </ServicesCard>
          ))}
        </ServicesBox>
      </ServicesWrapper>
    </>
  );
};
export default BrainspackServices;
