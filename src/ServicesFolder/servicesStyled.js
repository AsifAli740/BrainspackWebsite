import { Box, Typography, styled } from "@mui/material";
export const WebFrontContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "1650px",
  display: "flex",
  justifyContent: "center",
  marginTop: "30px",
  [theme.breakpoints.between("sm", "md")]: {
    height: "auto",
  },
  [theme.breakpoints.between("md", "lg")]: {
    height: "auto",
  },
}));
export const ServiceDetailContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.between("sm", "md")]: {},
}));

export const WebFrontWrapper = styled(Box)(({ theme }) => ({
  width: "86.5%",
  height: "inherit",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));
export const FrontEndWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  [theme.breakpoints.between("sm", "md")]: {
    gap: "50px",
  },
}));
export const BackEndWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "420px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  [theme.breakpoints.between("sm", "md")]: {
    height: "auto",
  },
}));
export const ServiceWebHeadingWrapper = styled(Box)(({}) => ({
  width: "100%",
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "end",
}));
export const ServiceWebHeading = styled(Typography)(({}) => ({
  fontWeight: "500 !important",
  fontSize: "30px !important",
}));
export const ServiceFrontEndDetailWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "25px",
  [theme.breakpoints.between("sm", "md")]: {
    // border: "1px solid red",
    flexDirection: "column",
    gap: "40px",
  },
}));
export const ServiceFrontEndImgWrapper = styled(Box)(({ theme }) => ({
  width: "30%",
  height: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
  },
}));
export const WebImageWrapper = styled(Box)(({ theme }) => ({
  width: "180px",
  height: "140px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.between("sm", "md")]: {
    // border: "1px solid red",
    width: "150px",
  },
}));
export const WebImage = styled(Box)(({}) => ({
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
  borderRadius: "20px",
}));

export const ServiceFrontEndContentWrapper = styled(Box)(({ theme }) => ({
  width: "68%",
  height: "auto",
  backgroundColor: "#f7f7f9",
  display: "flex",
  flexDirection: "column",
  padding: "35px 40px",
  justifyContent: "space-between",
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
  },
}));
export const FrontEndContentBox = styled(Box)(({}) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));
export const FrontEndHeading = styled(Typography)(({}) => ({
  fontSize: "18px !important",
  fontWeight: "600 !important",
  paddingBottom: "12px",
}));
export const FrontEndSubHeading = styled(Typography)(({}) => ({
  fontSize: "16px !important",
  color: "#777181",
  fontWeight: "400 !important",
}));
