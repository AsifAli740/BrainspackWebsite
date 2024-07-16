import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box, CardActionArea } from "@mui/material";
import { TEAM_DETAILS } from "./TeamCarasoulConstant";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import {
  CustomTeamCard,
  CustomTeamCardBox,
  MeetTeamBox,
  MeetTeamContainer,
  TeamCarasoulContainer,
  TeamCarasoulWrapper,
  TeamMembersDesignation,
  TeamMembersName,
  TeamMembersText,
} from "./TeamCarasoulStyled";
import { GetKnowUsTitle } from "../HomePageFolder/GetKnowUs/GetKnowUsStyled";
import twoDots from "../Assets/images/shapes/section-title-shape.png";
import "../ExternalCss/GetKnowUs.css";
import { Link } from "react-router-dom";

const TeamCarousal = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    height: true,
  };
  return (
    <>
      <TeamCarasoulWrapper id="#c1">
        <TeamCarasoulContainer>
          <MeetTeamContainer>
            <MeetTeamBox>
              <Box component={"img"} src={twoDots} />
              <GetKnowUsTitle>Meet the team</GetKnowUsTitle>
            </MeetTeamBox>
            <Box>
              <TeamMembersText>Team Members</TeamMembersText>
            </Box>
          </MeetTeamContainer>
          <CustomTeamCardBox>
            <Slider {...settings} style={{ margin: "0 20px" }}>
              {TEAM_DETAILS.map((team) => (
                <>
                  <CustomTeamCard  sx={{position:"relative"}}>
                    <CardActionArea  className="carousel-card"   >
                      <CardMedia
                        component="img"
                        height="400px"
                        image={team.image}
                        alt={team.name}
                       
                      />
                      <Box className="Carousel-icons" sx={{position:"absolute",right:"20px" ,bottom:"120px"}}>
                        <Link
                          to={
                            "https://www.linkedin.com/company/brainspack/?originalSubdomain=in"
                          }
                        >
                          <Box className="icon-wrapper">
                            <Box className="icon-overlay"></Box>
                            <LinkedInIcon sx={{ zIndex: "2" }} />
                          </Box>
                        </Link>
                        <Link
                          to={
                            "https://www.instagram.com/brainspack?igsh=MTI2aHhqYXlmZmJzdQ=="
                          }
                        >
                          <Box className="icon-wrapper">
                            <Box className="icon-overlay"></Box>
                            <InstagramIcon sx={{ zIndex: "2" }} />
                          </Box>
                        </Link>
                      </Box>

                      <CardContent>
                        <Box
                          display={"flex"}
                          flexDirection={"column"}
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          <TeamMembersName>{team.name}</TeamMembersName>
                          <TeamMembersDesignation>
                            {team.designation}
                          </TeamMembersDesignation>
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </CustomTeamCard>
                </>
              ))}
            </Slider>
          </CustomTeamCardBox>
        </TeamCarasoulContainer>
      </TeamCarasoulWrapper>
    </>
  );
};
export default TeamCarousal;
