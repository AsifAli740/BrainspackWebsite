import { Typography, Box, Fab } from "@mui/material";
import {
  DevelopmentProcessContainer,
  DevelopmentProcessWrapper,
  DevelopmentTextBox,
  DevelopmentText,
  DevelopmentIconsBox,
  DevelopmentImagesBox,
} from "./DevelopmentProcessStyled";
import { DEVELOPMENT_PROCESS } from "../Utils/constant";
const DevelopmentProcess = () => {
  return (
    <>
      <DevelopmentProcessContainer>
        <DevelopmentProcessWrapper>
          <DevelopmentTextBox>
            <DevelopmentText>Our Development Process</DevelopmentText>
          </DevelopmentTextBox>
          <Box display={"flex"} height={"90%"} width={"100%"}>
            <DevelopmentIconsBox>
              {DEVELOPMENT_PROCESS.map((icons) => (
                <Box display={"flex"}>
                  <Fab>{icons.icon}</Fab>
                  <Typography variant="h6">{icons.name}</Typography>
                </Box>
              ))}
            </DevelopmentIconsBox>
            <DevelopmentImagesBox></DevelopmentImagesBox>
          </Box>
        </DevelopmentProcessWrapper>
      </DevelopmentProcessContainer>
    </>
  );
};
export default DevelopmentProcess;
