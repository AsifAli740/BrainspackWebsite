import {
  BrainspackSliderHeading,
  BrainspackSliderPPPHeading,
  DiscoverMoreBtn,
  MainSliderBox,
  SliderWrapper,
} from "./homePageStyled";
import mainSlider from "../Assets/images/backgrounds/main-slider-1-1.jpg";
import { Box } from "@mui/material";

const MainSlider2 = () => {
  return (
    <>
      <div className="main">
        <div className="shadow">
          <div className="heading">
            Brains<span sx={{ color: "#55ad88" }}>p</span>ack
          </div>
          <div className="btn">Discover more</div>
          <div className="corner"></div>
          <div className="left-corner"></div>
          <div className="lines">
            <div className="line-one"></div>
            <div className="line-two"></div>
            <div className="line-three"></div>
            <div className="line-four"></div>
            <div className="line-five"></div>
            <div className="line-six"></div>
            <div className="line-seven"></div>
            <div className="line-eight"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainSlider2;
