import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import hotelStyles from '../styles/hotels.module.css';
import * as HTypes from '../types/hotel-listing-types';
import StarWidget from './StarWidget';

const PropertyGrid = ({property, offerName}: {property: HTypes.PropertyObj, offerName: string}) => {
    return(
        <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                <div className={hotelStyles.name}>
                    {property.title} 
                    <StarWidget key={`${property.propertyId}-rating`} rating={property.rating.ratingValue} type={property.rating.ratingType}/>
                </div>
              </Typography>
              
              <Typography  variant="body2" gutterBottom component="div">
                <div className={hotelStyles.address}>{property.address.join(', ')}</div>
              </Typography>
              <Typography variant="body2" color="text.secondary" component="div">
                <div className={hotelStyles.roomType}>{offerName}</div>
              </Typography>
        </Grid>
         
    )
};

export default PropertyGrid;