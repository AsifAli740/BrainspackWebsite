import {
  Box,
  Button,
  Card,
  CardMedia,
  Fab,
  Typography,
  styled,
} from "@mui/material";
import helpingLeftImage from "../Assets/images/backgrounds/helping-left-bg.jpg";
import helpingBlackImage from "../Assets/images/shapes/helping-shape-1.png";
import mainSliderOneImg from "../Assets/images/backgrounds/main-slider-1-3.jpg";
import businessImg from "../Assets/images/backgrounds/business-from-bg.jpg";
import footerImg1 from "../Assets/images/shapes/site-footer-shape-1.png";
import footerImg2 from "../Assets/images/shapes/site-footer-shape-2.png";
import brainspackLogo from "../Assets/images/resources/final-footer-brainspack-logo.svg";
import trustedSourceIcon from "../Assets/images/icon/trusted-source-icon.png";

export const ServicesWrapper = styled(Box)(() => ({
  width: "100%",
  height: "586px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
export const ServicesBox = styled(Box)(() => ({
  width: "86%",
  height: "360px",
  display: "flex",
  justifyContent: "space-between",
}));

export const ServicesCard = styled(Box)(() => ({
  width: "31.5%",
  height: "360px",
}));
export const ServicesCardMedia = styled(Box)(() => ({
  width: "100%",
  height: "360px",
  transition: "all 200ms ease",
}));
export const ServicesHeading = styled(Typography)(() => ({
  color: "white",
  fontWeight: "700",
}));
export const OverlayWrapper = styled(Box)(() => ({
  position: "absolute",
  bottom: "0",
  left: "0",
  right: "0",
  backgroundColor: "#212529",
  overflow: "hidden",
  width: "100%",
  height: "0",
  transition: ".5s ease",
  opacity: "0.9", 
}))
export const OverlayTop = styled(Box)(() => ({
  
}))
export const OverlapContentWrapper = styled(Box)(() => ({
  width:"100%",
  height:"inherit",
  padding:"20px"
}))

export const OverlapText = styled(Box)(() => ({
 
}))
export const OverlayTextHeading = styled(Typography)(() => ({
   fontWeight: "700",
    width:"80%",
    fontSize:"24px"
 
}))
export const OverlayTextSubHeading = styled(Typography)(() => ({
  fontSize: "17px",
    color: "#aea8b9",
    lineHeight: "30px"
 
}))
export const SliderWrapper = styled(Box)(() => ({
  width: "100%",
  height: "731px",
  // display: "flex",
  // justifyContent: "center",
  // alignItems: "center",
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
export const ExploreBrainspackLink = styled(Typography)(() => ({
  "&:hover": {
    color: "green !important",
  },
}));
// _________________________________________________________________________________
//LAUNCHING COMPONENT

export const LaunchingContainer = styled(Box)(() => ({
  height: "500px",
  width: "100%",
}));
export const LaunchingWrapper = styled(Box)(() => ({
  height: "500px",
  width: "100%",
  backgroundImage: `url(${businessImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundColor: "rgba(27,21,37,1)",
  backgroundPosition: "center",
  backgroundBlendMode: "luminosity",
}));
export const BusinessTextBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
export const BusinessTextBoxWrapper = styled(Box)(() => ({
  height: "inherit",
  backgroundColor: "rgba(64,58,74,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const BusinessText = styled(Typography)(() => ({
  color: "#2be4ac !important",
  fontSize: "36px",
}));
export const LaunchingHeading = styled(Typography)(() => ({
  color: "white !important",
  fontSize: "105px",
  fontWeight: "700",
  letterSpacing: "8px",
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

// ============================ Helping Styling ======================================================

// __________________________________________________________________________________
// TRUST SOURCES IN IT SERVICES
export const TrustedSourceWrapper = styled(Box)(() => ({
  width: "90%",
  height: "200px",
  position: "absolute",
  zIndex: "2",
  // top: "-100px",
  left: "80px",
  backgroundColor: "#55ad88",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
export const TrustedSourceBox = styled(Box)(() => ({
  width: "80%",
  height: "70%",
  border: "1px solid red",
  // display: "flex",

  // justifyContent: "space-between",
  // alignItems: "center",
}));
export const TrustedSourceTextBox = styled(Box)(() => ({
  width: "30%",
}));
export const TrustedSourceText = styled(Typography)(() => ({
  color: "white",
  fontSize: "30px !important",
  fontWeight: "700 !important",
}));
export const IconBox = styled(Box)(() => ({
  height: "94px",
  width: "94px",
  borderRadius: "50%",
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    backgroundColor: "black",
    transition: " all 500ms ease",
  },
}));
export const IconBoxImage = styled(Box)(() => ({
  height: "38px",
  width: "36px",
  backgroundImage: `url(${trustedSourceIcon})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
}));
export const QueryBox = styled(Box)(() => ({
  height: "80%",
  width: "25%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "5px",
}));
export const AnyQuestionText = styled(Typography)(() => ({
  color: "white",
  fontSize: "16px !important",
}));
export const NumberText = styled(Typography)(() => ({
  color: "white",
  fontSize: "24px !important",
  fontWeight: "700 !important",
}));
export const HelpingContainerWrapper = styled(Box)(() => ({
  width: "100%",
  height: "790px",
  display: "flex",
  position: "relative",
  zIndex: "1",
}));
export const HelpingContainerImageBox = styled(Box)(() => ({
  width: "50%",
  height: "790px",
  backgroundImage: `url(${helpingLeftImage})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
}));
export const HelpingContentWrapper = styled(Box)(() => ({
  width: "50%",
  height: "790px",
  backgroundColor: "#1B1525",
  display: "flex",
  justifyContent: "center",
  alignItems: "end",
  position: "relative",
}));
export const HelpingLineImageWrapper = styled(Box)(() => ({
  position: "absolute",
  right: "0px",
  width: "390px",
  height: "500px",
  // backgroundImage: `url(${helpingBlackImage})`,
  backgroundRepeat: "no-repeat",
  opacity: "0.1",
}));
export const HelpingContent = styled(Box)(() => ({
  width: "60%",
  height: "600px",
}));
export const HelpingContentBox = styled(Box)(() => ({
  width: "100%",
  height: "450px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
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
  lineHeight: "50px !important",
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
export const EmpoweringBussiness = styled(Typography)(() => ({
  color: "#2be4ac",
  fontSize: "18px !important",
  fontWeight: "700 !important",
}));
export const HelpingPointsWrapper = styled(Box)(() => ({
  width: "100%",
  height: "200px",
  display: "flex",
}));
export const DataProtectionWrapper = styled(Box)(() => ({
  width: "50%",
  height: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));
export const DataProtectionTitle = styled(Typography)(() => ({
  width: "67%",
  borderBottom: "3px solid #ffffff1a",

  fontSize: "18px !important",
  fontWeight: "900 !important",
  paddingBottom: "15px",
  color: "white",
}));
export const DataProtectionText = styled(Typography)(() => ({
  fontSize: "16px !important",
  fontWeight: "500 !important",
  color: "#aea8b9",
  lineHeight: "30px !important",
}));
export const OptimizeWrapper = styled(Box)(() => ({
  width: "50%",
  height: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));
export const OptimizeTitle = styled(Typography)(() => ({
  width: "81%",
  borderBottom: "3px solid #ffffff1a",
  fontSize: "18px !important",
  fontWeight: "900 !important",
  paddingBottom: "15px",
  color: "white",
}));
export const OptimizeText = styled(Typography)(() => ({
  fontSize: "16px !important",
  fontWeight: "500 !important",
  color: "#aea8b9",
  lineHeight: "30px !important",
}));

// ________________________________________________________________________________
// FOOTER STYLING

export const FooterWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "600px",
  backgroundColor: "#1b1525",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.between("xs", "sm")]: {
    height: "800px",
  },
}));
export const LeftFooterImageBox = styled(Box)(() => ({
  height: "388px",
  width: "388px",
  // backgroundImage: `url(${footerImg1})`,
  backgroundRepeat: "no-repeat",
  opacity: "0.2",
  backgroundPosition: "top center",
  backgroundBlendMode: "luminosity",
  backgroundSize: "cover",
  position: "absolute",
  top: 0,
  left: 0,
}));
export const RightFooterImageBox = styled(Box)(() => ({
  width: "40%",
  height: "inherit",
  // backgroundImage: `url(${footerImg2})`,
  backgroundRepeat: "no-repeat",
  opacity: "0.2",
  backgroundPosition: "bottom center",
  backgroundSize: "cover",
  backgroundBlendMode: "luminosity",
  position: "absolute",
  bottom: 0,
  right: 0,
}));
export const FooterTextWrapper = styled(Box)(({ theme }) => ({
  width: "90%",
  height: "80%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    height: "85%",
  },
}));
export const ChallengesWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "30%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid #322d3b",
  [theme.breakpoints.between("xs", "sm")]: {
    width: "100%",
    height: "40%",
  },
}));
export const ChallengesBox = styled(Box)(({ theme }) => ({
  width: "95%",
  height: "90%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.between("xs", "sm")]: {
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
}));
export const IconAndBtnBox = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "56%",
  justifyContent: "space-between",
  [theme.breakpoints.between("xs", "sm")]: {
    flexDirection: "column",
    width: "90%",
    display: "flex",
    alignItems: "space-between",
    gap: "20px",
  },
}));
export const AcUnitIconBox = styled(Box)(({ theme }) => ({
  fontSize: "65px !important ",
  color: "#2be4ac !important",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    justifyContent: "center",
  },
}));

export const FooterContent = styled(Typography)(() => ({
  color: "white ",
  fontSize: "25px !important",
  fontWeight: "600 !important",
}));

export const FooterContentWrapper = styled(Box)(() => ({
  width: "100%",
  height: "60%",
}));
export const FooterContentBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  width: "85%",
  height: "100%",
}));

export const FooterLinks = styled(Typography)(() => ({
  color: "white ",
  fontSize: "20px !important",
  fontWeight: "700 !important",
}));
export const FooterAddress = styled(Typography)(() => ({
  color: "#aea8b9 ",
  fontSize: "16px !important",
  fontWeight: "500 !important",
  cursor: "pointer",
  transition: "all 500ms ease",
  "&:hover": {
    color: "white",
  },
}));
export const FooterCompanyFullAddress = styled(Typography)(() => ({
  color: "#aea8b9 ",
  fontSize: "16px !important",
  fontWeight: "500 !important",
  cursor: "pointer",
}));

export const FooterLogo = styled(Box)(() => ({
  backgroundImage: `url(${brainspackLogo})`,
  backgroundRepeat: "no-repeat",
  width: "18%",
  height: "65px",
  backgroundSize: "100% 65px",
}));
export const LinksAndContentBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  width: "35%",
  height: "100%",
}));
export const FooterLinksBox = styled(Box)(() => ({
  width: "30% ",
  height: "60%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));
export const FooterContactBox = styled(Box)(() => ({
  width: "52% ",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));
export const SocialMediaBox = styled(Box)(() => ({
  display: "flex",
  gap: "10px",
  justifyContent: "flex-end",
  width: "10%",
}));

export const LinksTextBox = styled(Box)(() => ({
  width: "100%",
  height: "15%",
}));
export const LinksTextBoxDetails = styled(Box)(() => ({
  width: "100%",
  height: "60%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

export const ContactBox = styled(Box)(() => ({
  width: "100%",
  height: "25%",
}));
export const ContactBoxDetails = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
  height: "75%",
}));
export const ContactBoxDetailsEach = styled(Box)(() => ({
  display: "flex",
  gap: "10px",
}));

export const SocialMediaFab = styled(Fab)(() => ({
  backgroundColor: "black !important",
  color: "#aea8b9 !important",
  height: "50px !important",
  width: "50px !important",
}));

// ==================== AboutUsBusinessComp STYLING ==============================

export const BrainspackHeading = styled(Typography)(() => ({
  fontWeight: 500,
  fontSize: "35px",
  color: "white",
  marginBottom: "20px",
}));

export const BusinessSubHeading = styled(Typography)(() => ({
  fontWeight: 400,
  fontSize: "20px",
  color: "white",
  textAlign: "center",
  lineHeight: "32px",
}));
