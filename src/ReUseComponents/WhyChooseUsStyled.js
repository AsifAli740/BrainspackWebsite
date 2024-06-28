import { styled, Box } from "@mui/material";
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
  height: "80%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));
