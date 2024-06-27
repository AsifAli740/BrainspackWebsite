import styled from "styled-components";
import { Box, Button, Typography } from "@mui/material";
import ourVisionImage from "../Assets/images/resources/get-to-know-img-1.jpg"
import ourVisionImageBgBottomLeft from "../Assets/images/shapes/get-to-know-shape-1.png"

// ================== OUR VISION AND MISSION STYLING ============================

export const OurVisionMissionWrapper = styled(Box)(() => ({
    width: "100%",
    height: "830px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-evenly",
    alignItems:"center",
    position:"relative"
    
  }));

export const OurVisionHeading = styled(Typography)(() => ({
    fontSize:"40px !important",
    fontWeight:"500 !important",
    display:"flex",
    alignItems:"center",
    cursor:"pointer"

    
  }));
export const OurVisionImageIntroWrapper = styled(Box)(() => ({
    width:"87%",
    height:"540px",
    display:"flex",
    justifyContent:"space-between"


    
  }));
export const OurVisionImageBox = styled(Box)(() => ({
    width:"40%",
    height:"540px",
    backgroundImage:`url(${ourVisionImage})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover"


    
  }));
export const OurVisionIntroWrapper = styled(Box)(() => ({
    width:"57%",
    height:"540px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between"


    
  }));
export const OurVisionBox = styled(Box)(() => ({
    width:"100%",
    height:"225px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-evenly",
    alignItems:"center",
    backgroundColor:"#f7f7f9"


    
  }));
export const OurMissionBox = styled(Box)(() => ({
    width:"100%",
    height:"290px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-evenly",
    alignItems:"center",
    backgroundColor:"#f7f7f9"



    
  }));
export const VisionHeading = styled(Typography)(() => ({
    width:"15%",
    fontSize: "20px !important",
    color: "black",
    borderBottom: "3px solid black ",
    fontWeight:"bold !important"
  }));
export const VisionContent = styled(Typography)(() => ({
    width:"85%",
    fontSize: "17px !important",
    lineHeight:" 25.5px",
    color:"#777181",    
    textAlign:"justify"

  }));
export const MissionHeading = styled(Typography)(() => ({
    width:"16%",
    fontSize: "20px !important",
    color: "black",
    borderBottom: "3px solid black ",
    fontWeight:"bold !important"
  }));
export const MissionContent = styled(Typography)(() => ({
    width:"85%",
    fontSize: "17px !important",
    lineHeight:" 25.5px",
    color:"#777181",    
    textAlign:"justify"
  }));
export const MissonImageBg = styled(Box)(() => ({
    width:"22%",
    height:"400px",
    backgroundImage:`url(${ourVisionImageBgBottomLeft})`,
    position:"absolute",
    bottom:"-70px",
    left:"-90px",
    backgroundSize:"cover",
    zIndex:"-1",
    animation: 'nfLoaderSpin infinite 7000ms ease-in-out',
    
    "@keyframes nfLoaderSpin": {
      from: {
        transform: "rotate(0deg)"
      },
      to: {
        transform: "rotate(360deg)"
      },
    }
  }));

 