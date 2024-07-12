import { Typography, Box } from "@mui/material";
import {
  LaunchingContainer,
  LaunchingWrapper,
  BusinessText,
  BusinessTextBox,
  BusinessTextBoxWrapper,
  LaunchingHeading,
} from "./homePageStyled";
import { CustomBtn } from "./homePageStyled";
import { Link } from "react-router-dom";

const LaunchingComp = () => {
  return (
    <>
      <LaunchingContainer>
        <LaunchingWrapper>
            <BusinessTextBoxWrapper >
          <BusinessTextBox >

            <Box >
              <BusinessText variant="h5">
                Business from great idea to
              </BusinessText>
            </Box>
            <Box>
              <LaunchingHeading >LAUNCHING</LaunchingHeading>
            </Box>
            <Box>
              <Link to={"/contact"}>
              <CustomBtn>Contact us now</CustomBtn>
              </Link>
            </Box>
          </BusinessTextBox>
            </BusinessTextBoxWrapper>
        </LaunchingWrapper>
      </LaunchingContainer>
    </>
  );
};
export default LaunchingComp;
