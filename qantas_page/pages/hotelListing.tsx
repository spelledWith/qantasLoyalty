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
        <Grid item xs={3}>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={i.property.previewImage.url} />
            <h3 className={hotelStyles.imageover}>{i.offer.promotion.title}</h3>
          </ButtonBase>
        </Grid>
        <Grid item xs={true} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                <div className={hotelStyles.name}>{i.property.title} 
                  <Rating name="half-rating" defaultValue={i.property.rating.ratingValue} precision={0.5} />
                </div>
              </Typography>
              
              <Typography  variant="body2" gutterBottom component="div">
                <div className={hotelStyles.address}>{i.property.address.join(', ')}</div>
              </Typography>
              <Typography variant="body2" color="text.secondary" component="div">
                <div className={hotelStyles.roomType}>{i.offer.name}</div>
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2" component="div">
                <div className={hotelStyles.freeCancel}>
                    {i.offer.cancellationOption.cancellationType === "FREE_CANCELLATION" ? "Free cancellation": "" }
                </div>
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              <div className={hotelStyles.totalNights}>1 night total ({i.offer.displayPrice.currency})</div>
              <div className={hotelStyles.price}>${i.offer.displayPrice.amount}</div>
              <div className={hotelStyles.deal}>{i.offer.savings ? `Save $${i.offer.savings.amount}~`: ''}</div>
            </Typography>
          </Grid>
        </Grid>
      </Grid> 
         
    )
};

export default HotelListing;
