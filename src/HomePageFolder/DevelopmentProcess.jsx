import { Typography, Box, Fab } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../ExternalCss/GetKnowUs.css";
import {
  DevelopmentProcessContainer,
  DevelopmentProcessWrapper,
  DevelopmentTextBox,
  DevelopmentText,
  DevelopmentIconsBox,
  DevelopmentImagesBox,
  DevelopmentStepsText,
  DevelopmentDetailsText,
} from "./DevelopmentProcessStyled";
import {
  DEVELOPMENT_PROCESS,
  DEVELOPMENT_PROCESS_IMAGES,
} from "../Utils/constant";
import CustomizedSteppers from "../ReUseComponents/Stepper";
const DevelopmentProcess = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    height: true,
  };
  return (
    <>
      <DevelopmentProcessContainer>
        <DevelopmentProcessWrapper>
          <DevelopmentTextBox>
            <DevelopmentText>Our Development Process</DevelopmentText>
          </DevelopmentTextBox>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            height={"90%"}
            width={"100%"}
          >
            <DevelopmentIconsBox>
              <CustomizedSteppers />
            </DevelopmentIconsBox>
            <DevelopmentImagesBox position={"relative"}>
              <Slider {...settings}>
                {DEVELOPMENT_PROCESS_IMAGES.map((images) => (
                  <>
                    <Box
                      component={"img"}
                      height={"400px"}
                      width={"100%"}
                      src={images.image}
                      backgroundSize={"contain"}
                    />
                    <Box
                      height={"150px"}
                      width={"50%"}
                      position={"absolute"}
                      right={"20px"}
                      bottom={"20px"}
                      backgroundColor={"white"}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Box
                        height={"80%"}
                        width={"90%"}
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"space-around"}
                      >
                        <DevelopmentStepsText>
                          {images.name}
                        </DevelopmentStepsText>
                        <Box width={"80%"}>
                          <DevelopmentDetailsText>
                            {images.detail}
                          </DevelopmentDetailsText>
                        </Box>
                      </Box>
                    </Box>
                  </>
                ))}
              </Slider>
            </DevelopmentImagesBox>
          </Box>
        </DevelopmentProcessWrapper>
      </DevelopmentProcessContainer>
    </>
  );
};
export default DevelopmentProcess;
