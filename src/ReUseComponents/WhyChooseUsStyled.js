import { styled, Box, Typography, Accordion } from "@mui/material";
import WhyChooseUsImage from "../Assets/images/services/service-details-benefits-img.jpg";
export const WhyChooseUsWrapper = styled(Box)(() => ({
  width: "100%",
  height: "500px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
export const WhyChooseUsContainer = styled(Box)(() => ({
  width: "90%",
  height: "80%",
  display: "flex",
  justifyContent: "space-between",
}));
export const WhyChooseUsImageBox = styled(Box)(() => ({
  width: "49%",
  height: "100%",
  backgroundImage: `url(${WhyChooseUsImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
}));
export const WhyChooseUsContentBox = styled(Box)(() => ({
  width: "49%",
  height: "85%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));
export const WhyChooseUsTitle = styled(Typography)(() => ({
  fontSize: "24px !important",
  fontWeight: "700 !important",
  color: "#1b1525 !important",
}));
export const CreatingWebsiteText = styled(Typography)(() => ({
  fontSize: "19px !important",
  fontWeight: "500 !important",
  color: "#2be4ac !important",
  lineHeight: "35px !important",
}));
export const CreatingWebsiteTextDetails = styled(Typography)(() => ({
  fontSize: "17px !important",
  fontWeight: "400 !important",
  color: "#777181 !important",
}));

// ___________________________________________________________________________________
// WHY CHOOSE OUR SERVICE STYLED

export const UiAndUxWrapper = styled(Box)(() => ({
  width: "100%",
  height: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
export const UiAndUxBox = styled(Box)(() => ({
  width: "90%",
}));
export const UiAndUxHeading = styled(Box)(() => ({
  fontSize: "19px !important",
  fontWeight: "500 !important",
  color: "#1b1525 ! important",
}));
export const UiAndUxSubHeading = styled(Box)(() => ({
  fontSize: "17px !important",
  fontWeight: "600 !important",
  color: "#777181 ! important",
}));
export const UiAndUxParagraph = styled(Box)(() => ({
  fontSize: "16px !important",
  fontWeight: "400 !important",
  color: "#777181 ! important",
}));

export const CustomAccordian = styled(Accordion)(() => ({
  padding: "20px !important",
}));
