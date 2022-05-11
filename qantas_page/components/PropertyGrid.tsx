import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import hotelStyles from '../styles/hotels.module.css';
import * as HTypes from '../types/hotel-listing-types';
import StarWidget from './StarWidget';

const PropertyGrid = ({hotelListing}: {hotelListing: HTypes.HotelListObj}) => {
    const i = hotelListing;

    return(
        <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                <div className={hotelStyles.name}>
                    {i.property.title} 
                    <StarWidget key={`${i.id}-rating`} rating={i.property.rating.ratingValue} type={i.property.rating.ratingType}/>
                </div>
              </Typography>
              
              <Typography  variant="body2" gutterBottom component="div">
                <div className={hotelStyles.address}>{i.property.address.join(', ')}</div>
              </Typography>
              <Typography variant="body2" color="text.secondary" component="div">
                <div className={hotelStyles.roomType}>{i.offer.name}</div>
              </Typography>
        </Grid>
         
    )
};

export default PropertyGrid;