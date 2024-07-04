import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AboutContactLink,
  AboutContactLinkWrapper,
  AboutLink,
  AddressBox,
  AddressEmailWrapper,
  BrainspackLogoWrapper,
  ContactLink,
  EmailBox,
  LinkedInInstaWrapper,
  ListsBox,
  LogoWrapper,
  MainContainer,
  MainMenu,
  MainMenuList,
  MainMenuWrapper,
  MenuListWrapper,
  Navbar,
  NavbarTopLeft,
  NavbarTopLeftWrapper,
  NavbarTopRightwrapper,
  Navlinks,
  ServiceOptions,
  Slash,
} from "./NavbarStyled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { headerLinks } from "../Utils/constant";
import MainSlider from "../HomePageFolder/MainSlider";
import { Box } from "@mui/material";

function NavbarComp() {
  const navigate = useNavigate()
  return (
    <MainContainer>
      <Navbar>
        <NavbarTopLeftWrapper>
          <NavbarTopLeft>
            <AddressEmailWrapper>
              <AddressBox>
                <LocationOnIcon
                  sx={{ fontSize: "17px", color: "#55ad88" }}
                ></LocationOnIcon>
                Yamuna Nagar, Haryana, India
              </AddressBox>
              <EmailBox>
                <EmailIcon
                  sx={{ fontSize: "17px", color: "#55ad88" }}
                ></EmailIcon>
                info@brainspack.com
              </EmailBox>
            </AddressEmailWrapper>
            <AboutContactLinkWrapper>
              <AboutLink>About</AboutLink>
              <Slash>/</Slash>

              <ContactLink>Contact</ContactLink>
            </AboutContactLinkWrapper>
          </NavbarTopLeft>
        </NavbarTopLeftWrapper>
        <NavbarTopRightwrapper>
          <LinkedInInstaWrapper>
            <LinkedInIcon sx={{ fontSize: "18px" }}></LinkedInIcon>
            <InstagramIcon sx={{ fontSize: "18px" }}></InstagramIcon>
          </LinkedInInstaWrapper>
        </NavbarTopRightwrapper>
      </Navbar>
      <MainMenuWrapper>
        <MainMenu>
          <MenuListWrapper>
            <LogoWrapper>
              <BrainspackLogoWrapper></BrainspackLogoWrapper>
            </LogoWrapper>
            <ListsBox>
              {/* {headerLinks.map((ele) => ( */}
              <MainMenuList className="border-btm">
                <Navlinks className="setBorderBtm" to={"/"}>
                  {"Home"}
                </Navlinks>
              </MainMenuList>
              <MainMenuList className="border-btm">
                <Navlinks className="setBorderBtm" to={"/about"}>
                  {"About us"}
                </Navlinks>
              </MainMenuList>
              <MainMenuList className="navService border-btm">
                <Box
                  className="hello"
                  sx={{
                    width: "55%",
                    height: "220px",
                    bgcolor: "#fff",
                    position: "absolute",
                    top: "130px",
                    left: "270px",
                    zIndex: "999",
                    display: "none",
                    boxShadow: "0px 0px 65px 0px rgba(0, 0, 0, 0.1)",
                    
                    cursor:"pointer"
                  }}
                >
                  <ServiceOptions onClick={()=>navigate("/services/web-development")} className="options webDevelop">
                    <Box
                      className="webDev-options"
                      sx={{
                        width: "100%",
                        height: "165px",
                        bgcolor: "white",
                        position: "absolute",
                        top:"0px",
                        left:"100%",
                        display:"none"
                      }}
                    >
                      <ServiceOptions onClick={()=>navigate("/mean")} className="options">
                   MEAN Stack
                  </ServiceOptions>
                  <ServiceOptions onClick={()=>navigate("/mern")}  className="options">
                    MERN Stack
                  </ServiceOptions>
                  <ServiceOptions onClick={()=>navigate("/php")} className="options">
                    PHP
                  </ServiceOptions>
                    </Box>
                    Web Development
                  </ServiceOptions>
                  <ServiceOptions onClick={()=>navigate("/services/ui-ux-design")} className="options">
                    UI/UX Desiging
                  </ServiceOptions>
                  <ServiceOptions onClick={()=>navigate("/services/mobile-app-development")} className="options">
                    Mobile App Development
                  </ServiceOptions>
                  <ServiceOptions onClick={()=>navigate("/services/digital-marketing")} className="options">
                    Digital Marketing
                  </ServiceOptions>
                </Box>
                <Navlinks className="setBorderBtm" to={"/services"}>
                  {"Services"}
                </Navlinks>
              </MainMenuList>
              <MainMenuList className="border-btm">
                <Navlinks className="setBorderBtm" to={"/Contact"}>
                  {"Contact"}
                </Navlinks>
              </MainMenuList>
              {/* ))} */}
            </ListsBox>
          </MenuListWrapper>
        </MainMenu>
      </MainMenuWrapper>
    </MainContainer>
  );
}

export default NavbarComp;
