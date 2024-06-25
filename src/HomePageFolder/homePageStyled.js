import { Box, Button, Card, CardMedia, Fab, Typography } from "@mui/material";
import styled from "styled-components";
import helpingLeftImage from "../Assets/images/backgrounds/helping-left-bg.jpg"
import helpingBlackImage from "../Assets/images/shapes/helping-shape-1.png"
import mainSliderOneImg from "../Assets/images/backgrounds/main-slider-1-3.jpg";
import businessImg from "../Assets/images/backgrounds/business-from-bg.jpg";

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

export const SliderWrapper = styled(Box)(() => ({
  width: "100%",
  height: "731px",
  backgroundColor: "red",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `url(${mainSliderOneImg})`,
}));
export const MainSliderBox = styled(Box)(() => ({
  width: "70%",
  height: "272px",
  padding: "10px",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
}));
export const BrainspackSliderHeading = styled(Typography)(() => ({
  color: "white",
  fontSize: "150px !important",
  fontWeight: "700 !important",
  lineHeight: "1 !important",
}));
export const BrainspackSliderPPPHeading = styled(Typography)(() => ({
  color: "#55ad88",
  fontSize: "150px !important",
  fontWeight: "700 !important",
  lineHeight: "1 !important",
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
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#55AD88",
}));
export const GetSolution = styled(Typography)(() => ({
  color: "#dcd7ff",
  fontSize: "19px !important",
  fontWeight: "400 !important",
}));
export const ExploreBrainspackLink = styled(Typography)(() => ({}));
export const LaunchingContainer = styled(Box)(() => ({
  height: "500px",
  width: "100%",
  backgroundColor: "#1b1525",
}));
export const LaunchingWrapper = styled(Box)(() => ({
  height: "500px",
  width: "100%",
  backgroundImage: `url(${businessImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  opacity: 0.5,
  mixBlendMode: "luminosity",
}));
export const BusinessTextBox = styled(Typography)(() => ({}));

export const BusinessText = styled(Typography)(() => ({
  color: "red !important",
}));

//   ================================= TECH SERVICES ================================================
export const TechServicesContainer = styled(Box)(() => ({
  height: "600px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
export const TechServicesWrapper = styled(Box)(() => ({
  height: "85%",
  width: "90%",
  display: "flex",
  justifyContent: "space-between",
}));
export const TechServicesImageBox = styled(Box)(() => ({
  height: "100%",
  width: "50%",
}));

export const AbsoluteBox = styled(Box)(() => ({
  width: "42%",
  height: "63%",
  backgroundColor: "#55ad88",
  position: "absolute",
  top: "75px",
  right: "0px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
export const TechServicesTextBox = styled(Box)(() => ({
  width: "70%",
  height: "70%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));
export const TechServicesText = styled(Typography)(() => ({
  fontSize: "22px !important",
  color: "#ffffff",
  lineHeight: "36px !important",
}));
export const LearnMoreBtn = styled(Button)(() => ({
  color: "white !important",
  textTransform: "none !important",
  fontSize: "16px !important",
  fontWeight: "600 !important",
}));

export const TechServicesTextWrapper = styled(Typography)(() => ({
  height: "100%",
  width: "43%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));
export const CustomFab = styled(Fab)(() => ({
  backgroundColor: "#2be4ac !important",
  color: "white !important",
  boxShadow: "none !important",
}));
export const FabText = styled(Typography)(() => ({
  color: "#1B1524 !important",
  fontSize: "20px !important",
  fontWeight: "700 !important",
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
 
}));
export const HelpingContentBox = styled(Box)(() => ({
  width:"100%",
  height:"450px",
  display:"flex",
  flexDirection:"column",
justifyContent:"space-between"
 
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
export const EmpoweringBussiness = styled(Typography)(() => ({
  color: "#2be4ac",
  fontSize: "18px !important",
  fontWeight: "700 !important",
 
}));
export const HelpingPointsWrapper = styled(Box)(() => ({
  width:"100%",
  height:"200px",
  display:"flex"
 
}));
export const DataProtectionWrapper = styled(Box)(() => ({
  width:"50%",
  height:"200px",
  display:"flex",
  flexDirection:"column",
  justifyContent:"space-between"
 
}));
export const DataProtectionTitle = styled(Typography)(() => ({
  width:"67%",
  borderBottom:"3px solid #ffffff1a",

  fontSize: "18px !important",
  fontWeight: "900 !important",
  paddingBottom:"15px",
  color:"white"
 
}));
export const DataProtectionText = styled(Typography)(() => ({
  fontSize: "16px !important",
  fontWeight: "500 !important",
  color:"#aea8b9",
  lineHeight:"30px !important"
 
}));
export const OptimizeWrapper = styled(Box)(() => ({
  width:"50%",
  height:"200px",
  display:"flex",
  flexDirection:"column",
  justifyContent:"space-between"
 
}));
export const OptimizeTitle = styled(Typography)(() => ({
  width:"81%",
  borderBottom:"3px solid #ffffff1a",
  fontSize: "18px !important",
  fontWeight: "900 !important",
  paddingBottom:"15px",
  color:"white"
 
}));
export const OptimizeText = styled(Typography)(() => ({
  fontSize: "16px !important",
  fontWeight: "500 !important",
  color:"#aea8b9",
  lineHeight:"30px !important"
 
}));


// ________________________________________________________________________________
// FOOTER STYLING

export const FooterWrapper = styled(Box)(() => ({
  width: "100%",
  height: "600px",
  border: "1px solid red",
}));
export const LeftFooterImageBox = styled(Box)(() => ({
  width: "30%",
  height: "70%",
  border: "1px solid red",
}));
export const RightFooterImageBox = styled(Box)(() => ({
  width: "70%",
  height: "70%",
  border: "1px solid red",
}));
