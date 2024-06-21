import styled from "styled-components";
import { Box, Card, CardMedia, Typography } from "@mui/material";

export const ServicesWrapper = styled(Box)(() => ({
  width: "100%",
  height: "586px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
export const ServicesBox = styled(Box)(() => ({
  width: "90%",
  height: "60%",
  display: "flex",
  justifyContent: "space-between",
}));

export const ServicesCard = styled(Card)(() => ({
  width: "31.5%",
  height: "100%",
}));
export const ServicesCardMedia = styled(CardMedia)(() => ({
  width: "100%",
  height: "100%",
}));
export const ServicesHeading = styled(Typography)(() => ({
  color: "black",
}));
