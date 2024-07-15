import React from "react";
import {
  CounterContainer,
  CounterContainerWrapper,
  CounterIcon,
  CounterItem,
  CounterItemBox,
  CounterItemWrapper,
  DataCounter,
  DataCounterPlus,
  FabIcon,
  TitleOfCounter,
} from "./counterItemsStyled";
import { counterItemContent } from "../Utils/constant";
import { Box, Fab, Typography } from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";
import CountUp from "react-countup";

function CounterItems() {
  return (
    <CounterContainerWrapper>
      <CounterContainer>
        <ScrollAnimation animateIn="fadeInUp">
          <CounterItemWrapper>
            <CounterItemBox>
              {counterItemContent.map((ele) => (
                <CounterItem className="counterItem">
                  <Box className="customBox">
                    <FabIcon className="customFabIcon" border="1px solid green">
                      <CounterIcon className="customIcons">
                        {ele.icons}
                      </CounterIcon>
                    </FabIcon>
                  </Box>

                  <Box>
                    <CountUp
                      className="counting"
                      end={ele.dataCount}
                      enableScrollSpy={true}
                    />
                    <DataCounterPlus variant="span">
                      {ele.counterPlus}
                    </DataCounterPlus>
                  </Box>
                  <TitleOfCounter>{ele.counterTitle}</TitleOfCounter>
                </CounterItem>
              ))}
            </CounterItemBox>
          </CounterItemWrapper>
        </ScrollAnimation>
      </CounterContainer>
    </CounterContainerWrapper>
  );
}

export default CounterItems;
