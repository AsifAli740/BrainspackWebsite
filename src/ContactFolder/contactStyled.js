import { Box, Typography, styled } from "@mui/material";
import ContactDetails from "../Assets/images/resources/contact-details-img.jpg";
import { LineWeight } from "@mui/icons-material";

export const GetInTouchContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "800px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.between("xs", "sm")]: {
    height: "1250px",
  },
}));
export const GetInTouchBox = styled(Box)(({ theme }) => ({
  width: "90%",
  height: "70%",
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.between("xs", "sm")]: {
    flexDirection: "column",
    height: "80%",
    width: "88%",
  },
}));
export const GetInTouchImageBox = styled(Box)(({ theme }) => ({
  width: "45%",
  height: "90%",
  backgroundImage: `url(${ContactDetails})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  [theme.breakpoints.between("xs", "sm")]: {
    width: "100%",
    height: "435px",
    backgroundSize: "100% 435px",
  },
}));
export const GetInTouchContentBox = styled(Box)(({ theme }) => ({
  width: "45%",
  height: "100%",
  [theme.breakpoints.between("xs", "sm")]: {
    width: "100%",
    height: "520px",
  },
}));
export const GetInTouchContentContainer = styled(Box)(({ theme }) => ({
  width: "80%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  [theme.breakpoints.between("xs", "sm")]: {
    width: "65%",
    height: "100%",
  },
}));
export const TwoDotsBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));
export const ContactUsIconsBoxEach = styled(Box)(() => ({
  display: "flex",
  gap: "25px",
}));

export const ContactUsIconsBox = styled(Box)(() => ({
  height: "80px",
  width: "80px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f7f7f9",
  "&:hover": {
    backgroundColor: "#55AD88",
    color: "white",
    transition: "all 500ms ease",
  },
}));
export const TrialBox = styled(Box)(() => ({
  "&:hover": {
    "& $phoneIcon": {
      color: "purple",
    },
  },
}));
export const ContactUsDetailsBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));
export const ContactUsText = styled(Typography)(({ theme }) => ({
  fontSize: "16px !important",
  fontWeight: "400 !important",
  color: "#777181",
  [theme.breakpoints.between("xs", "sm")]: {
    fontSize: "16px !important",
  },
}));
export const ContactUsTextEmail = styled(Typography)(({ theme }) => ({
  fontSize: "20px !important",
  fontWeight: "500 !important",
  color: "#1b1525",
  [theme.breakpoints.between("xs", "sm")]: {
    fontSize: "16px !important",
  },
}));
export const ContactUsTextAddress = styled(Typography)(({ theme }) => ({
  fontSize: "22px !important",
  fontWeight: "500 !important",
  color: "#1b1525",
  [theme.breakpoints.between("xs", "sm")]: {
    fontSize: "16px !important",
    fontWeight: "400 !important",
  },
}));
