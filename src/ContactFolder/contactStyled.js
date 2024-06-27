import styled from "styled-components";
import { Box } from "@mui/material";
import ContactDetails from "../Assets/images/resources/contact-details-img.jpg";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

export const GetInTouchContainer = styled(Box)(() => ({
  width: "100%",
  height: "800px",
  border: "1px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
export const GetInTouchBox = styled(Box)(() => ({
  width: "90%",
  height: "70%",
  border: "1px solid red",
  display: "flex",
  justifyContent: "space-between",
}));
export const GetInTouchImageBox = styled(Box)(() => ({
  width: "45%",
  height: "90%",
  border: "1px solid green",
  backgroundImage: `url(${ContactDetails})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
}));
export const GetInTouchContentBox = styled(Box)(() => ({
  width: "45%",
  height: "100%",
  border: "1px solid yellow",
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
    // backgroundColor: "#55AD88",
    // color: "white",
    // transition: "all 500ms ease",
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
