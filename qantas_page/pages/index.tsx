import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import hotelStyles from '../styles/hotels.module.css';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import hotelResults from '../data';
import HotelListing from './hotelListing';
import { HotelListObj } from '../types/hotel-listing-types';
import MenuItem from '@mui/material/MenuItem';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});
const decreaseSort = (a:HotelListObj, b:HotelListObj) => a.offer.displayPrice.amount > b.offer.displayPrice.amount ? -1 : 1;
const increaseSort = (a:HotelListObj, b:HotelListObj) => a.offer.displayPrice.amount > b.offer.displayPrice.amount ? 1 : -1;

export default function ComplexGrid() {
  const [data, setData] = useState<HotelListObj[]>(hotelResults);
  const [sortType, setSortType] = useState('');
  const numResults = hotelResults.length;

  
  useEffect(() => {
    const sortArray = (type:string) => {
      const types:any = {
        decreasing: decreaseSort,
        increasing: increaseSort,
      }
      const sortFunc = types[type];
      const sortedArray: HotelListObj[] = [...hotelResults].sort(sortFunc);
      setData(sortedArray);
    }
    sortArray(sortType);
  }, [sortType]);


  return (
    <Paper
      sx={{
        p: 2,
        margin: 5,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
      
    > <div className={hotelStyles.results}>{numResults} hotels in Sydney</div>
      <FormControl className={hotelStyles.sortDrop}>
      <FormHelperText>Sort By</FormHelperText>
        <Select
          inputProps={{ 'aria-label': 'Without label' }}
          onChange = {(e:SelectChangeEvent) => setSortType(e.target.value)}
        >
          <MenuItem value={'decreasing'}>Price high-low</MenuItem>
          <MenuItem value={'increasing'}>Price low-high</MenuItem>
        </Select>
      </FormControl>
      <div>
        {data.map((d) =>
          <HotelListing hotelListing={d}/>)}
      </div>
     
      
    </Paper>
    
  );
}
