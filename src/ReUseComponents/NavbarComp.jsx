import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  MenuContainer,
  MenuListWrapper,
  MenuWrapper,
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
import MenuIcon from "@mui/icons-material/Menu";
import CartDrawer from "../HomePageFolder/Drawer";

function NavbarComp() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    // top: false,
    left: false,
    // bottom: false,
    // right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

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
                <Link className="mail-color" to={"mailto:info@brainspack.com"}>
                  info@brainspack.com
                </Link>
              </EmailBox>
            </AddressEmailWrapper>
            <AboutContactLinkWrapper>
              <Link className="link-style" to={"/about"}>
                <AboutLink>About</AboutLink>
              </Link>
              <Slash>/</Slash>

              <Link className="link-style" to={"/contact"}>
                <ContactLink>Contact</ContactLink>
              </Link>
            </AboutContactLinkWrapper>
          </NavbarTopLeft>
        </NavbarTopLeftWrapper>
        <NavbarTopRightwrapper>
          <LinkedInInstaWrapper>
            <LinkedInIcon
              className="nav-icon-hover"
              sx={{ fontSize: "18px" }}
            ></LinkedInIcon>
            <InstagramIcon
              className="nav-icon-hover"
              sx={{ fontSize: "18px" }}
            ></InstagramIcon>
          </LinkedInInstaWrapper>
        </NavbarTopRightwrapper>
      </Navbar>
      <MainMenuWrapper>
        <MainMenu>
          <MenuListWrapper>
            <LogoWrapper>
              <BrainspackLogoWrapper></BrainspackLogoWrapper>
            </LogoWrapper>
            <MenuWrapper>
              <MenuContainer>
                <MenuIcon
                  sx={{ fontSize: "35px", color: "#55ad88" }}
                  onClick={toggleDrawer("left", true)}
                />
              </MenuContainer>
            </MenuWrapper>

            <ListsBox className="navListParent">
              <MainMenuList className="border-btm">
                <Navlinks className="setBorderBtm" to={"/"}>
                  {"Home"}
                </Navlinks>
              </MainMenuList>
              <MainMenuList className="border-btm">
                <Navlinks className="setBorderBtm" to={"/about"}>
                  {"About Us"}
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
                    top: "116px",
                    left: "220px",
                    zIndex: "999",
                    display: "none",
                    boxShadow: "0px 0px 65px 0px rgba(0, 0, 0, 0.1)",

                    cursor: "pointer",
                  }}
                >
                  <ServiceOptions
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/services/web-development");
                    }}
                    className="options webDevelop"
                  >
                    <Box
                      className="webDev-options"
                      sx={{
                        width: "100%",
                        height: "165px",
                        bgcolor: "white",
                        position: "absolute",
                        top: "0px",
                        left: "100%",
                        display: "none",
                      }}
                    >
                      <ServiceOptions
                        onClick={(e) => {
                          e.stopPropagation();

                          navigate("/services/web-development/mean");
                        }}
                        className="options"
                      >
                        MEAN Stack
                      </ServiceOptions>
                      <ServiceOptions
                        onClick={(e) => {
                          e.stopPropagation();

                          navigate("/services/web-development/mern");
                        }}
                        className="options"
                      >
                        MERN Stack
                      </ServiceOptions>
                      <ServiceOptions
                        onClick={(e) => {
                          e.stopPropagation();

                          navigate("/services/web-development/php");
                        }}
                        className="options"
                      >
                        PHP
                      </ServiceOptions>
                    </Box>
                    Web Development
                  </ServiceOptions>
                  <ServiceOptions
                    onClick={() => navigate("/services/ui-ux-design")}
                    className="options"
                  >
                    UI/UX Desiging
                  </ServiceOptions>
                  <ServiceOptions
                    onClick={() => navigate("/services/mobile-app-development")}
                    className="options"
                  >
                    Mobile App Development
                  </ServiceOptions>
                  <ServiceOptions
                    onClick={() => navigate("/services/digital-marketing")}
                    className="options"
                  >
                    Digital Marketing
                  </ServiceOptions>
                </Box>
                <Navlinks className="setBorderBtm" to={"/services"}>
                  {"Services"}
                </Navlinks>
              </MainMenuList>
              <MainMenuList className="border-btm">
                <Navlinks className="setBorderBtm" to={"/contact"}>
                  {"Contact"}
                </Navlinks>
              </MainMenuList>
            </ListsBox>
          </MenuListWrapper>
        </MainMenu>
      </MainMenuWrapper>
      <CartDrawer
        state={state}
        setState={setState}
        toggleDrawer={toggleDrawer}
      />
    </MainContainer>
  );
}

export default NavbarComp;
