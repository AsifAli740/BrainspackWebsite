import { Box } from "@mui/material";
import styled from "styled-components";
import serviceImg from "../Assets/images/shapes/service-bg-1-1.png"

export const BrainspackServiceContainer = styled(Box)(() => ({
    width: "100%",
    height: "684px",
    backgroundColor:"red",
    backgroundImage:`url(${serviceImg})`
  }));