import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import { TEAM_DETAILS } from "./TeamCarasoulConstant";
import {
  TeamCarasoulContainer,
  TeamCarasoulWrapper,
} from "./TeamCarasoulStyled";
import { GetKnowUsTitle } from "../HomePageFolder/GetKnowUs/GetKnowUsStyled";
import twoDots from "../Assets/images/shapes/section-title-shape.png";

const TeamCarousal = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <TeamCarasoulWrapper>
        <TeamCarasoulContainer>
          <Box display={"flex"} alignItems={"center"} gap={"10px"}>
            <Box component={"img"} src={twoDots} />
            <GetKnowUsTitle>Get to know us</GetKnowUsTitle>
          </Box>
          <Slider {...settings}>
            {TEAM_DETAILS.map((team) => (
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={team.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {team.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {team.designation}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Slider>
        </TeamCarasoulContainer>
      </TeamCarasoulWrapper>
    </>
  );
};
export default TeamCarousal;
