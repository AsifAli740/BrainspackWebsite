import { Box, Typography, styled } from "@mui/material";
export const DevelopmentProcessContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "620px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.between("sm", "md")]: {
    height: "1065px",
  },
  [theme.breakpoints.between("md", "lg")]: {
    height: "600px",
    // border: "1px solid red",
  },
}));
export const DevelopmentProcessWrapper = styled(Box)(({ theme }) => ({
  width: "90%",
  height: "90%%",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.between("sm", "md")]: {
    width: "90%",
    height: "90%",
  },
}));
export const DevelopmentTextBox = styled(Box)(({ theme }) => ({
  height: "100px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.between("sm", "md")]: {
    justifyContent: "center",
  },
}));
export const DevelopmentIconsAndImageBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  height: "90%",
  width: "100%",
  [theme.breakpoints.between("sm", "md")]: {
    flexDirection: "column",
  },
}));

export const DevelopmentIconsBox = styled(Box)(({ theme }) => ({
  width: "30%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.between("sm", "md")]: {
    // height: "auto",
    width: "100%",
    // justifyContent: "center",
  },
}));
export const DevelopmentImagesBox = styled(Box)(({ theme }) => ({
  width: "60%",
  marginTop: "2%",
  [theme.breakpoints.between("sm", "md")]: {
    // height: "auto",
    width: "100%",
    height: "400px",
  },
}));
export const DevelopmentMainImageBox = styled(Box)(() => ({
  height: "400px",
  width: "100%",
}));
export const DevelopmentMiniImageContainer = styled(Box)(() => ({
  height: "150px",
  width: "50%",
  position: "absolute",
  right: "20px",
  bottom: "20px",
  backgroundColor: "white",
  display: "flex",
  justifyContent: "center",
  align: "center",
}));
export const DevelopmentMiniImageBox = styled(Box)(() => ({
  height: "80%",
  width: "90%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
}));

export const DevelopmentText = styled(Typography)(() => ({
  fontSize: "30px !important",
  fontWeight: "600 !important",
}));

export const DevelopmentStepsText = styled(Typography)(() => ({
  fontSize: "24px !important",
  fontWeight: "600 !important",
  color: "#1B1525 !important",
}));
export const DevelopmentDetailsText = styled(Typography)(() => ({
  fontSize: "17px !important",
  fontWeight: "500 !important",
  color: "#777181 !important",
}));
// DEVELOPMENT STEPS //

export const DevelopmentStepsContainer = styled(Box)(() => ({
  position: "relative",
}));
export const DevelopmentStepsLineWrapper = styled(Box)(() => ({
  width: "3px",
  height: "350px",
  position: "absolute",
  left: "34px",
  top: "68px",
  zIndex: 1,
  backgroundColor: "#55ad88",
}));
export const DevelopmentStepsIconsBox = styled(Box)(() => ({
  height: "100px",
  display: "flex",
  gap: "20px",
}));
export const DevelopmentStepsBox = styled(Box)(() => ({
  width: "70px",
  height: "70px",
  backgroundColor: "#55ad88",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 100,
}));
export const DevelopmentStepsNameBox = styled(Box)(() => ({
  height: "70px",
  display: "flex",
  alignItems: "center",
}));
export const DevelopmentStepsNameText = styled(Typography)(() => ({
  fontSize: "17px !important",
  color: "#1b1525 !important",
  fontWeight: "700 !important",
}));
