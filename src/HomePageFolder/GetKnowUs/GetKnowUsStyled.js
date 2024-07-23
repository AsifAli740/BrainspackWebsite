import { Box, Typography, styled } from "@mui/material";
export const GetKnowUsContainer = styled(Box)(() => ({
  width: "100%",
  height: "700px",
  display: "flex",
  justifyContent: "center",
}));
export const GetKnowUsWrapper = styled(Box)(() => ({
  width: "90%",
  height: "100%",
  display: "flex",
  justifyContent: "space-between",
}));
export const GetKnowUsImageBox = styled(Box)(() => ({
  width: "58%",
  height: "100%",
  position: "relative",
}));
export const GetKnowUsContentBox = styled(Box)(() => ({
  width: "39%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));
export const GetKnowUsTitleWrapper = styled(Box)(() => ({
  displa:"flex",
   flexDirection:"column",
    gap:"10px"
}));
export const GetKnowUsTitleBox = styled(Box)(() => ({
  displa:"flex",
   alignItems:"center",
    gap:"10px"
}));
export const GetKnowUsTitle = styled(Typography)(() => ({
  color: "#55ad88",
  fontSize: "16px !important",
  fontWeight: "700 !important",
}));
export const GetKnowUsTitle2 = styled(Typography)(({ theme }) => ({
  fontSize: "40px !important",
  fontWeight: "600 !important",
  lineHeight: "50px !important",
  color: "#1b1525",
  [theme.breakpoints.down("sm")]: {
    fontSize: "30px !important",
    fontWeight: "700 !important",
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: "30px !important",
    fontWeight: "700 !important",
  },
  [theme.breakpoints.between("md", "lg")]: {
    fontSize: "40px !important",
    fontWeight: "700 !important",
  },
}));

export const Offerings = styled(Typography)(({ theme }) => ({
  color: "#777181",
  fontSize: "16px !important",
  fontWeight: "400 !important",
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px !important",
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: "16px !important",
  },
}));
export const Features = styled(Typography)(() => ({
  color: "#1B1525",
  fontSize: "17px !important",
  fontWeight: "400 !important",
  lineHeight: "32px",
}));
export const Problems = styled(Typography)(() => ({
  color: "#1b1525 !important",
  fontSize: "18px !important",
  fontWeight: "700 !important",
  lineHeight: "36px",
}));
