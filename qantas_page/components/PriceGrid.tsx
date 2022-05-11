import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import hotelStyles from '../styles/hotels.module.css';
import * as HTypes from '../types/hotel-listing-types';

const PriceGrid = ({hotelListing}: {hotelListing: HTypes.HotelListObj}) => {
    const i = hotelListing;

    return(
          <Grid item>
            <Typography variant="subtitle1" component="div">
              <div className={hotelStyles.totalNights}>1 night total ({i.offer.displayPrice.currency})</div>
              <div className={hotelStyles.price}>${i.offer.displayPrice.amount}</div>
              <div className={hotelStyles.deal}>{i.offer.savings ? `Save $${i.offer.savings.amount}~`: ''}</div>
            </Typography>
          </Grid>
         
    )
};

export default PriceGrid;