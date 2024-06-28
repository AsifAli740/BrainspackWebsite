import React from "react";
import {
  BackEndWrapper,
  FrontEndContentBox,
  FrontEndHeading,
  FrontEndSubHeading,
  FrontEndWebHeading,
  FrontEndWebHeadingWrapper,
  FrontEndWrapper,
  ServiceFrontEndContentWrapper,
  ServiceFrontEndDetailWrapper,
  ServiceFrontEndImgWrapper,
  ServiceWebHeading,
  ServiceWebHeadingWrapper,
  WebFrontContainer,
  WebFrontWrapper,
  WebImage,
  WebImageWrapper,
} from "./servicesStyled";
import {
  serviceBackEndContent,
  serviceFrontEndContent,
} from "../Utils/constant";
import { Box } from "@mui/material";

function FrontendBackendContainer(props) {
  return (
    <WebFrontContainer>
      <WebFrontWrapper>
        <FrontEndWrapper>
          <ServiceWebHeadingWrapper>
            <ServiceWebHeading>Front-end Development</ServiceWebHeading>
          </ServiceWebHeadingWrapper>
          {serviceFrontEndContent.map((ele) => (
            <ServiceFrontEndDetailWrapper>
              <ServiceFrontEndImgWrapper>
                <WebImageWrapper>
                  <WebImage component={"img"} src={ele.image} />
                </WebImageWrapper>
              </ServiceFrontEndImgWrapper>
              <ServiceFrontEndContentWrapper>
                <FrontEndContentBox>
                  <FrontEndHeading>{ele.heading}</FrontEndHeading>
                  <FrontEndSubHeading>{ele.subHeading}</FrontEndSubHeading>
                </FrontEndContentBox>
              </ServiceFrontEndContentWrapper>
            </ServiceFrontEndDetailWrapper>
          ))}
        </FrontEndWrapper>
        <BackEndWrapper>
          <ServiceWebHeadingWrapper>
            <ServiceWebHeading>Back-end Development</ServiceWebHeading>
          </ServiceWebHeadingWrapper>
          {serviceBackEndContent.map((ele) => (
            <ServiceFrontEndDetailWrapper>
              <ServiceFrontEndImgWrapper>
              <WebImageWrapper>
                  <WebImage component={"img"} src={ele.image} />
                </WebImageWrapper>
              </ServiceFrontEndImgWrapper>
              <ServiceFrontEndContentWrapper>
                <FrontEndContentBox>
                  <FrontEndHeading>{ele.heading}</FrontEndHeading>
                  <FrontEndSubHeading>{ele.subHeading}</FrontEndSubHeading>
                </FrontEndContentBox>
              </ServiceFrontEndContentWrapper>
            </ServiceFrontEndDetailWrapper>
          ))}
        </BackEndWrapper>
      </WebFrontWrapper>
    </WebFrontContainer>
  );
}

export default FrontendBackendContainer;
