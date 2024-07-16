import styled from "styled-components";
import { Box, Button, Fab, Typography } from "@mui/material";
import counterBgImage from "../Assets/images/backgrounds/funfact-bg-1-1.png";
import { NavLink } from "react-router-dom";

export const CounterContainerWrapper = styled(Box)(() => ({
  width: "100%",
  height: "460px",
  backgroundColor: "rgba(247,247,249,1)",
  backgroundImage: `url(${counterBgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top",
  backgroundBlendMode: "luminosity",
}));
export const CounterContainer = styled(Box)(() => ({
  width: "100%",
  height: "460px",
  backgroundColor: "rgba(239,239,241,0.9)",
}));
export const CounterItemWrapper = styled(Box)(() => ({
  width: "100%",
  height: "260px",
  display: "flex",
  alignItems: "end",
}));
export const CounterItemBox = styled(Box)(() => ({
  width: "100%",
  height: "200px",
  display: "flex",
  justifyContent: "center",
}));
export const CounterItem = styled(Box)(() => ({
  width: "20%",
  height: "190px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));
export const DataCounter = styled(Typography)(() => ({
  color: "#2be4ac",
  fontWeight: "400",
  fontSize: "40px",
}));
export const DataCounterPlus = styled(Typography)(() => ({
  fontSize: "40px",
  fontWeight: "400",
  color: "#2be4ac",
  // paddingLeft:"5px"
}));
export const TitleOfCounter = styled(Typography)(() => ({
  fontWeight: "700 !important",
  fontSize: "18px !important",
  color: "#1b1525 !important",
}));
export const CounterIcon = styled(Typography)(() => ({
  color: "#55ad88 ",
}));
export const FabIcon = styled(Fab)(() => ({
  backgroundColor: "white !important",
  width: "75px !important",
  height: "75px !important",
  position:"relative",
  boxShadow: "0px 0px 40px 0px rgba(0, 0, 0, 0.05) !important",
}));
