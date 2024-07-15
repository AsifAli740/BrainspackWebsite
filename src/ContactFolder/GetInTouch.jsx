import {
  ContactUsDetailsBox,
  ContactUsIconsBox,
  ContactUsIconsBoxEach,
  ContactUsText,
  ContactUsTextAddress,
  ContactUsTextEmail,
  GetInTouchBox,
  GetInTouchContainer,
  GetInTouchContentBox,
  GetInTouchContentContainer,
  GetInTouchImageBox,
  TrialBox,
  TwoDotsBox,
} from "./contactStyled";
import twoDots from "../Assets/images/shapes/section-title-shape.png";
import { Box, Typography } from "@mui/material";
import {
  GetKnowUsTitle,
  GetKnowUsTitle2,
  Offerings,
} from "../HomePageFolder/GetKnowUs/GetKnowUsStyled";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
const GetInTouch = () => {
  return (
    <>
      <GetInTouchContainer>
        <GetInTouchBox>
          <GetInTouchImageBox></GetInTouchImageBox>
          <GetInTouchContentBox>
            <GetInTouchContentContainer>
              <Box>
                <TwoDotsBox>
                  <Box component={"img"} src={twoDots} />
                  <GetKnowUsTitle>Contact with us</GetKnowUsTitle>
                </TwoDotsBox>
                <Box>
                  <GetKnowUsTitle2>Get in touch with us</GetKnowUsTitle2>
                </Box>
              </Box>
              <Box>
                <Offerings>Ignite Your Digital Journey Today.</Offerings>
              </Box>
              <ContactUsIconsBoxEach>
                <ContactUsIconsBox className="iconWrapper">
                  <TrialBox >
                    <PhoneInTalkIcon
                      className="change-icon-color"
                      sx={{ height: "25px", width: "25px", color: "#55ad88" }}
                    />
                  </TrialBox>
                </ContactUsIconsBox>
                <ContactUsDetailsBox>
                  <Box>
                    <ContactUsText>Have any question?</ContactUsText>
                  </Box>
                  <Box>
                    <ContactUsTextEmail>Free +91-9168117671</ContactUsTextEmail>
                  </Box>
                </ContactUsDetailsBox>
              </ContactUsIconsBoxEach>

              <ContactUsIconsBoxEach>
                <ContactUsIconsBox className="iconWrapper">
                  <Box>
                    <EmailIcon
                      className="change-icon-color"
                      sx={{ height: "25px", width: "25px", color: "#55ad88" }}
                    />
                  </Box>
                </ContactUsIconsBox>
                <ContactUsDetailsBox>
                  <Box>
                    <ContactUsText>Write email</ContactUsText>
                  </Box>
                  <Box>
                    <ContactUsTextEmail>info@brainspack.com</ContactUsTextEmail>
                  </Box>
                </ContactUsDetailsBox>
              </ContactUsIconsBoxEach>
              <ContactUsIconsBoxEach>
                <ContactUsIconsBox className="iconWrapper">
                  <Box>
                    <PlaceIcon
                    className="change-icon-color"
                      sx={{ height: "25px", width: "100px", color: "#55ad88" }}
                    />
                  </Box>
                </ContactUsIconsBox>
                <ContactUsDetailsBox>
                  <Box>
                    <ContactUsText>Visit anytime</ContactUsText>
                  </Box>
                  <Box display={"flex"} gap={"20px"}>
                    <ContactUsTextAddress>
                      SCF-15, First Floor, opposite Bus Stand Road, Sarojini
                      Colony, PART-1, Model Town, Yamuna Nagar, Haryana 135001
                    </ContactUsTextAddress>
                  </Box>
                </ContactUsDetailsBox>
              </ContactUsIconsBoxEach>
            </GetInTouchContentContainer>
          </GetInTouchContentBox>
        </GetInTouchBox>
      </GetInTouchContainer>
    </>
  );
};
export default GetInTouch;
