import React from "react";
import {
  FrontEndContentBox,
  FrontEndHeading,
  FrontEndSubHeading,
  FrontEndWrapper,
  ServiceDetailContainer,
  ServiceFrontEndContentWrapper,
  ServiceFrontEndDetailWrapper,
  ServiceFrontEndImgWrapper,
  ServiceWebHeading,
  ServiceWebHeadingWrapper,
  WebFrontContainer,
  WebFrontWrapper,
  WebImage,
  WebImageWrapper,
} from "../ServicesFolder/servicesStyled";
import { serviceFrontEndContent, serviceUiUxContent } from "../Utils/constant";

function ServiceWebDetailsComp({ content }) {
  return (
    <div>
      <ServiceDetailContainer>
        <WebFrontWrapper>
          <FrontEndWrapper>
            {content.map((ele) => (
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
        </WebFrontWrapper>
      </ServiceDetailContainer>
    </div>
  );
}

export default ServiceWebDetailsComp;
