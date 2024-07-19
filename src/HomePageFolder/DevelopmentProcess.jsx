import { Box } from "@mui/material";
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
  DevelopmentIconsAndImageBox,
  DevelopmentMainImageBox,
  DevelopmentMiniImageBox,
  DevelopmentMiniImageContainer,
} from "./DevelopmentProcessStyled";
import { DEVELOPMENT_PROCESS_IMAGES } from "../Utils/constant";
import DevelopmentStepsComp from "../ReUseComponents/DevelopmentSteps";
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
          <DevelopmentIconsAndImageBox>
            <DevelopmentIconsBox>
              <DevelopmentStepsComp />
            </DevelopmentIconsBox>
            <DevelopmentImagesBox position={"relative"}>
              <Slider {...settings}>
                {DEVELOPMENT_PROCESS_IMAGES.map((images) => (
                  <>
                    <DevelopmentMainImageBox
                      component={"img"}
                      src={images.image}
                    />
                    <DevelopmentMiniImageContainer>
                      <DevelopmentMiniImageBox>
                        <DevelopmentStepsText>
                          {images.name}
                        </DevelopmentStepsText>
                        <Box width={"80%"}>
                          <DevelopmentDetailsText>
                            {images.detail}
                          </DevelopmentDetailsText>
                        </Box>
                      </DevelopmentMiniImageBox>
                    </DevelopmentMiniImageContainer>
                  </>
                ))}
              </Slider>
            </DevelopmentImagesBox>
          </DevelopmentIconsAndImageBox>
        </DevelopmentProcessWrapper>
      </DevelopmentProcessContainer>
    </>
  );
};
export default DevelopmentProcess;
