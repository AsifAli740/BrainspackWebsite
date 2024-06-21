import styled from "styled-components";
import { Box, Button, Typography } from "@mui/material";
import brainspackLogo from "../Assets/images/resources/final-header-brainspack-logo.svg";
import { NavLink } from "react-router-dom";

export const MainContainer = styled(Box)(() => ({
  width: "100%",
  height: "auto",
}));

export const Navbar = styled(Box)(() => ({
  width: "100%",
  height: "47px",
  display: "flex",
  borderBottom: "1px solid #ddd",

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

export const MainMenuWrapper = styled(Box)(() => ({
  width: "100%",
  height: "130px",
  display: "flex",
  justifyContent: "center",
}));

export const MainMenu = styled(Box)(() => ({
  width: "89%",
  height: "inherit",
}));

export const MenuListWrapper = styled(Box)(() => ({
  width: "65%",
  height: "inherit",
  display: "flex",
  justifyContent: "space-between",
}));

export const LogoWrapper = styled(Box)(() => ({
  width: "28%",
  height: "inherit",
  display: "flex",
  alignItems: "center",
}));

export const BrainspackLogoWrapper = styled(Box)(() => ({
  width: "100%",
  height: "60px",
  backgroundImage: `url(${brainspackLogo}) `,
  backgroundSize: "100% 60px",
  backgroundRepeat: "no-repeat",
  
}));



export const ListsBox = styled(Box)(() => ({
  width: "57%",
  height: "inherit",
  display: "flex",
  justifyContent: "space-between",
}));

export const MainMenuList = styled(Box)(() => ({
  height: "inherit",
  display: "flex",
  alignItems: "center",
  fontSize: "18px",
}));

export const Navlinks = styled(NavLink)(() => ({
  textDecoration: "none",
  paddingBottom: "5px",
  color: "#777181",
}));

