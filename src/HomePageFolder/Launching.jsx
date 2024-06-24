import { Typography, Box } from "@mui/material";
import {
  LaunchingContainer,
  LaunchingWrapper,
  BusinessText,
  BusinessTextBox,
} from "./homePageStyled";
import { CustomBtn } from "./homePageStyled";

const LaunchingComp = () => {
  return (
    <>
      <LaunchingContainer>
        <LaunchingWrapper>
          <BusinessTextBox>
            <Box>
              <BusinessText variant="h5">
                Business from great idea to
              </BusinessText>
            </Box>
            <Box>
              <Typography variant="h1">Launching</Typography>
            </Box>
            <Box>
              <CustomBtn>Contact us now</CustomBtn>
            </Box>
          </BusinessTextBox>
        </LaunchingWrapper>
      </LaunchingContainer>
    </>
  );
};
export default LaunchingComp;
