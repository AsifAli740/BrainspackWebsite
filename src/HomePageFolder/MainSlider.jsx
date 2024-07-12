import React from "react";
import {
  BrainspackSliderHeading,
  BrainspackSliderPPPHeading,
  CustomBtn,
  ExploreBrainspackLink,
  GetSolution,
  GetSolutionContainer,
  MainSliderBox,
  SliderWrapper,
} from "./homePageStyled";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../Assets/images/backgrounds/main-slider-1-1.jpg";
import image2 from "../Assets/images/backgrounds/main-slider-1-2.jpg";
import image3 from "../Assets/images/backgrounds/main-slider-1-3.jpg";
import { Box } from "@mui/material";
import mainSliderShape1 from "../Assets/images/shapes/main-slider-shape-1.png";
import mainSliderShape2 from "../Assets/images/shapes/main-slider-shape-2.png";
import mainSliderShape3 from "../Assets/images/shapes/main-slider-shape-3.png";
import ScrollAnimation from "react-animate-on-scroll";

function MainSlider(props) {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    height: true,
    pauseOnHover: false,
  };
  const IMAGES = [
    {
      id: 1,
      image: image1,
    },
    {
      id: 2,
      image: image2,
    },
    {
      id: 3,
      image: image3,
    },
  ];
  return (
    <>
      <SliderWrapper position={"relative"} className="swiper-slide-active">
        <Slider {...settings}>
          {IMAGES.map((product) => (
            <>
              <Box
                component={"img"}
                height={"731px"}
                width={"100%"}
                src={product.image}
                className="mainSliderMainImages"
              />

              <MainSliderBox position={"absolute"} top={"200px"} left={"200px"}>
                <BrainspackSliderHeading>
                  Brains
                  <BrainspackSliderPPPHeading variant="span">
                    p
                  </BrainspackSliderPPPHeading>
                  ack
                </BrainspackSliderHeading>

                <Link to={"/about"}>
                  {" "}
                  <CustomBtn>Discover more</CustomBtn>
                </Link>
              </MainSliderBox>
              <Box
                height={"400px"}
                width={"45%"}
                position={"absolute"}
                top={"0px"}
                right={"0px"}
              >
                {/* <ScrollAnimation animateIn="slideInRight"> */}
                <Box
                  component={"img"}
                  height={"400px"}
                  width={"100%"}
                  src={mainSliderShape1}
                  className="animate__animated animate__slideInRight "
                  // className="mainSliderOne"
                />
                {/* </ScrollAnimation> */}
              </Box>
              <Box
                component={"img"}
                height={"400px"}
                width={"50%"}
                src={mainSliderShape2}
                position={"absolute"}
                bottom={"0px"}
                right={"0px"}
                className="mainSliderTwo"
              />
              <Box
                component={"img"}
                height={"200px"}
                width={"20%"}
                src={mainSliderShape3}
                position={"absolute"}
                bottom={"0px"}
                left={"0px"}
                sx={{ mixBlendMode: "overlay", opacity: 0, zIndex: 1 }}
                className="mainSliderThree"
              />
            </>
          ))}
        </Slider>
      </SliderWrapper>
      <GetSolutionContainer>
        <GetSolution>
          Stop wasting time and money on technology.
          <ExploreBrainspackLink variant="span">
            <Link className="exploreLink" to="/about">
              {" "}
              Explore Brainspack{" "}
            </Link>
          </ExploreBrainspackLink>
          and get best solutions.
        </GetSolution>
      </GetSolutionContainer>
    </>
  );
}

export default MainSlider;
