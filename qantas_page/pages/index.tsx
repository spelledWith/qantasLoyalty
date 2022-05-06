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

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ComplexGrid() {
  return (
    <Paper
      sx={{
        p: 2,
        margin: 5,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Stack
        direction="column"
        divider={<Divider orientation="horizontal" flexItem />}
        spacing={5}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt="complex" src="https://unsplash.it/145/125/?random" />
              <h3 className={hotelStyles.imageover}>Exclusive Deal!</h3>
            </ButtonBase>
          </Grid>
          <Grid item xs={true} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  <div className={hotelStyles.name}>Primus 
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                  </div>
                </Typography>
                
                <Typography  variant="body2" gutterBottom component="div">
                  <div className={hotelStyles.address}>address blah blah</div>
                </Typography>
                <Typography variant="body2" color="text.secondary" component="div">
                  <div className={hotelStyles.roomType}>Deluxe Balcony Room</div>
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: 'pointer' }} variant="body2" component="div">
                  <div className={hotelStyles.freeCancel}>Free Cancellation</div>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                <div className={hotelStyles.totalNights}>1 night total</div>
                <div className={hotelStyles.price}>$329</div>
                <div className={hotelStyles.deal}>Save $30~</div>
              </Typography>
            </Grid>
          </Grid>
        </Grid>         
      </Stack>
      
    </Paper>
    
  );
}
