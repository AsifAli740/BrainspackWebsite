import { Box, Card, styled, Typography } from "@mui/material";

export const TeamCarasoulWrapper = styled(Box)(() => ({
  width: "100%",
  height: "900px",
  display: "flex",
  alignItems: "center",
}));
export const TeamCarasoulContainer = styled(Box)(() => ({
  width: "100%",
  height: "90%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
}));
export const MeetTeamContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  height: "70px",
}));
export const MeetTeamBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));
export const TeamMembersText = styled(Typography)(() => ({
  fontSize: "40px !important",
  color: "#1B1525 !important",
  fontWeight: "600 !important",
}));
export const TeamMembersName = styled(Typography)(() => ({
  fontSize: "26px !important",
  color: "#1B1525 !important",
  fontWeight: "700 !important",
}));
export const TeamMembersDesignation = styled(Typography)(() => ({
  fontSize: "15px !important",
  color: "#777181 !important",
  fontWeight: "400 !important",
}));
export const TeamMembersDetails = styled(Typography)(() => ({
  fontSize: "18px !important",
  color: "#777181 !important",
  fontWeight: "400 !important",
  lineHeight: "32px !important",
  textAlign: "center",
}));
export const CustomTeamCardBox = styled(Box)(() => ({
  height: "500px",
  width: "95%",
  margin: "0 auto",
}));
export const CustomTeamCard = styled(Card)(() => ({
  margin: "0 20px",
  height: "500px",
  borderRadius: "none !important",
}));
