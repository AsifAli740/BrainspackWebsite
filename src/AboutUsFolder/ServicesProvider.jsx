import { Box } from "@mui/material";
import {
  ServiceProvideBox,
  ServiceProvideContent,
  ServiceProvideContentBox,
  ServiceProvideImageBox,
  ServiceProvideImageBox1,
  ServiceProvideImageBox2,
  ServiceProvideWrapper,
  ShapingFutureText,
} from "./aboutUsStyled";
import {
  GetKnowUsTitle,
  GetKnowUsTitle2,
} from "../HomePageFolder/GetKnowUs/GetKnowUsStyled";
import ScrollAnimation from "react-animate-on-scroll";
import twoDots from "../Assets/images/shapes/section-title-shape.png";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import serviceProvide from "../Assets/images/resources/notech-more-img-1.jpg";

const ServicesProvider = () => {
  return (
    <>
      <ServiceProvideWrapper>
        <ServiceProvideBox>
          <ServiceProvideContentBox>
            <Box display={"flex"} alignItems={"center"} gap={"10px"}>
              <Box component={"img"} src={twoDots} />
              <GetKnowUsTitle>Stay protected</GetKnowUsTitle>
            </Box>
            <Box>
              <GetKnowUsTitle2>Brainspack provide IT Services</GetKnowUsTitle2>
            </Box>
            <Box>
              <ShapingFutureText>
                <span className="quote1">
                  {" "}
                  <FormatQuoteIcon />{" "}
                </span>
                Shaping The Future of Business With Web.{" "}
                <span className="quote">
                  <FormatQuoteIcon />
                </span>
              </ShapingFutureText>
            </Box>
            <Box>
              <ServiceProvideContent>
                Brainspack excels in delivering cutting-edge IT services,
                offering personalized solutions precisely aligned with unique
                business requirements. With a commitment to driving success in
                the digital realm, we ensure businesses thrive through advanced,
                custom approaches that enhance their digital presence and
                performance.
              </ServiceProvideContent>
            </Box>
          </ServiceProvideContentBox>
          <ServiceProvideImageBox className="aboutUsAnimation">
            <ServiceProvideImageBox1></ServiceProvideImageBox1>
            <ServiceProvideImageBox2></ServiceProvideImageBox2>
          </ServiceProvideImageBox>
        </ServiceProvideBox>
      </ServiceProvideWrapper>
    </>
  );
};
export default ServicesProvider;
