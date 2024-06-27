//BRAINSPACK SERVICE PROVIDE

import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import serviceProvide from "../Assets/images/resources/notech-more-img-1.jpg";

export const ServiceProvideWrapper = styled(Box)(() => ({
  width: "100%",
  height: "700px",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  paddingRight: "15px",
}));
export const ServiceProvideBox = styled(Box)(() => ({
  width: "95%",
  height: "70%",
  display: "flex",
  justifyContent: "space-between",
}));

export const ServiceProvideImageBox = styled(Box)(() => ({
  width: "50%",
  height: "90%",
  position: "relative",
  display: "flex",
  alignItems: "center",
}));
export const ServiceProvideImageBox1 = styled(Box)(() => ({
  width: "100%",
  height: "80%",
  backgroundColor: "#55ad88",
  zIndex: "2",
}));
export const ServiceProvideImageBox2 = styled(Box)(() => ({
  width: "92%",
  height: "100%",
  backgroundImage: `url(${serviceProvide})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  zIndex: "4",
  position: "absolute",
  top: "0",
}));
export const ServiceProvideContentBox = styled(Box)(() => ({
  width: "37%",
  height: "88%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));
export const ShapingFutureText = styled(Typography)(() => ({
  color: "black !important",
  fontSize: "20px !important",
  fontWeight: "700 !important",
}));

export const ServiceProvideContent = styled(Typography)(() => ({
  color: "#777181 !important",
  fontSize: "20px !important",
  lineHeight: "32px !important",
  fontWeight: "500 !important",
}));
