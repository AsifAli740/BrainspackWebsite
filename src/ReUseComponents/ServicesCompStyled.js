import { Box, Typography, styled } from "@mui/material";
import serviceNeedhelp from "../Assets/images/backgrounds/service-details-need-help-bg.jpg";
export const ServicesCompWrapper = styled(Box)(() => ({
  width: "100%",
  height: "auto",
  display: "flex",
  justifyContent: "center",
}));
export const ServicesCompBox = styled(Box)(() => ({
  width: "90%",
  height: "auto",
  display: "flex",
  justifyContent: "space-between",
}));
export const ServicesCompLeftBox = styled(Box)(() => ({
  width: "33%",
  height: "830px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));
export const ServicesProvidedBox = styled(Box)(() => ({
  width: "100%",
  height: "300px",
  backgroundColor: "#F7F7F9",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
export const ServicesProvidedMiniBox = styled(Box)(() => ({
  width: "80%",
  height: "80%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));
export const ServicesText = styled(Typography)(() => ({
  fontSize: "22px !important",
  fontWeight: "700 !important",
  color: "#1b1525 !important",
}));
export const ServicesProvidedImageContainer = styled(Box)(() => ({
  width: "100%",
  height: "400px",
  backgroundColor: "#1b1525",
}));

export const ServicesProvidedImageBox = styled(Box)(() => ({
  width: "100%",
  height: "400px",
  backgroundImage: `url(${serviceNeedhelp})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  backgroundColor: "#1b1525",
  backgroundPosition: "center",
  mixBlendMode: "luminosity",
  opacity: "0.5",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  //   gap: "20px",
}));
export const ServicesProvidedImageWrapper = styled(Box)(() => ({
  width: "70%",
  height: "80%",
}));
export const ServicesProvidedContactUs = styled(Box)(() => ({
  width: "100%",
  height: "75px",
  backgroundColor: "#55ad88",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const ServicesCompRightBox = styled(Box)(() => ({
  width: "65%",
  height: "auto",
}));

export const ServicesCompContentBox = styled(Box)(() => ({
  width: "100%",
  height: "auto",
}));
export const ServicesCompContentName = styled(Typography)(() => ({
  fontSize: "41px !important",
  fontWeight: "700 !important",
  color: "#1b1525 !important",
}));
export const ServicesCompContentText = styled(Typography)(() => ({
  fontSize: "19px !important",
  fontWeight: "400 !important",
  color: "#777181 !important",
}));