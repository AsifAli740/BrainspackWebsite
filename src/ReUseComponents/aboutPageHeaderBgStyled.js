import styled from "styled-components";
import { Box, Button, Typography } from "@mui/material";
import AboutPageBgImage from "../Assets/images/backgrounds/page-header-bg.jpg"

export const PageHeaderBg = styled(Box)(() => ({
  width: "100%",
  height: "350px",
  backgroundColor:"#1b1525",
  backgroundImage:`url(${AboutPageBgImage})`,
  backgroundRepeat:"no-repeat",
  backgroundSize:"cover",
  backgroundPosition:"center",
  backgroundBlendMode:"luminosity",
  zIndex:"-1",
   display:"flex",
   justifyContent:"center",
  alignItems:"center"
}));
export const PageHeaderInnerBox = styled(Box)(() => ({
  width: "80%",
  height: "85px",
  display:"flex",
  justifyContent:"space-between",
  flexDirection:"column",
  alignItems:"center"
  
}));

export const AboutLinkWrapper = styled(Box)(() => ({
    width:"12%",
 display:"flex",
 justifyContent:"space-between",
  
}));
export const AboutHeadingWrapper = styled(Box)(() => ({
    
  
}));
export const AboutHeading = styled(Typography)(() => ({
    
    fontSize:"40px !important",
    fontWeight:"700 !important",
    color:"white"
}));
