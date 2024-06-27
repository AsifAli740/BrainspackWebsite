import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from './items';
import { teamCarouselImages } from '../Utils/constant';

export default function Example()
{


    return (
        <Carousel>
            {
                teamCarouselImages.map( (item) => <Item key={item.id} item={item} /> )
            }
        </Carousel>
    )
}