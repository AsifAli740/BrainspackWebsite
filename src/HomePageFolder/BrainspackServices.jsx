import {
  ServicesWrapper,
  ServicesBox,
  ServicesCard,
  ServicesHeading,
  ServicesCardMedia,
  LearnMoreBtn,
} from "./homePageStyled";
import { SERVICES_CONTENT } from "./Constants";
import { Box, Typography } from "@mui/material";
import { serviceCardContent } from "../Utils/constant";
import {
  CardHeading,
  CardSubHeading,
} from "../ReUseComponents/serviceBrainspackStyled";
import { Link, useNavigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";


const BrainspackServices = () => {
  const navigate = useNavigate();
  return (
    <>
      <ServicesWrapper>
        <ServicesBox>
          {SERVICES_CONTENT.map((service) => (
            <ServicesCard position={"relative"} className="container">
              <Box
                width={"100%"}
                height={"360px"}
                className={"imageServiceBox"}
                boxSizing={"border-box"}
                overflow={"hidden"}
              >
                {/* <Box
                className="blackWrapper"
                  sx={{
                    width: "100%",
                    height: "0px",
                    transition:"all 500ms ease",
                    backgroundColor: "#282331",
                    
                  }}
                > */}
                {/* <Box className="secondBlackWrapper" sx={{ opacity: "1" }}> */}
                <ServicesCardMedia
                  component="img"
                  src={service.image}
                  // className="image"
                  className="scaleImage"
                />
                <Box className="overlay"></Box>
                <Box class="overlay-top">
                    <Box sx={{width:"100%",height:"inherit",padding:"20px"}}>
                  <Box class="text">
                    <Typography>{service.icons}</Typography>
                    <Typography sx={{ fontWeight: "700", width:"80%",fontSize:"24px" }}>
                      {service.name}
                    </Typography>
                    <Typography sx={{ fontSize: "17px",
    color: "#aea8b9",
    lineHeight: "30px" }}>
                      {service.subHeading}
                    </Typography>
                    <Box >
                      <Link to={service.link}>
                  <LearnMoreBtn className="Learn-more" sx={{color:"#55ad88!important"}} endIcon={<ArrowRightAltIcon />}>
                    Learn more
                  </LearnMoreBtn>
                      </Link>
                </Box>

                    </Box>
                  </Box>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  textAlign={"center"}
                  height={"20%"}
                  position={"absolute"}
                  bottom={"30px"}
                  left={"60px"}
                  className="serviceHeadingText"
                >
                  <ServicesHeading variant="h5">{service.name}</ServicesHeading>
                </Box>
              </Box>
              {/* </Box> */}
              {/* </Box> */}
            </ServicesCard>
          ))}
        </ServicesBox>
      </ServicesWrapper>
    </>
  );
};
export default BrainspackServices;
