import { Box, Typography } from "@mui/material";
import {
  CreatingWebsiteText,
  CreatingWebsiteTextBox,
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
            <CreatingWebsiteTextBox>
              <CreatingWebsiteText>{title}</CreatingWebsiteText>
            </CreatingWebsiteTextBox>
            <Box
              sx={{
                display: "flex",
                height: "150px",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              {data.map((item) => (
                <Box display={"flex"} gap={"15px"} alignItems={"center"}>
                  <Box>{item.icon}</Box>
                  <CreatingWebsiteTextDetails>
                    {item.name}
                  </CreatingWebsiteTextDetails>
                </Box>
              ))}
            </Box>
          </WhyChooseUsContentBox>
        </WhyChooseUsContainer>
      </WhyChooseUsWrapper>
    </>
  );
};
export default WhyChooseUs;
