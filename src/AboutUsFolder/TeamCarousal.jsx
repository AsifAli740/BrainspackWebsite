import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box, CardActionArea, Fade } from "@mui/material";
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
  TeamMembersDetails,
  TeamMembersName,
  TeamMembersText,
} from "./TeamCarasoulStyled";
import { GetKnowUsTitle } from "../HomePageFolder/GetKnowUs/GetKnowUsStyled";
import twoDots from "../Assets/images/shapes/section-title-shape.png";
import teamshape from "../Assets/images/shapes/team-one-shape.png";
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
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <TeamCarasoulWrapper>
        <TeamCarasoulContainer>
          <MeetTeamContainer>
            <MeetTeamBox>
              <Box component={"img"} src={twoDots} />
              <GetKnowUsTitle>Meet the team</GetKnowUsTitle>
            </MeetTeamBox>
            <Box>
              <TeamMembersText>Team Members</TeamMembersText>
            </Box>
            <Box width={"85%"}>
              <TeamMembersDetails>
                Embarking on a collaborative journey to success, Brainspack
                places your remarkable ideas at the forefront. Let's seamlessly
                bring them to life, forging a pathway to unparalleled
                achievements and enduring prosperity together.
              </TeamMembersDetails>
            </Box>
          </MeetTeamContainer>
          <CustomTeamCardBox>
            <Slider {...settings} style={{ margin: "0 20px" }}>
              {TEAM_DETAILS.map((team) => (
                <>
                  <CustomTeamCard sx={{ position: "relative" }}>
                    <CardActionArea className="carousel-card">
                      <CardMedia
                        component="img"
                        height="400px"
                        image={team.image}
                        alt={team.name}
                      />
                      <Box
                        className="Carousel-icons"
                        sx={{
                          position: "absolute",
                          right: "20px",
                          bottom: "120px",
                        }}
                      >
                        <Link
                          to={
                            team.link
                          }
                          target="blank"
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

                      <CardContent className="team-name-box"   sx={{ height: "100px", position:"relative"
                      // backgroundImage: `url(${teamshape})`, backgroundRepeat:"no-repeat",backgroundSize:"30% 100px"
                     }}
                      >
                        <Box className="team-shape-img"  component={"img"} src={teamshape} sx={{    position: "absolute",
    right: "-130px",
    height: "90px",
    width: "32%"}} />
                        <Box
                          display={"flex"}
                          flexDirection={"column"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          position= "absolute"
                          top= "17px"
                          left="100px"
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
