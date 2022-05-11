import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import hotelStyles from '../styles/hotels.module.css';
import * as HTypes from '../types/hotel-listing-types';

const PriceGrid = ({offer}: {offer: HTypes.OfferObj}) => {
 return(
          <Grid item>
            <Typography variant="subtitle1" component="div">
              <div className={hotelStyles.totalNights}>1 night total ({offer.displayPrice.currency})</div>
              <div className={hotelStyles.price}>${offer.displayPrice.amount}</div>
              <div data-testid="savings" className={hotelStyles.deal}>{offer.savings ? `Save $${offer.savings.amount}~`: ''}</div>
            </Typography>
          </Grid>
         
    )
};

export default PriceGrid;