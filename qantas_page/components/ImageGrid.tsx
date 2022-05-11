import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import hotelStyles from '../styles/hotels.module.css';
import * as HTypes from '../types/hotel-listing-types';
import { styled } from '@mui/material/styles';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const ImageGrid = ({hotelListing}: {hotelListing: HTypes.HotelListObj}) => {
    const i = hotelListing;

    return(
      <Grid item xs={3}>
      <ButtonBase sx={{ width: 128, height: 128 }}>
        <Img alt="complex" src={i.property.previewImage.url} />
        <h3 className={hotelStyles.imageover}>{i.offer.promotion.title}</h3>
      </ButtonBase>
    </Grid>
         
    )
};

export default ImageGrid;