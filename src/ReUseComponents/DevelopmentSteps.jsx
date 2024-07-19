import { Box, Typography } from "@mui/material";
import { DEVELOPMENT_STEPS } from "../Utils/constant";
import {
  DevelopmentStepsBox,
  DevelopmentStepsContainer,
  DevelopmentStepsIconsBox,
  DevelopmentStepsLineWrapper,
  DevelopmentStepsNameBox,
  DevelopmentStepsNameText,
} from "../HomePageFolder/DevelopmentProcessStyled";

const DevelopmentStepsComp = () => {
  return (
    <>
      <DevelopmentStepsContainer>
        <DevelopmentStepsLineWrapper></DevelopmentStepsLineWrapper>
        {DEVELOPMENT_STEPS.map((ele) => (
          <DevelopmentStepsIconsBox>
            <DevelopmentStepsBox>{ele.icon}</DevelopmentStepsBox>
            <DevelopmentStepsNameBox>
              <DevelopmentStepsNameText>{ele.name}</DevelopmentStepsNameText>
            </DevelopmentStepsNameBox>
          </DevelopmentStepsIconsBox>
        ))}
      </DevelopmentStepsContainer>
    </>
  );
};
export default DevelopmentStepsComp;
