import { Box, Typography } from "@mui/material";
import {
  CreatingWebsiteText,
  CreatingWebsiteTextDetails,
  WhyChooseUsContainer,
  WhyChooseUsContentBox,
  WhyChooseUsImageBox,
  WhyChooseUsTitle,
  WhyChooseUsWrapper,
} from "./WhyChooseUsStyled";
import { WHY_CHOOSE } from "../Utils/constant";

const WhyChooseUs = ({ data, title }) => {
  return (
    <>
      <WhyChooseUsWrapper>
        <WhyChooseUsContainer>
          <WhyChooseUsImageBox></WhyChooseUsImageBox>
          <WhyChooseUsContentBox>
            <Box>
              <WhyChooseUsTitle>Why choose us ?</WhyChooseUsTitle>
            </Box>
            <Box width={"90%"}>
              <CreatingWebsiteText>{title}</CreatingWebsiteText>
            </Box>
            {data.map((item) => (
              <Box display={"flex"} gap={"15px"}>
                <Box>{item.icon}</Box>
                <CreatingWebsiteTextDetails>
                  {item.name}
                </CreatingWebsiteTextDetails>
              </Box>
            ))}
          </WhyChooseUsContentBox>
        </WhyChooseUsContainer>
      </WhyChooseUsWrapper>
    </>
  );
};
export default WhyChooseUs;
