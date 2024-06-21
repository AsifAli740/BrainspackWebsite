import {
  GetKnowUsContainer,
  GetKnowUsWrapper,
  GetKnowUsImageBox,
  GetKnowUsContentBox,
  GetKnowUsTitle,
  GetKnowUsTitle2,
  Offerings,
  Features,
} from "./GetKnowUsStyled";
import getToKnowUs from "../../Assets/images/resources/get-to-know-img-1.jpg";
import getToKnowUsSmall from "../../Assets/images/resources/get-to-know-small-img.jpg";
import twoDots from "../../Assets/images/shapes/section-title-shape.png";
import { Box, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
const GetKnowUs = () => {
  return (
    <>
      <GetKnowUsContainer>
        <GetKnowUsWrapper>
          <GetKnowUsImageBox sx={{ position: "relative" }}>
            <Box
              component={"img"}
              height={"568px"}
              width={"85%"}
              src={getToKnowUs}
            />
            <Box
              component={"img"}
              height={"278px"}
              width={"60%"}
              src={getToKnowUsSmall}
              sx={{ position: "absolute", right: "0px", bottom: "40px" }}
            />
          </GetKnowUsImageBox>
          <GetKnowUsContentBox>
            <Box display={"flex"} alignItems={"center"} gap={"10px"}>
              <Box component={"img"} src={twoDots} />
              <GetKnowUsTitle>Get to know us</GetKnowUsTitle>
            </Box>
            <Box>
              <GetKnowUsTitle2>
                Elevating Your Digital Presence with Seamless Solutions
              </GetKnowUsTitle2>
            </Box>
            <Box>
              <Offerings>
                "Our offerings, spanning Web Development, Mobile App
                Development, Web Design, and Digital Marketing, redefine
                excellence.""
              </Offerings>
            </Box>
            <Box>
              <Box display={"flex"}>
                <CheckCircleOutlineIcon />
                <Features>
                  Experience the epitome of digital sophistication with
                  Brainspack.
                </Features>
              </Box>
              <Box display={"flex"}>
                <CheckCircleOutlineIcon />
                <Features>
                  Effortlessly enhance your online footprint with Brainspack's
                  exclusive and highly effective solutions.
                </Features>
              </Box>
            </Box>
          </GetKnowUsContentBox>
        </GetKnowUsWrapper>
      </GetKnowUsContainer>
    </>
  );
};
export default GetKnowUs;
