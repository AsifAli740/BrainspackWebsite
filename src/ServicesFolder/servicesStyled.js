import { Box, Typography } from "@mui/material";
import styled from "styled-components";
export const WebFrontContainer = styled(Box)(({}) => ({
  width: "100%",
  height: "1600px",
  // backgroundColor:"purple",
  display: "flex",
  justifyContent: "center",
}));
export const ServiceDetailContainer = styled(Box)(({}) => ({
  width: "100%",
  height: "auto",
  // backgroundColor:"purple",
  display: "flex",
  justifyContent: "center",
}));

export const WebFrontWrapper = styled(Box)(({}) => ({
  width: "86.5%",
  height: "inherit",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));
export const FrontEndWrapper = styled(Box)(({}) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
//   justifyContent: "space-between",
}));
export const BackEndWrapper = styled(Box)(({}) => ({
  width: "100%",
  height: "420px",
  display: "flex",
  flexDirection: "column",
//   justifyContent: "space-between",
}));
export const ServiceWebHeadingWrapper = styled(Box)(({}) => ({
  width: "100%",
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "end",
}));
export const ServiceWebHeading = styled(Typography)(({}) => ({
  fontWeight: "500 !important",
  fontSize: "30px !important",
}));
export const ServiceFrontEndDetailWrapper = styled(Box)(({}) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  justifyContent: "space-between",
  marginBottom:"25px"
}));
export const ServiceFrontEndImgWrapper = styled(Box)(({}) => ({
  width: "30%",
  height: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
export const WebImageWrapper = styled(Box)(({}) => ({
  width: "180px",
  height: "140px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
}));
export const WebImage = styled(Box)(({}) => ({
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
  borderRadius: "20px",
}));

export const ServiceFrontEndContentWrapper = styled(Box)(({}) => ({
  width: "66%",
  height: "auto",
  backgroundColor: "#f7f7f9",
  display: "flex",
  flexDirection: "column",
  padding: "35px 40px",
  justifyContent: "space-between",
  // alignItems:"center"
}));
export const FrontEndContentBox = styled(Box)(({}) => ({
  width: "90%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));
export const FrontEndHeading = styled(Typography)(({}) => ({
  fontSize: "18px !important",
  fontWeight: "600 !important",
  paddingBottom: "12px",
}));
export const FrontEndSubHeading = styled(Typography)(({}) => ({
  fontSize: "17px !important",
  color: "#777181",
  fontWeight: "400 !important",
}));
