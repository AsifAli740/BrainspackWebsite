import styled from "styled-components";
import { Box, Typography } from "@mui/material";
export const DevelopmentProcessContainer = styled(Box)(() => ({
  width: "100%",
  height: "700px",

  display: "flex",
  justifyContent: "center",
}));
export const DevelopmentProcessWrapper = styled(Box)(() => ({
  width: "90%",
  height: "700px",
}));
export const DevelopmentTextBox = styled(Typography)(() => ({
  height: "100px",
  width: "100%",
  display: "flex",
  alignItems: "center",
}));

export const DevelopmentIconsBox = styled(Box)(() => ({
  width: "30%",
  height: "90%",
  //   backgroundColor: "red",
}));
export const DevelopmentImagesBox = styled(Box)(() => ({
  width: "70%",
  height: "90%",
  backgroundColor: "black",
}));
export const DevelopmentText = styled(Typography)(() => ({
  fontSize: "30px !important",
  fontWeight: "600 !important",
}));
