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
import hotelResults from '../data';
import HotelListing from './hotelListing';
import { HotelListObj } from '../types/hotel-listing-types';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ComplexGrid() {
  const listItems = hotelResults.map((d) =>
    <HotelListing hotelListing={d}/>
  )
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
       <div>
      {listItems}
      </div>
     
      
    </Paper>
    
  );
}
