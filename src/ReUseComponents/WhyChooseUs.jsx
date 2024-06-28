import { Box, Typography } from "@mui/material";
import {
  WhyChooseUsContainer,
  WhyChooseUsContentBox,
  WhyChooseUsImageBox,
  WhyChooseUsWrapper,
} from "./WhyChooseUsStyled";
import { WHY_CHOOSE } from "../Utils/constant";

const WhyChooseUs = () => {
  return (
    <>
      <WhyChooseUsWrapper>
        <WhyChooseUsContainer>
          <WhyChooseUsImageBox></WhyChooseUsImageBox>
          <WhyChooseUsContentBox>
            <Box>
              <Typography variant="h5">Why choose us ?</Typography>
            </Box>
            <Box>
              <Typography variant="h5">
                Creating visually engaging websites for seamless user
                experiences and branding.
              </Typography>
            </Box>
            {WHY_CHOOSE.map((item) => (
              <Box display={"flex"}>
                <Box>{item.icon}</Box>
                <Typography>{item.name}</Typography>
              </Box>
            ))}
          </WhyChooseUsContentBox>
        </WhyChooseUsContainer>
      </WhyChooseUsWrapper>
    </>
  );
};
export default WhyChooseUs;
