import * as React from 'react';

import StarHalfIcon from '@mui/icons-material/StarHalf';
import widgetStyles from '../styles/star-widget.module.css';
import StarRateIcon from '@mui/icons-material/StarRate';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ContrastIcon from '@mui/icons-material/Contrast';

const FULL_STARS=5;

const stars = (
    num: number,
    type:('self'|'star'),
    fill:('full'|'empty'|'half')
) => {
    const icon = {
        self: {
            full: <CircleIcon/>,
            empty: <CircleOutlinedIcon/>,
            half: <ContrastIcon/>,
        },
        star: {
            full: <StarRateIcon/>,
            empty: <StarOutlineIcon/>,
            half: <StarHalfIcon/>,
        }
    }
    const starR = Array(num).fill(icon[type][fill]);
    return starR;
};
const StarWidget = ({rating, type}: {rating: number, type:('self'|'star')}) => {
    
    const roundedRating = Math.floor(rating);
    const numHalfStars = rating - roundedRating >= 0.5 ? 1: 0;
    const numEmptyStars = FULL_STARS - roundedRating - numHalfStars;

    const fullStars = stars(roundedRating, type, 'full');
    const halfStars = stars(numHalfStars, type, 'half');
    const emptyStars = stars(numEmptyStars, type, 'empty');

    const starR = [
        ...fullStars,
        ...halfStars,
        ...emptyStars,
    ];

    return(  
         <div className={widgetStyles.star}>
             {starR}
         </div>
    )
};

export default StarWidget;
