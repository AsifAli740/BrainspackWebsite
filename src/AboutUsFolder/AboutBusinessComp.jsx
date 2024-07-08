import { Typography, Box } from "@mui/material";
import {
  LaunchingContainer,
  LaunchingWrapper,
  BusinessText,
  BusinessTextBox,
  BusinessTextBoxWrapper,
  LaunchingHeading,
  CustomBtn,
  BrainspackHeading,
  BusinessSubHeading,
} from "../HomePageFolder/homePageStyled";
// import { CustomBtn } from "./homePageStyled";

const AboutBusinessComp = () => {
  return (
    <>
      <LaunchingContainer>
        <LaunchingWrapper>
          <BusinessTextBoxWrapper>
            <BusinessTextBox>
              <Box>
                <BrainspackHeading>
                  Brains
                  <Typography variant="span" color={"#55ad88"}>
                    p
                  </Typography>
                  ack
                </BrainspackHeading>
              </Box>
              <Box sx={{width:"87%"}}>
                <BusinessSubHeading>
                  Brainspack is a globally acknowledged brand specializing in
                  the creation of advanced web and mobile applications. Through
                  meticulous research, a design thinking-driven methodology, and
                  unparalleled expertise in strategy, consulting, technology,
                  and operations, we forge an innovative pathway to assist
                  enterprises. Assisting businesses in embracing emerging
                  technologies to stay ahead of evolving trends. The success of
                  the organization is attributed to its capacity for delivering
                  steadfast leadership.
                </BusinessSubHeading>
              </Box>
              {/* <Box>
              <CustomBtn>Contact us now</CustomBtn>
            </Box> */}
            </BusinessTextBox>
          </BusinessTextBoxWrapper>
        </LaunchingWrapper>
      </LaunchingContainer>
    </>
  );
};
export default AboutBusinessComp;
