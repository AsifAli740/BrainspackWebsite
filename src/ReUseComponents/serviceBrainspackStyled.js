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
    // backgroundImage:`url(${serviceImg})`
  }));
export const BrainspackService = styled(Box)(() => ({
    width: "87%",
    height: "480px",
    // backgroundColor:"red",
  }));
export const BrainspackServiceIntroWrapper = styled(Box)(() => ({
    width: "100%",
    height: "200px",
    // backgroundColor:"purple",
    display:"flex",
    justifyContent:"space-between"
  }));
export const ServiceOfferingBox = styled(Box)(() => ({
    width: "40%",
    height: "200px",
    // backgroundColor:"green",
    color:"white"
    
  }));
export const ServiceOfferingIntroBox = styled(Box)(() => ({
    width: "40%",
    height: "200px",
    // backgroundColor:"yellow",
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
    fontSize:"17px !important",

    

  }));
export const ServiceCardWrapper = styled(Box)(() => ({
    width:"100%",
    height:"280px",
    // backgroundColor:"aqua",
    display:"flex",
    justifyContent:"space-evenly"

    

  }));
export const ServiceCard = styled(Card)(() => ({
    width:"18%",
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
    width:"98%",
    padding:"0px 5px !important",
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
padding:"0px 33px !important"

  }));
export const CardSubHeading = styled(Typography)(() => ({
fontSize:"15px !important",
color:"#aea8b9"

  }));