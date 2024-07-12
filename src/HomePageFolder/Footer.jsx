import {
  FooterWrapper,
  RightFooterImageBox,
  LeftFooterImageBox,
  FooterLogo,
  FooterTextWrapper,
  ChallengesWrapper,
  FooterContentWrapper,
  CustomBtn,
  ChallengesBox,
  IconAndBtnBox,
  FooterContent,
  FooterLinks,
  FooterAddress,
  FooterLinksBox,
  FooterContactBox,
  FooterContentBox,
  ContactBox,
  ContactBoxDetailsEach,
  ContactBoxDetails,
  SocialMediaFab,
  LinksTextBox,
  LinksTextBoxDetails,
  SocialMediaBox,
  LinksAndContentBox,
  AcUnitIconBox,
  FooterCompanyFullAddress,
} from "./homePageStyled";
import { Box, Fab, Typography } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import MessageIcon from "@mui/icons-material/Message";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
const FooterComp = () => {
  return (
    <>
      <FooterWrapper>
        <LeftFooterImageBox className="getToKnowUsAnimation"></LeftFooterImageBox>
        <RightFooterImageBox className="aboutUsAnimation"></RightFooterImageBox>
        <FooterTextWrapper>
          <ChallengesWrapper>
            <ChallengesBox>
              <IconAndBtnBox>
                <AcUnitIconBox>
                  <AcUnitIcon sx={{ fontSize: "65px" }} />
                </AcUnitIconBox>
                <Box display={"flex"} alignItems={"center"}>
                  <FooterContent>
                    Helping you overcome your technology challenges
                  </FooterContent>
                </Box>
              </IconAndBtnBox>
              <Box>
                <Link to={"/about"}>
                <CustomBtn>Discover More</CustomBtn>
                </Link>
              </Box>
            </ChallengesBox>
          </ChallengesWrapper>
          <FooterContentWrapper>
            <FooterContentBox>
              <FooterLogo></FooterLogo>
              <LinksAndContentBox>
                <FooterLinksBox>
                  <LinksTextBox>
                    <FooterLinks>Links</FooterLinks>
                  </LinksTextBox>
                  <LinksTextBoxDetails>
                  <Link className="link-style" to={"/about"}>
                    <FooterAddress>About us</FooterAddress>
                  </Link>
                    <FooterAddress>
                      Meet our team</FooterAddress>
                      <Link className="link-style" to={"/contact"}>

                    <FooterAddress>Contacts</FooterAddress>
                    </Link>
                  </LinksTextBoxDetails>
                </FooterLinksBox>
                <FooterContactBox>
                  <ContactBox>
                    <FooterLinks>Contact</FooterLinks>
                  </ContactBox>
                  <ContactBoxDetails>
                    <ContactBoxDetailsEach>
                      <PhoneIcon sx={{ color: "#55ad88" }} />
                      <FooterAddress>+91-9168117671</FooterAddress>
                    </ContactBoxDetailsEach>
                    <ContactBoxDetailsEach>
                      <MessageIcon sx={{ color: "#55ad88" }} />
                      <FooterAddress>info@brainspack.com</FooterAddress>
                    </ContactBoxDetailsEach>
                    <ContactBoxDetailsEach>
                      <LocationOnIcon sx={{ color: "#55ad88" }} />
                      <FooterCompanyFullAddress>
                        SCF-15, First Floor, opposite Bus Stand Road, Sarojini
                        Colony, PART-1, Model Town, Yamuna Nagar, Haryana 135001
                      </FooterCompanyFullAddress>
                    </ContactBoxDetailsEach>
                  </ContactBoxDetails>
                </FooterContactBox>
              </LinksAndContentBox>
              <SocialMediaBox>
                <SocialMediaFab>
                  <LinkedInIcon />
                </SocialMediaFab>
                <SocialMediaFab>
                  <InstagramIcon />
                </SocialMediaFab>
              </SocialMediaBox>
            </FooterContentBox>
          </FooterContentWrapper>
        </FooterTextWrapper>
      </FooterWrapper>
    </>
  );
};
export default FooterComp;
