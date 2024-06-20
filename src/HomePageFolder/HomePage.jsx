import React from 'react';
import { MainContainer, Navbar, NavbarTopLeft, NavbarTopRight } from './homePageStyled';

function HomePage() {
    return (
        <MainContainer>
            <Navbar>
                <NavbarTopLeft></NavbarTopLeft>
                <NavbarTopRight></NavbarTopRight>
            </Navbar>
        </MainContainer>
    );
}

export default HomePage;