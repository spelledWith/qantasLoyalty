import * as React from 'react';

import StarHalfIcon from '@mui/icons-material/StarHalf';
import widgetStyles from '../styles/star-widget.module.css';
import StarRateIcon from '@mui/icons-material/StarRate';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ContrastIcon from '@mui/icons-material/Contrast';

const FULL_STARS = 5;
/**
 * StarWidget subcomponent 
 * @param num number of icons to return
 * @param type self(circle)/ star shaped icon
 * @param fill  empty/half/full fill for the icon
 * @returns array of size num of icons matching requested input type/fill
 */
const stars = (
    num: number,
    type: ('self' | 'star'),
    fill: ('full' | 'empty' | 'half')
) => {
    const icon= (key: number, type:('self' | 'star'), fill:('full' | 'empty' | 'half')) => {
        const map = {
            self: {
                full: <CircleIcon key={`full-circle-${key}`} sx={{ width: 15, height: 15 }} />,
                empty: <CircleOutlinedIcon key={`empty-circle-${key}`} sx={{ width: 15, height: 15 }} />,
                half: <ContrastIcon key={`half-circle-${key}`} sx={{ width: 15, height: 15 }} />,
            },
            star: {
                full: <StarRateIcon key={`full-star-${key}`} sx={{ width: 20, height: 20 }} />,
                empty: <StarOutlineIcon key={`empty-star-${key}`}sx={{ width: 20, height: 20 }} />,
                half: <StarHalfIcon key={`half-star-${key}`} sx={{ width: 20, height: 20 }} />,
            }
        }
        return map[type][fill];
    }
    let starR = Array(num).fill(<CircleIcon />); // fill with dummy icons to get array skeleton
    starR = starR.map((s, i) => icon(i, type, fill)); // replace with mapped icon

    return starR;
};
/**
 * 
 * @props 
 * @rating = score out of 5, 
 * @type: self returns circles, star returns stars  
 * @returns rating rounded down (2.3->2, 2.7->2.5) in circles/stars
 */
const StarWidget = ({ rating, type }: { rating: number, type: ('self' | 'star') }) => {

    const roundedRating = Math.floor(rating);
    const numHalfStars = rating - roundedRating >= 0.5 ? 1 : 0;
    const numEmptyStars = FULL_STARS - roundedRating - numHalfStars;

    const fullStars = stars(roundedRating, type, 'full');
    const halfStars = stars(numHalfStars, type, 'half');
    const emptyStars = stars(numEmptyStars, type, 'empty');

    const starR = [
        ...fullStars,
        ...halfStars,
        ...emptyStars,
    ];

    return (
        <span className={widgetStyles.star}>
            {starR}
        </span>
    )
};

export default StarWidget;
