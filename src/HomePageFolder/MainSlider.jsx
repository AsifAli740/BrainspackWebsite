// import React from 'react';
// import { SliderWrapper } from './homePageStyled';
// import "../ExternalCss/swiperMin.css"

// function MainSlider(props) {
//     return (
//         <SliderWrapper>
//         <div
//           class="swiper-container thm-swiper__slider"
//           data-swiper-options='{"slidesPerView": 1, "loop": true,
//                 "effect": "fade",
//                 "pagination": {
//                 "el": "#main-slider-pagination",
//                 "type": "bullets",
//                 "clickable": true
//                 },
//                 "navigation": {
//                 "nextEl": "#main-slider__swiper-button-next",
//                 "prevEl": "#main-slider__swiper-button-prev"
//                 },
//                 "autoplay": {
//                 "delay": 5000
//                 }}'
//         >
//           <div class="swiper-wrapper">
//             <div class="swiper-slide">
//               <div
//                 class="image-layer"
//                 // style="
//                 //   background-image: url(assets/images/backgrounds/main-slider-1-1.jpg);
//                 // "
//               ></div>
//               {/* <!-- /.image-layer --> */}
//               <div class="main-slider__shape-1">
//                 <img
//                   src="assets/images/shapes/main-slider-shape-1.png"
//                   alt=""
//                 />
//               </div>
//               <div class="main-slider__shape-2">
//                 <img
//                   src="assets/images/shapes/main-slider-shape-2.png"
//                   alt=""
//                 />
//               </div>
//               <div class="main-slider__shape-3">
//                 <img
//                   src="assets/images/shapes/main-slider-shape-3.png"
//                   alt=""
//                 />
//               </div>
//               <div class="container">
//                 <div class="row">
//                   <div class="col-xl-12">
//                     <div class="main-slider__content">
//                       {/* <!-- <p>It Software Solution &</p>  -->
//                       <!-- <h2>technology</h2> -->
//                       <!-- <p>Brainspack</p> --> */}
//                       <h2>Brains<span sx={"color: #55ad88"}>p</span>ack</h2>

//                       <div class="main-slider__btn-video-box">
//                         <div class="main-slider__btn-box">
//                           <a href="about.html" class="thm-btn main-slider__btn"
//                             >Discover more</a
//                           >
//                         </div>
//                         {/* <!-- <div class="main-slider__video-link">
//                                                 <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
//                                                     class="video-popup">
//                                                     <div class="main-slider__video-icon">
//                                                         <span class="fa fa-play"></span>
//                                                         <i class="ripple"></i>
//                                                     </div>
//                                                 </a>
//                                                  <h3 class="main-slider__video-text">Watch <br> how it works</h3> 
//                                             </div> --> */}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div class="swiper-slide">
//               <div
//                 class="image-layer"
//                 sx="
//                   {background-image: url(assets/images/backgrounds/main-slider-1-2.jpg)}
//                 "
//               ></div>
//               {/* <!-- /.image-layer --> */}
//               <div class="main-slider__shape-1">
//                 <img
//                   src="assets/images/shapes/main-slider-shape-1.png"
//                   alt=""
//                 />
//               </div>
//               <div class="main-slider__shape-2">
//                 <img
//                   src="assets/images/shapes/main-slider-shape-2.png"
//                   alt=""
//                 />
//               </div>
//               <div class="main-slider__shape-3">
//                 <img
//                   src="assets/images/shapes/main-slider-shape-3.png"
//                   alt=""
//                 />
//               </div>
//               <div class="container">
//                 <div class="row">
//                   <div class="col-xl-12">
//                     <div class="main-slider__content">
//                       {/* <!-- <p>It Software Solution &</p> -->
//                       <!-- <h2>technology</h2> -->
//                       <!-- <p>Brainspack</p> --> */}
//                       <h2>Brains<span sx={"color: #55ad88"}>p</span>ack</h2>
//                       <div class="main-slider__btn-video-box">
//                         <div class="main-slider__btn-box">
//                           <a href="about.html" class="thm-btn main-slider__btn"
//                             >Discover more</a
//                           >
//                         </div>
//                         {/* <!-- <div class="main-slider__video-link">
//                                                 <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
//                                                     class="video-popup">
//                                                     <div class="main-slider__video-icon">
//                                                         <span class="fa fa-play"></span>
//                                                         <i class="ripple"></i>
//                                                     </div>
//                                                 </a>
//                                                 <h3 class="main-slider__video-text">Watch <br> how it works</h3>
//                                             </div> --> */}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div class="swiper-slide">
//               <div
//                 class="image-layer"
//                 sx="
//                  {background-image: url(assets/images/backgrounds/main-slider-1-3.jpg);
// }                "
//               ></div>
//               {/* <!-- /.image-layer --> */}
//               <div class="main-slider__shape-1">
//                 <img
//                   src="assets/images/shapes/main-slider-shape-1.png"
//                   alt=""
//                 />
//               </div>
//               <div class="main-slider__shape-2">
//                 <img
//                   src="assets/images/shapes/main-slider-shape-2.png"
//                   alt=""
//                 />
//               </div>
//               <div class="main-slider__shape-3">
//                 <img
//                   src="assets/images/shapes/main-slider-shape-3.png"
//                   alt=""
//                 />
//               </div>
//               <div class="container">
//                 <div class="row">
//                   <div class="col-xl-12">
//                     <div class="main-slider__content">
//                       {/* <!-- <p>It Software Solution &</p>
//                                         <h2>technology</h2> --> */}
//                       {/* <!-- <p>Brainspack</p> --> */}
//                       <h2>Brains<span sx={"color: #55ad88"}>p</span>ack</h2>
//                       <div class="main-slider__btn-video-box">
//                         <div class="main-slider__btn-box">
//                           <a href="about.html" class="thm-btn main-slider__btn"
//                             >Discover more</a
//                           >
//                         </div>
//                         {/* <!-- <div class="main-slider__video-link">
//                                                 <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
//                                                     class="video-popup">
//                                                     <div class="main-slider__video-icon">
//                                                         <span class="fa fa-play"></span>
//                                                         <i class="ripple"></i>
//                                                     </div>
//                                                 </a>
//                                                 <h3 class="main-slider__video-text">Watch <br> how it works</h3>
//                                             </div> --> */}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* <!-- If we need navigation buttons --> */}
//           <div class="swiper-pagination" id="main-slider-pagination"></div>
//         </div>
//       </SliderWrapper>
//     )
// }

// export default MainSlider;

import React from 'react';
import { BrainspackSliderHeading, BrainspackSliderPPPHeading, CustomBtn, ExploreBrainspackLink, GetSolution, GetSolutionContainer, MainSliderBox, SliderWrapper } from './homePageStyled';
import { Link } from 'react-router-dom';

function MainSlider(props) {
    return (
        <>
        <SliderWrapper>
            <MainSliderBox>
                    <BrainspackSliderHeading >
                            Brains<BrainspackSliderPPPHeading variant='span'>p</BrainspackSliderPPPHeading>ack
                    </BrainspackSliderHeading>
                            <CustomBtn>Discover more</CustomBtn>
            </MainSliderBox>
            
        </SliderWrapper>
        <GetSolutionContainer>
            <GetSolution>

        Stop wasting time and money on technology.
        <ExploreBrainspackLink variant='span'>

        <Link className='exploreLink' to="about.html"> Explore Brainspack  </Link>
        </ExploreBrainspackLink>
        and get best solutions.
            </GetSolution>
        </GetSolutionContainer>
        </>
    );
}

export default MainSlider;