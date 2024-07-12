import styled from "styled-components";
import { Box, Typography } from "@mui/material";
export const DevelopmentProcessContainer = styled(Box)(() => ({
  width: "100%",
  height: "700px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
export const DevelopmentProcessWrapper = styled(Box)(() => ({
  width: "90%",
  height: "90%%",
  display: "flex",
  flexDirection: "column",
}));
export const DevelopmentTextBox = styled(Typography)(() => ({
  height: "100px",
  width: "100%",
  display: "flex",
  alignItems: "center",
}));

export const DevelopmentIconsBox = styled(Box)(() => ({
  width: "30%",
  height: "80%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const DevelopmentText = styled(Typography)(() => ({
  fontSize: "30px !important",
  fontWeight: "600 !important",
}));

export const DevelopmentImagesBox = styled(Box)(() => ({
  width: "60%",
  height: "90%",
}));

export const DevelopmentStepsText = styled(Typography)(() => ({
  fontSize: "24px !important",
  fontWeight: "600 !important",
  color: "#1B1525 !important",
}));
export const DevelopmentDetailsText = styled(Typography)(() => ({
  fontSize: "17px !important",
  fontWeight: "500 !important",
  color: "#777181 !important",
}));
