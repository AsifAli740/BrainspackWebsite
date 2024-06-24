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