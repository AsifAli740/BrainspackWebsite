import styled from "styled-components";
import { Box, Button, Typography } from "@mui/material";
import ourVisionImage from "../Assets/images/resources/get-to-know-img-1.jpg";
import ourVisionImageBgBottomLeft from "../Assets/images/shapes/get-to-know-shape-1.png";
import serviceProvide from "../Assets/images/resources/notech-more-img-1.jpg";

// ================== OUR VISION AND MISSION STYLING ============================

export const OurVisionMissionWrapper = styled(Box)(() => ({
  width: "100%",
  height: "830px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  position: "relative",
}));

export const OurVisionHeading = styled(Typography)(() => ({
  fontSize: "40px !important",
  fontWeight: "500 !important",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
}));
export const OurVisionImageIntroWrapper = styled(Box)(() => ({
  width: "87%",
  height: "540px",
  display: "flex",
  justifyContent: "space-between",
}));
export const OurVisionImageBox = styled(Box)(() => ({
  width: "40%",
  height: "540px",
  backgroundImage: `url(${ourVisionImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}));
export const OurVisionIntroWrapper = styled(Box)(() => ({
  width: "57%",
  height: "540px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));
export const OurVisionBox = styled(Box)(() => ({
  width: "100%",
  height: "225px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  backgroundColor: "#f7f7f9",
}));
export const OurMissionBox = styled(Box)(() => ({
  width: "100%",
  height: "290px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  backgroundColor: "#f7f7f9",
}));
export const VisionHeading = styled(Typography)(() => ({
  width: "15%",
  fontSize: "20px !important",
  color: "black",
  borderBottom: "3px solid black ",
  fontWeight: "bold !important",
}));
export const VisionContent = styled(Typography)(() => ({
  width: "85%",
  fontSize: "17px !important",
  lineHeight: " 25.5px",
  color: "#777181",
  textAlign: "justify",
}));
export const MissionHeading = styled(Typography)(() => ({
  width: "16%",
  fontSize: "20px !important",
  color: "black",
  borderBottom: "3px solid black ",
  fontWeight: "bold !important",
}));
export const MissionContent = styled(Typography)(() => ({
  width: "85%",
  fontSize: "17px !important",
  lineHeight: " 25.5px",
  color: "#777181",
  textAlign: "justify",
}));
export const MissonImageBg = styled(Box)(() => ({
  width: "22%",
  height: "400px",
  backgroundImage: `url(${ourVisionImageBgBottomLeft})`,
  position: "absolute",
  bottom: "-70px",
  left: "-90px",
  backgroundSize: "cover",
  zIndex: "-1",
  animation: "nfLoaderSpin infinite 7000ms ease-in-out",

  "@keyframes nfLoaderSpin": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
}));

//BRAINSPACK SERVICE PROVIDE

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
  // backgroundImage: `url(${serviceProvide})`,
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

// Launching About Us

export const BrainspackHeading = styled(Typography)(() => ({
  color: "#ffffff !important",
  fontSize: "32px !important",
  fontWeight: "500 !important",
}));
export const BrainspackAboutUs = styled(Typography)(() => ({
  color: "#ffffff !important",
  fontSize: "19px !important",
  fontWeight: "500 !important",
  lineHeight: "30px !important",
}));
