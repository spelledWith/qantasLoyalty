import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import hotelStyles from '../styles/hotels.module.css';
import * as HTypes from '../types/hotel-listing-types';
import { styled } from '@mui/material/styles';
import { CenterFocusStrong } from '@mui/icons-material';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const ImageGrid = ({property, promotionTitle}: {property: HTypes.PropertyObj, promotionTitle: string}) => {
 return(
      <Grid sx={{width: 1, alignContent: "center" }} item xs={2}>
      <ButtonBase>
        <Img sx={{width: 1, alignContent: "center"}} alt={property.previewImage.caption} src={property.previewImage.url} />
        <h3 className={hotelStyles.imageover}>{promotionTitle}</h3>
      </ButtonBase>
    </Grid>
         
    )
};

export default ImageGrid;