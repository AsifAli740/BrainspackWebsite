import React from "react";
import {
    AboutHeading,
    AboutHeadingWrapper,
    AboutLinkWrapper,
  PageHeaderBg,
  PageHeaderInnerBox,
} from "./aboutPageHeaderBgStyled";
import { Slash } from "./NavbarStyled";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

function AboutPageHeaderBg({activeText, headerHeading}) {
  return (
    <>
      <PageHeaderBg>
        <PageHeaderInnerBox>
            <AboutLinkWrapper>

          <Typography>
            <Link className="AboutHomeLink" to={"/"}>
              Home
            </Link>
          </Typography>
          <Slash sx={{color:"#2be4ac", fontWeight:"700"}}>/</Slash>
          <Typography className="AboutHomeLink">
              {activeText}
          </Typography>
            </AboutLinkWrapper>
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

export default AboutPageHeaderBg;
