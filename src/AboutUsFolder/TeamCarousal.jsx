import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box, CardActionArea } from "@mui/material";
import { TEAM_DETAILS } from "./TeamCarasoulConstant";
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

const TeamCarousal = () => {
  var settings = {
    dots: true,
    // dotsClass: "slick-dots custom-dots",
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
                  <CustomTeamCard>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="400px"
                        image={team.image}
                        alt={team.name}
                      />

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
