import React from "react";
import {
    AboutHeading,
    AboutHeadingWrapper,
  PageHeaderBg,
  PageHeaderInnerBox,
} from "../ReUseComponents/aboutPageHeaderBgStyled";
import { Slash } from "../ReUseComponents/NavbarStyled";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { ServiceLinkWrapper } from "../ReUseComponents/aboutPageHeaderBgStyled";

function ServicePageHeaderLink({activeText, headerHeading, nestedActiveText}) {
  return (
    <>
      <PageHeaderBg>
        <PageHeaderInnerBox>
            <ServiceLinkWrapper>

          <Typography>
            <Link className="AboutHomeLink" to={"/"}>
              Home
            </Link>
          </Typography>
          <Slash sx={{color:"#2be4ac", fontWeight:"700"}}>/</Slash>
          <Typography className="AboutHomeLink">
              {activeText}
          </Typography>
          <Slash sx={{color:"#2be4ac", fontWeight:"700"}}>/</Slash>
          <Typography className="AboutHomeLink">
              {nestedActiveText}
          </Typography>
            </ServiceLinkWrapper>
            <AboutHeadingWrapper>
            <AboutHeading>
            {headerHeading}
            

            </AboutHeading>
            </AboutHeadingWrapper>
        </PageHeaderInnerBox>
      </PageHeaderBg>
    </>
  );
}

export default ServicePageHeaderLink;
