import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Divider from '@mui/material/Divider';
import hotelStyles from '../styles/hotels.module.css';
import * as HTypes from '../types/hotel-listing-types';

import StarWidget from './StarWidget';
import PriceGrid from './PriceGrid';
import CancellationGrid from './CancellationGrid';
import PropertyGrid from './PropertyGrid';
import ImageGrid from './ImageGrid';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const HotelListing = ({hotelListing}: {hotelListing: HTypes.HotelListObj}) => {
    const i = hotelListing;

    return(
        <Grid container spacing={2}>
            <ImageGrid hotelListing={i}/>
            <Grid item xs={true} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <PropertyGrid hotelListing={i} />
                    <CancellationGrid hotelListing={i} />
                </Grid>
                <PriceGrid hotelListing={i} />
            </Grid>
        </Grid>     
    )
};

export default HotelListing;
