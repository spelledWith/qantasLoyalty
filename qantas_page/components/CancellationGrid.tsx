import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import hotelStyles from '../styles/hotels.module.css';
import * as HTypes from '../types/hotel-listing-types';

const CancellationGrid = ({hotelListing}: {hotelListing: HTypes.HotelListObj}) => {
    const i = hotelListing;

    return(
      <Grid item>
      <Typography sx={{ cursor: 'pointer' }} variant="body2" component="div">
        <div className={hotelStyles.freeCancel}>
            {i.offer.cancellationOption.cancellationType === "FREE_CANCELLATION" ? "Free cancellation": "" }
        </div>
      </Typography>
    </Grid>   
    )
};

export default CancellationGrid;