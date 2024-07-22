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
  height: "43px",
  display: "flex",
  borderBottom: "1px solid #ddd",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
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
  width: "36%",
  height: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const AddressBox = styled(Typography)(() => ({
  width: "51%",
  color: "#777181",
  fontSize: "12px !important",
  display: "flex",
  justifyContent: "space-between",
}));

export const EmailBox = styled(Typography)(() => ({
  width: "39%",
  color: "#777181",
  fontSize: "12px !important",
  display: "flex",
  justifyContent: "space-between",
}));

export const AboutContactLinkWrapper = styled(Box)(() => ({
  width: "10%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const AboutLink = styled(Typography)(() => ({
  color: "#777181",
  fontSize: "12px !important",
  "&:hover": {
    color: "#55ad88",
    cursor: "pointer",
    transition: "all 500ms ease",
  },
}));

export const ContactLink = styled(Typography)(() => ({
  color: "#777181",
  fontSize: "12px !important",
  "&:hover": {
    color: "#55ad88",
    cursor: "pointer",
    transition: "all 500ms ease",
  },
}));

export const Slash = styled(Typography)(() => ({
  color: "#777181",
  fontSize: "12px !important",
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
  height: "116px",
  display: "flex",
  justifyContent: "center",
}));

export const MainMenu = styled(Box)(({ theme }) => ({
  width: "88%",
  height: "inherit",
}));

export const MenuListWrapper = styled(Box)(({ theme }) => ({
  width: "66%",
  height: "inherit",
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
  },
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
  width: "205px",
  height: "60px",
  backgroundImage: `url(${brainspackLogo}) `,
  backgroundSize: "100% 60px",
  backgroundRepeat: "no-repeat",
}));
export const MenuWrapper = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
  [theme.breakpoints.between("sm", "md")]: {
    display: "block",
  },
  [theme.breakpoints.between("md", "lg")]: {
    display: "block",
  },
}));
export const MenuContainer = styled(Box)(({ theme }) => ({
  // display: "none",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    alignItems: "center",
    height: "100%",
  },
  [theme.breakpoints.between("sm", "md")]: {
    display: "flex",
    alignItems: "center",
    height: "100%",
  },
  [theme.breakpoints.between("md", "lg")]: {
    display: "flex",
    alignItems: "center",
    height: "100%",
  },
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
  fontSize: "16px",

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
  fontSize: "16px",
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
  width: "188px",
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
export const CustomBtnWebDevelopment = styled(Button)(({ theme }) => ({
  height: "70px",
  width: "401px",
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
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
  },
}));
