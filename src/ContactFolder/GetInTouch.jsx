import {
  ContactUsDetailsBox,
  ContactUsIconsBox,
  ContactUsIconsBoxEach,
  GetInTouchBox,
  GetInTouchContainer,
  GetInTouchContentBox,
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
              <ContactUsIconsBox>
                <TrialBox>
                  <PhoneInTalkIcon
                    className="phoneIcon"
                    sx={{ height: "25px", width: "25px", color: "#55ad88" }}
                  />
                </TrialBox>
              </ContactUsIconsBox>
              <ContactUsDetailsBox>
                <Box>
                  <Typography>Have any question?</Typography>
                </Box>
                <Box>
                  <Typography>Free +91-9168117671</Typography>
                </Box>
              </ContactUsDetailsBox>
            </ContactUsIconsBoxEach>
            <ContactUsIconsBoxEach>
              <ContactUsIconsBox>
                <Box>
                  <EmailIcon
                    sx={{ height: "25px", width: "25px", color: "#55ad88" }}
                  />
                </Box>
              </ContactUsIconsBox>
              <ContactUsDetailsBox>
                <Box>
                  <Typography>Have any question?</Typography>
                </Box>
                <Box>
                  <Typography>Free +91-9168117671</Typography>
                </Box>
              </ContactUsDetailsBox>
            </ContactUsIconsBoxEach>
            <ContactUsIconsBoxEach>
              <ContactUsIconsBox>
                <Box>
                  <PlaceIcon
                    sx={{ height: "25px", width: "25px", color: "#55ad88" }}
                  />
                </Box>
              </ContactUsIconsBox>
              <ContactUsDetailsBox>
                <Box>
                  <Typography>Have any question?</Typography>
                </Box>
                <Box>
                  <Typography>Free +91-9168117671</Typography>
                </Box>
              </ContactUsDetailsBox>
            </ContactUsIconsBoxEach>
          </GetInTouchContentBox>
        </GetInTouchBox>
      </GetInTouchContainer>
    </>
  );
};
export default GetInTouch;
