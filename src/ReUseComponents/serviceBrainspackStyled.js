import { Box, Card, CardContent, Typography } from "@mui/material";
import styled from "styled-components";
import serviceImg from "../Assets/images/shapes/service-bg-1-1.png"

export const BrainspackServiceContainer = styled(Box)(() => ({
    width: "100%",
    height: "684px",
    backgroundColor:"#1b1525",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  }));
export const BrainspackService = styled(Box)(() => ({
    width: "87%",
    height: "480px",
  }));
export const BrainspackServiceIntroWrapper = styled(Box)(() => ({
    width: "100%",
    height: "200px",
    display:"flex",
    justifyContent:"space-between"
  }));
export const ServiceOfferingBox = styled(Box)(() => ({
    width: "40%",
    height: "200px",
    color:"white"
    
  }));
export const ServiceOfferingIntroBox = styled(Box)(() => ({
    width: "41%",
    height: "200px",
  }));
export const OfferingHeading = styled(Typography)(() => ({
    color:"#55AD88",
    fontSize:"16px !important",
    fontWeight:"700 !important"
  }));
export const BrainspackNutshell = styled(Typography)(() => ({
    fontSize:"40px !important",
    fontWeight:"600 !important"

  }));
export const ServiceOfferingIntroduction = styled(Typography)(() => ({
    color:"#aea8b9",
    paddingTop:"20px",
    lineHeight:"30px !important",
    fontSize:"16px !important",

    

  }));
export const ServiceCardWrapper = styled(Box)(() => ({
    width:"100%",
    height:"280px",
    display:"flex",
    justifyContent:"space-evenly"

    

  }));
export const ServiceCard = styled(Card)(() => ({
    width:"19%",
    height:"280px",
    backgroundColor:"transparent !important",
    borderRadius:"0px !important",
    display:"flex",
    justifyContent:"center",
    color:"white !important",
    backgroundColor:"#1b1525 !important",
    border:"1px solid #322d3b",
    "&:hover":{
        backgroundColor:"white !important",
        transform:"translateY(-10px)",
    transition: "all 500ms ease",
color:"black !important",
    },
      

    

  }));
export const ServiceCardContentWrapper = styled(CardContent)(() => ({
    width:"97%",
    padding:"0px 6px !important",
    display:"flex ",
    flexDirection:"column ",
    justifyContent:"space-evenly ",
    textAlign:"center",
    height:"inherit",
    alignItems:"center",
    
    
    

    

  }));
export const CardHeading = styled(Typography)(() => ({
fontSize:"19px !important",
fontWeight:"700 !important",
padding:"0px 33px !important",
color:"white",

cursor:"pointer",
"&:hover":{
  color:"black"
}

  }));
export const CardSubHeading = styled(Typography)(() => ({
fontSize:"14px !important",
color:"#aea8b9"

  }));