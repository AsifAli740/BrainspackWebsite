import React from "react";
import {
  BrainspackService,
  BrainspackServiceContainer,
  BrainspackServiceIntroWrapper,
  ServiceOfferingBox,
  ServiceOfferingIntroBox,
  OfferingHeading,
  BrainspackNutshell,
  ServiceOfferingIntroduction,
  ServiceCardWrapper,
  ServiceCard,
  ServiceCardContentWrapper,
  CardHeading,
  CardSubHeading,
} from "./serviceBrainspackStyled";
import twoDots from "../Assets/images/shapes/section-title-shape.png";
import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import { serviceCardContent } from "../Utils/constant";

function ServicesOfBrainspack(props) {
  return (
    <BrainspackServiceContainer>
      <BrainspackService>
        <BrainspackServiceIntroWrapper>
          <ServiceOfferingBox>
            <Box display={"flex"} gap={"10px"} alignItems={"center"}>
              <Box component={"img"} src={twoDots} />
              <OfferingHeading>What we’re offering</OfferingHeading>
            </Box>
            <BrainspackNutshell>
              Brainspack Services in a Nutshell:
            </BrainspackNutshell>
          </ServiceOfferingBox>
          <ServiceOfferingIntroBox>
            <ServiceOfferingIntroduction>
              we specialize in a wide array of technologies, ensuring that our
              clients benefit from the latest advancements in the digital
              landscape. Our technical proficiency includes:
            </ServiceOfferingIntroduction>
          </ServiceOfferingIntroBox>
        </BrainspackServiceIntroWrapper>
        <ServiceCardWrapper>
            {
                serviceCardContent.map((ele)=>(
                    <ServiceCard>
                            <ServiceCardContentWrapper>
                                <Typography>
                                    {ele.icons}
                                </Typography>
                                <CardHeading>
                                    {ele.heading}
                                </CardHeading>
                                <CardSubHeading>
                                    {ele.subHeading}
                                </CardSubHeading>
                            </ServiceCardContentWrapper>
                    </ServiceCard>
                ))
            }
            
          
        </ServiceCardWrapper>
      </BrainspackService>
    </BrainspackServiceContainer>
  );
}

export default ServicesOfBrainspack;
