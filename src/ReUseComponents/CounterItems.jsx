import React from 'react';
import { CounterContainer, CounterContainerWrapper, CounterIcon, CounterItem, CounterItemBox, CounterItemWrapper, DataCounter, DataCounterPlus, FabIcon, TitleOfCounter } from './counterItemsStyled';
import { counterItemContent } from '../Utils/constant';
import { Box, Fab, Typography } from '@mui/material';

function CounterItems() {
    return (
        <CounterContainerWrapper>
            <CounterContainer>

            <CounterItemWrapper>
                <CounterItemBox>
                    {
                    counterItemContent.map((ele)=>(
                        <CounterItem>
                            <Box>

                            <FabIcon     >
                                <CounterIcon >

                                
                                {ele.icons}
                                </CounterIcon>
                                
                            </FabIcon>
                            </Box>
                            <DataCounter variant='span'>
                                {ele.dataCount}
                            <DataCounterPlus variant='span'>
                                {ele.counterPlus}
                            </DataCounterPlus>
                            </DataCounter>
                            <TitleOfCounter>
                                {ele.counterTitle}
                            </TitleOfCounter>

                    </CounterItem>
                    ))
                    }
                    

                </CounterItemBox>

            </CounterItemWrapper>
            
                </CounterContainer>
        </CounterContainerWrapper>
    );
}

export default CounterItems;