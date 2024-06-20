import React from "react";
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
  Slash,
} from "./homePageStyled";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { headerLinks } from "../constant";
import MainSlider from "./MainSlider";

function HomePage() {
  return (
    <MainContainer>
      <Navbar>
        <NavbarTopLeftWrapper>
          <NavbarTopLeft>
            <AddressEmailWrapper>
              <AddressBox>
                <LocationOnIcon sx={{fontSize:"17px",color:"#55ad88"}}></LocationOnIcon>
                Yamuna Nagar, Haryana, India
                </AddressBox>
                <EmailBox>
                    <EmailIcon sx={{fontSize:"17px",color:"#55ad88"}}></EmailIcon>
                    info@brainspack.com
                </EmailBox>
            </AddressEmailWrapper>
            <AboutContactLinkWrapper>
                <AboutLink>
                        About  
                </AboutLink>
                <Slash>
                    /
                </Slash>
                
                <ContactLink>
                  Contact
                </ContactLink>
            </AboutContactLinkWrapper>
          </NavbarTopLeft>
        </NavbarTopLeftWrapper>
        <NavbarTopRightwrapper>
            <LinkedInInstaWrapper>
                <LinkedInIcon sx={{fontSize:"18px"}}></LinkedInIcon>
                <InstagramIcon sx={{fontSize:"18px"}}></InstagramIcon>
            </LinkedInInstaWrapper>
        </NavbarTopRightwrapper>
      </Navbar>
      <MainMenuWrapper>
        <MainMenu>
            <MenuListWrapper>
                <LogoWrapper>
                    <BrainspackLogoWrapper>
                    </BrainspackLogoWrapper>

                </LogoWrapper>
                <ListsBox>
                    {headerLinks.map((ele)=>(
                            <MainMenuList>
                            <Navlinks to={ele.links}>
                                {ele.item}
                            </Navlinks>
    
                        </MainMenuList>
                    ))}

                    
                </ListsBox>
            </MenuListWrapper>
        </MainMenu>
      </MainMenuWrapper>
      <MainSlider />
    </MainContainer>

  );
}

export default HomePage;
