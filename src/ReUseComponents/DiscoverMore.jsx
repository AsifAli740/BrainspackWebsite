import React from 'react';
import { DiscoverMoreBtn } from '../HomePageFolder/homePageStyled';
import { CustomBtn } from './NavbarStyled';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

function DiscoverMore({path, text}) {
    return (
        <div>
            <Link to={path}>
                  {" "}

                  <CustomBtn className="discover-button "> 
                  <Box className="discover-overlay">
                    </Box>
                    <DiscoverMoreBtn className="typo">

                    {text}
                    </DiscoverMoreBtn>
                    </CustomBtn>
                </Link>
        </div>
    );
}

export default DiscoverMore;