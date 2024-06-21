import styled from "styled-components";
import { Box, Typography } from "@mui/material";
export const GetKnowUsContainer = styled(Box)(() => ({
  width: "100%",
  height: "700px",
  display: "flex",
  justifyContent: "center",
}));
export const GetKnowUsWrapper = styled(Box)(() => ({
  width: "90%",
  height: "100%",
  display: "flex",
  justifyContent: "space-between",
  //   gap: "5px",
}));
export const GetKnowUsImageBox = styled(Box)(() => ({
  width: "58%",
  height: "100%",
}));
export const GetKnowUsContentBox = styled(Box)(() => ({
  width: "39%",
  height: "100%",
}));
export const GetKnowUsTitle = styled(Typography)(() => ({
  color: "#55ad88",
  fontSize: "16px !important",
  fontWeight: "700 !important",
}));
export const GetKnowUsTitle2 = styled(Typography)(() => ({
  fontSize: "40px !important",
  fontWeight: "600 !important",
  lineHeight: "50px !important",
}));

export const Offerings = styled(Typography)(() => ({
  color: "#777181",
  fontSize: "18px !important",
  fontWeight: "400 !important",
}));
export const Features = styled(Typography)(() => ({
  color: "#1B1525",
  fontSize: "18px !important",
  fontWeight: "400 !important",
  lineHeight: "32px",
}));
