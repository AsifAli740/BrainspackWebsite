// import styled from "styled-components";
import { Box, Button, Typography, styled } from "@mui/material";
import brainspackLogo from "../Assets/images/resources/final-header-brainspack-logo.svg";
import { NavLink } from "react-router-dom";

export const MainContainer = styled(Box)(() => ({
  width: "100%",
  height: "auto",
}));

export const Navbar = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "47px",
  display: "flex",
  borderBottom: "1px solid #ddd",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  // [theme.breakpoints.down("lg")]: {
  //   display: "none",
  // },
}));

export const NavbarTopLeftWrapper = styled(Box)(() => ({
  width: "86%",
  height: "inherit",
  display: "flex",
  justifyContent: "center",
}));

export const NavbarTopLeft = styled(Box)(() => ({
  width: "90%",
  height: "inherit",
  marginLeft: "40px",
  display: "flex",
  justifyContent: "space-between",
}));

export const AddressEmailWrapper = styled(Box)(() => ({
  width: "35%",
  height: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const AddressBox = styled(Typography)(() => ({
  width: "51%",
  color: "#777181",
  fontSize: "13px !important",
  display: "flex",
  justifyContent: "space-between",
}));

export const EmailBox = styled(Typography)(() => ({
  width: "38%",
  color: "#777181",
  fontSize: "13px !important",
  display: "flex",
  justifyContent: "space-between",
  cursor: "pointer",
  "&:hover": {
    color: "#55ad88 !important",
    cursor: "pointer",
  },
}));

export const AboutContactLinkWrapper = styled(Box)(() => ({
  width: "10%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const AboutLink = styled(Typography)(() => ({
  color: "#777181",
  fontSize: "13px !important",
  "&:hover": {
    color: "#55ad88",
    cursor: "pointer",
  },
}));

export const ContactLink = styled(Typography)(() => ({
  color: "#777181",
  fontSize: "13px !important",
  "&:hover": {
    color: "#55ad88",
    cursor: "pointer",
  },
}));

export const Slash = styled(Typography)(() => ({
  color: "#777181",
  fontSize: "13px !important",
}));

export const NavbarTopRightwrapper = styled(Box)(() => ({
  width: "14%",
  height: "inherit",
  backgroundColor: "#ddd",
}));

export const LinkedInInstaWrapper = styled(Box)(() => ({
  width: "27%",
  height: "inherit",
  marginLeft: "35px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const MainMenuWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "130px",
  display: "flex",
  justifyContent: "center",
}));

export const MainMenu = styled(Box)(({ theme }) => ({
  width: "89%",
  height: "inherit",
}));

export const MenuListWrapper = styled(Box)(({ theme }) => ({
  width: "65%",
  height: "inherit",
  display: "flex",
  justifyContent: "space-between",
}));

export const LogoWrapper = styled(Box)(({ theme }) => ({
  width: "28%",
  height: "inherit",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    width: "55%",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "45%",
  },
}));

export const BrainspackLogoWrapper = styled(Box)(() => ({
  width: "220px",
  height: "65px",
  backgroundImage: `url(${brainspackLogo}) `,
  backgroundSize: "100% 65px",
  backgroundRepeat: "no-repeat",
}));

export const ListsBox = styled(Box)(({ theme }) => ({
  width: "57%",
  height: "inherit",
  display: "flex",
  justifyContent: "space-between",
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  [theme.breakpoints.between("sm", "md")]: {
    display: "none",
  },
  [theme.breakpoints.between("md", "lg")]: {
    display: "none",
  },
}));

export const MainMenuList = styled(Box)(() => ({
  width: "100%",
  height: "inherit",
  display: "flex",
  alignItems: "center",
  fontSize: "18px",

  // "&:hover":{
  //   color:"#1B1525",
  //   borderBottom: "3px solid green",
  // paddingTop: "3px",
  // }
}));
export const ServiceOptions = styled(Box)(() => ({
  width: "100%",
  height: "55px",
  display: "flex",
  position: "relative",
  // justifyContent:"center",
  alignItems: "center",
  textAlign: "justify",
  padding: "22px",
  fontSize: "18px",
  fontWeight: "400",
  lineHeight: "30px",
  color: "black",
  transition: "200ms ease",
  "&:hover": {
    backgroundColor: "#55ad88",
    color: "white",
  },
}));

export const Navlinks = styled(NavLink)(() => ({
  textDecoration: "none",
  paddingBottom: "5px",
  color: "#777181",
  "&:hover": {
    color: "#1B1525",
    borderBottom: "3px solid green",
    paddingTop: "3px",
  },
  // "&:hover":{
  //   color:"#1B1525",
  //   borderBottom: "3px solid green",
  // paddingTop: "3px",
  // }
}));

export const CustomBtn = styled(Button)(() => ({
  height: "60px",
  width: "220px",
  backgroundColor: "#55ad88 !important",
  color: "white",
  borderRadius: "0px !important",
  fontSize: "18px !important",
  fontWeight: "700 !important",
  textTransform: "none !important",
  "&:hover": {
    backgroundColor: "black !important",
    transition: "all 0.5s linear !important",
  },
}));
export const CustomBtnWebDevelopment = styled(Button)(() => ({
  height: "70px",
  width: "444px",
  backgroundColor: "#55ad88 !important",
  color: "white",
  borderRadius: "0px !important",
  fontSize: "18px !important",
  fontWeight: "700 !important",
  textTransform: "none !important",
  "&:hover": {
    backgroundColor: "black !important",
    transition: "all 0.5s linear !important",
  },
}));
