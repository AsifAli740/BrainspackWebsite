import { Box, Typography, styled } from "@mui/material";
import ContactDetails from "../Assets/images/resources/contact-details-img.jpg";

export const GetInTouchContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "800px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    height: "1200px",
  },
  [theme.breakpoints.between("sm", "md")]: {
    height: "1400px",
  },
  [theme.breakpoints.between("md", "lg")]: {
    height: "800px",
  },
}));
export const GetInTouchBox = styled(Box)(({ theme }) => ({
  width: "90%",
  height: "70%",
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    height: "85%",
    width: "88%",
  },
  [theme.breakpoints.between("sm", "md")]: {
    flexDirection: "column",
    height: "85%",
    width: "88%",
  },
  [theme.breakpoints.between("md", "lg")]: {
    height: "70%",
    width: "90%",
  },
}));
export const GetInTouchImageBox = styled(Box)(({ theme }) => ({
  width: "45%",
  height: "90%",
  backgroundImage: `url(${ContactDetails})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "40%",
    backgroundSize: "100% 100%",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    height: "45%",
    backgroundSize: "100% 100%",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "48%",
    height: "70%",
    backgroundSize: "100% 100%",
  },
}));
export const GetInTouchContentBox = styled(Box)(({ theme }) => ({
  width: "45%",
  height: "100%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "55%",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    height: "50%",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "48%",
    height: "100%",
  },
}));
export const GetInTouchContentContainer = styled(Box)(({ theme }) => ({
  width: "80%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    width: "80%",
    height: "100%",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "66%",
    height: "100%",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
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
  fontSize: "15px !important",
  fontWeight: "400 !important",
  color: "#777181",
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px !important",
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: "16px !important",
  },
}));
export const ContactUsTextEmail = styled(Typography)(({ theme }) => ({
  fontSize: "20px !important",
  fontWeight: "500 !important",
  color: "#1b1525",
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px !important",
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: "18px !important",
  },
}));
export const ContactUsTextAddress = styled(Typography)(({ theme }) => ({
  fontSize: "21px !important",
  fontWeight: "500 !important",
  color: "#1b1525",
  width: "77%",
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px !important",
    fontWeight: "400 !important",
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: "21px !important",
    fontWeight: "500 !important",
    width: "78%",
  },
}));
