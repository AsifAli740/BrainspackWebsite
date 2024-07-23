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
  DiscoverMoreBtn,
  FooterLogoBox,
  ContactBoxDetailsEachBox,
} from "./homePageStyled";
import { Box } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import MessageIcon from "@mui/icons-material/Message";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ScrollAnimation from "react-animate-on-scroll";
import footerImg1 from "../Assets/images/shapes/site-footer-shape-1.png";
import footerImg2 from "../Assets/images/shapes/site-footer-shape-2.png";
import { Link } from "react-router-dom";
import DiscoverMore from "../ReUseComponents/DiscoverMore";
const FooterComp = () => {
  return (
    <>
      <FooterWrapper>
        <LeftFooterImageBox className="leftFooterImageBox">
          <ScrollAnimation animateIn="slideInLeft" animateOnce={true}>
            <Box
              component={"img"}
              height={"388px"}
              width={"100%"}
              src={footerImg1}
            />
          </ScrollAnimation>
        </LeftFooterImageBox>
        <RightFooterImageBox className="rightFooterImageBox">
          <ScrollAnimation animateIn="slideInRight" animateOnce={true}>
            <Box
              component={"img"}
              height={"600px"}
              width={"100%"}
              src={footerImg2}
            />
          </ScrollAnimation>
        </RightFooterImageBox>
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
                  {" "}
                  <CustomBtn className="discover-button ">
                    <Box className="discover-overlay-footer-btn"></Box>
                    <DiscoverMoreBtn className="typo green-text">
                      Discover more
                    </DiscoverMoreBtn>
                  </CustomBtn>
                </Link>{" "}
              </Box>
            </ChallengesBox>
          </ChallengesWrapper>
          <FooterContentBox>
            <FooterLogoBox>
              <FooterLogo></FooterLogo>
            </FooterLogoBox>
            <FooterLinksBox>
              <LinksTextBox>
                <FooterLinks>Links</FooterLinks>
              </LinksTextBox>
              <LinksTextBoxDetails>
                <Link className="link-style" to={"/about"}>
                  <FooterAddress>About us</FooterAddress>
                </Link>

                <FooterAddress>Meet our team</FooterAddress>
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
                <ContactBoxDetailsEachBox>
                  <LocationOnIcon sx={{ color: "#55ad88" }} />
                  <FooterCompanyFullAddress>
                    SCF-15, First Floor, opposite Bus Stand Road, Sarojini
                    Colony, PART-1, Model Town, Yamuna Nagar, Haryana 135001
                  </FooterCompanyFullAddress>
                </ContactBoxDetailsEachBox>
              </ContactBoxDetails>
            </FooterContactBox>
            <SocialMediaBox>
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
            </SocialMediaBox>
          </FooterContentBox>
        </FooterTextWrapper>
      </FooterWrapper>
    </>
  );
};
export default FooterComp;
