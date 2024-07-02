import {
  GetKnowUsContainer,
  GetKnowUsWrapper,
  GetKnowUsImageBox,
  GetKnowUsContentBox,
  GetKnowUsTitle,
  GetKnowUsTitle2,
  Offerings,
  Features,
  Problems,
} from "./GetKnowUsStyled";
import getToKnowUs from "../../Assets/images/resources/get-to-know-img-1.jpg";
import getToKnowUsSmall from "../../Assets/images/resources/get-to-know-small-img.jpg";
import twoDots from "../../Assets/images/shapes/section-title-shape.png";
import { Box, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import "./App.css";
import "../../ExternalCss/GetKnowUs.css";
import { CustomBtn } from "../../ReUseComponents/NavbarStyled";
const GetKnowUs = () => {
  return (
    <>
      <GetKnowUsContainer>
        <GetKnowUsWrapper>
          <GetKnowUsImageBox>
            <Box
              component={"img"}
              height={"600px"}
              width={"85%"}
              src={getToKnowUs}
            />
            <Box
              component={"img"}
              height={"300px"}
              width={"60%"}
              src={getToKnowUsSmall}
              sx={{ position: "absolute", right: "0px", bottom: "0px" }}
            />
          </GetKnowUsImageBox>
          <GetKnowUsContentBox>
            <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
              <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                <Box component={"img"} src={twoDots} />
                <GetKnowUsTitle>Get to know us</GetKnowUsTitle>
              </Box>
              <Box>
                <GetKnowUsTitle2>
                  Elevating Your Digital Presence with Seamless Solutions
                </GetKnowUsTitle2>
              </Box>
            </Box>
            <Box>
              <Offerings>
                "Our offerings, spanning Web Development, Mobile App
                Development, Web Design, and Digital Marketing, redefine
                excellence.""
              </Offerings>
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
              <Box display={"flex"} gap={"15px"}>
                <Box display={"flex"} alignItems={"center"}>
                  <CheckCircleOutlineIcon
                    sx={{ color: "#55ad88", fontSize: "20px" }}
                  />
                </Box>

                <Features>
                  Experience the epitome of digital sophistication with
                  Brainspack.
                </Features>
              </Box>
              <Box display={"flex"} gap={"15px"}>
                <Box display={"flex"} alignItems={"center"}>
                  <CheckCircleOutlineIcon
                    sx={{ color: "#55ad88", fontSize: "20px" }}
                  />
                </Box>
                <Features>
                  Effortlessly enhance your online footprint with Brainspack's
                  exclusive and highly effective solutions.
                </Features>
              </Box>
            </Box>
            <Box>
              <Box>
                <span class="iconanalytics-data"></span>
              </Box>
              <Box>
                <Problems>
                  Stop worrying, we take care of your technology problems.
                </Problems>
              </Box>
            </Box>
            <Box>
              <CustomBtn variant="contained">Discover more</CustomBtn>
            </Box>
          </GetKnowUsContentBox>
        </GetKnowUsWrapper>
      </GetKnowUsContainer>
    </>
  );
};
export default GetKnowUs;
