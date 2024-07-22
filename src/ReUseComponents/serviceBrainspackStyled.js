import { Box, Card, CardContent, Typography, styled } from "@mui/material";
import serviceImg from "../Assets/images/shapes/service-bg-1-1.png";

export const BrainspackServiceContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "684px",
  backgroundColor: "#1b1525",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    height: "1500px",
  },
  [theme.breakpoints.between("sm", "md")]: {
    height: "900px",
  },
  // [theme.breakpoints.between("md", "lg")]: {
  //   border: "1px solid red",
  // },
}));
export const BrainspackService = styled(Box)(({ theme }) => ({
  width: "87%",
  height: "480px",
  [theme.breakpoints.down("sm")]: {
    height: "85%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  [theme.breakpoints.between("sm", "md")]: {
    height: "85%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));
export const BrainspackServiceIntroWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "200px",
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    height: "20%",
  },
  [theme.breakpoints.between("sm", "md")]: {
    flexDirection: "column",
    height: "25%",
  },
}));
export const ServiceOfferingBox = styled(Box)(({ theme }) => ({
  width: "40%",
  height: "200px",
  color: "white",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "40%",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "40%",
  },
}));
export const ServiceOfferingIntroBox = styled(Box)(({ theme }) => ({
  width: "41%",
  height: "200px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "55%",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    height: "55%",
  },
}));
export const OfferingHeading = styled(Typography)(({ theme }) => ({
  color: "#55AD88",
  fontSize: "16px !important",
  fontWeight: "700 !important",
  [theme.breakpoints.down("sm")]: {},
}));
export const BrainspackNutshell = styled(Typography)(({ theme }) => ({
  fontSize: "40px !important",
  fontWeight: "600 !important",
  [theme.breakpoints.down("sm")]: {
    fontSize: "31px !important",
  },
}));
export const ServiceOfferingIntroduction = styled(Typography)(({ theme }) => ({
  color: "#aea8b9",
  paddingTop: "20px",
  lineHeight: "30px !important",
  fontSize: "16px !important",
  [theme.breakpoints.down("sm")]: {
    fontSize: "15px !important",
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: "15px !important",
  },
}));
export const ServiceCardWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "280px",
  display: "flex",
  justifyContent: "space-evenly",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    height: "77%",
  },
  [theme.breakpoints.between("sm", "md")]: {
    height: "70%",
    display: "flex",
    flexWrap: "wrap !important",
  },
}));
export const ServiceCard = styled(Card)(({ theme }) => ({
  width: "19%",
  height: "280px",
  backgroundColor: "transparent !important",
  borderRadius: "0px !important",
  display: "flex",
  justifyContent: "center",
  color: "white !important",
  backgroundColor: "#1b1525 !important",
  border: "1px solid #322d3b",
  "&:hover": {
    backgroundColor: "white !important",
    transform: "translateY(-10px)",
    transition: "all 500ms ease",
    color: "black !important",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "23%",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "30%",
    height: "45%",
  },
}));
export const ServiceCardContentWrapper = styled(CardContent)(({ theme }) => ({
  width: "97%",
  padding: "0px 6px !important",
  display: "flex ",
  flexDirection: "column ",
  justifyContent: "space-evenly ",
  textAlign: "center",
  height: "inherit",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    height: "95%",
    width: "90%",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "95%",
    height: "90%",
  },
}));
export const CardHeading = styled(Typography)(({ theme }) => ({
  fontSize: "19px !important",
  fontWeight: "700 !important",
  padding: "0px 33px !important",
  color: "white",

  cursor: "pointer",
  "&:hover": {
    color: "black",
  },
  [theme.breakpoints.down("sm")]: {
    width: "68%",
  },
}));
export const CardSubHeading = styled(Typography)(() => ({
  fontSize: "14px !important",
  color: "#aea8b9",
}));
