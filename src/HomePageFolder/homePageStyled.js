import styled from "styled-components";
import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import mainSliderOneImg from "../Assets/images/backgrounds/main-slider-1-3.jpg"
import helpingLeftImage from "../Assets/images/backgrounds/helping-left-bg.jpg"
import helpingBlackImage from "../Assets/images/shapes/helping-shape-1.png"

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


// ======================================= SLIDER STYLING =========================================================

export const SliderWrapper = styled(Box)(() => ({
  // overflow: "hidden",
  // position: "relative"
  width:"100%",
  height:"731px",
  backgroundColor:"red",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  backgroundImage:`url(${mainSliderOneImg})`,
  
}));
export const MainSliderBox = styled(Box)(() => ({
  // overflow: "hidden",
  // position: "relative"
  width:"70%",
  height:"272px",
  padding:"10px",
  // backgroundColor:"red",
  // textAlign:"center",
  display:"flex",
  flexDirection:"column",
  justifyContent:"space-between",
  alignItems:"center"
  
}));
export const BrainspackSliderHeading = styled(Typography)(() => ({
  // overflow: "hidden",
  // position: "relative"
  // width:"70%",
  // height:"250px",
  // backgroundColor:"red"
  color:"white",
  fontSize: "150px !important",
    fontWeight: "700 !important",
    // textAlign:"center",
    lineHeight:"1 !important",
    
  
}));
export const BrainspackSliderPPPHeading = styled(Typography)(() => ({
  // overflow: "hidden",
  // position: "relative"
  // width:"70%",
  // height:"250px",
  // backgroundColor:"red"
  color:"#55ad88",
  fontSize: "150px !important",
    fontWeight: "700 !important",
    // textAlign:"center",
    lineHeight:"1 !important"
  
}));

export const CustomBtn = styled(Button)(() => ({
  height: "60px",
  width: "220px",
  backgroundColor: "#55AD88 !important",
  color: "white !important",
  borderRadius: "0px !important",
  fontSize: "18px !important",
  fontWeight: "700 !important",
  textTransform: "none !important",
  
  
}));
export const GetSolutionContainer = styled(Box)(() => ({
  width: "100%",
  height: "120px",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  backgroundColor: "#55AD88",

 

  
  
}));
export const GetSolution = styled(Typography)(() => ({
 
  color:"#dcd7ff",
  fontSize:"19px !important",
  fontWeight:"400 !important"

  
  
}));
export const ExploreBrainspackLink = styled(Typography)(() => ({


  
  
}));


// ============================ Helping Styling ======================================================

export const HelpingContainerWrapper = styled(Box)(() => ({
  width:"100%",
  height:"790px",
  backgroundColor:"red",
  display:"flex"

  
  
}));
export const HelpingContainerImageBox = styled(Box)(() => ({
  width:"50%",
  height:"790px",
  backgroundColor:"yellow",
  backgroundImage:`url(${helpingLeftImage})`,
  backgroundRepeat:"no-repeat",
  backgroundPosition:"center",
  backgroundSize:"cover"

  
  
}));
export const HelpingContentWrapper = styled(Box)(() => ({
  width:"50%",
  height:"790px",
  backgroundColor:"#1B1525",
  display:"flex",
  justifyContent:"center",
  alignItems:"end",
  position:"relative"
 
  
}));
export const HelpingLineImageWrapper = styled(Box)(() => ({
  position:"absolute",
  right:"0px",
  width:"390px",
  height:"500px",
  backgroundColor:"#yellow",
  backgroundImage:`url(${helpingBlackImage})`,
  backgroundRepeat:"no-repeat",
  opacity:"0.1" 
  
}));
export const HelpingContent = styled(Box)(() => ({
  width:"60%",
  height:"600px",
  // backgroundColor:"yellow",
  border:"1px solid green"
 
}));
export const TechnologySolutionHeading = styled(Typography)(() => ({
  color: "#55ad88",
  fontSize: "16px !important",
  fontWeight: "700 !important",
 
}));
export const HelpingHeading = styled(Typography)(() => ({
  color: "white",
  fontSize: "40px !important",
  fontWeight: "600 !important",
  lineHeight:"50px !important"
 
}));



