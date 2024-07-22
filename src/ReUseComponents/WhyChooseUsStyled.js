import {
  styled,
  Box,
  Typography,
  Accordion,
  AccordionDetails,
} from "@mui/material";
import WhyChooseUsImage from "../Assets/images/services/service-details-benefits-img.jpg";
export const WhyChooseUsWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "500px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.between("sm", "md")]: {
    height: "400px",
  },
  [theme.breakpoints.between("md", "lg")]: {
    height: "400px",
  },
}));
export const WhyChooseUsContainer = styled(Box)(({ theme }) => ({
  width: "90%",
  height: "80%",
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.between("sm", "md")]: {},
  [theme.breakpoints.between("md", "lg")]: {
    height: "90%",
  },
}));
export const WhyChooseUsImageBox = styled(Box)(({ theme }) => ({
  width: "49%",
  height: "100%",
  backgroundImage: `url(${WhyChooseUsImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  [theme.breakpoints.between("sm", "md")]: {
    height: "70%",
  },
  [theme.breakpoints.between("md", "lg")]: {
    height: "73%",
  },
}));
export const WhyChooseUsContentBox = styled(Box)(({ theme }) => ({
  width: "49%",
  height: "75%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  [theme.breakpoints.between("sm", "md")]: {
    height: "90%",
  },
  [theme.breakpoints.between("md", "lg")]: {
    height: "90%",
    justifyContent: "space-evenly",
  },
}));
export const WhyChooseUsTitle = styled(Typography)(() => ({
  fontSize: "24px !important",
  fontWeight: "700 !important",
  color: "#1b1525 !important",
}));
export const CreatingWebsiteTextBox = styled(Box)(({ theme }) => ({
  width: "90%",
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
  },
}));
export const CreatingWebsiteText = styled(Typography)(({ theme }) => ({
  fontSize: "18px !important",
  fontWeight: "600 !important",
  color: "#2be4ac !important",
  lineHeight: "35px !important",
  [theme.breakpoints.between("md", "lg")]: {
    color: "#55ad88 !important",
  },
}));
export const CreatingWebsiteTextDetails = styled(Typography)(() => ({
  fontSize: "16px !important",
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
  paddingBottom: "100px",
}));
export const UiAndUxHeading = styled(Typography)(() => ({
  fontSize: "19px !important",
  fontWeight: "500 !important",
  color: "#1b1525 ! important",
}));
export const UiAndUxSubHeading = styled(Typography)(() => ({
  fontSize: "17px !important",
  fontWeight: "600 !important",
  color: "#777181 ! important",
}));
export const UiAndUxParagraph = styled(Typography)(() => ({
  fontSize: "17px !important",
  fontWeight: "400 !important",
  color: "#777181 ! important",
  // lineHeight: "30px !important",
}));

export const CustomAccordian = styled(Accordion)(() => ({
  padding: "20px !important",
}));
export const CustomAccordianDetails = styled(AccordionDetails)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
}));
