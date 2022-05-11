import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import hotelStyles from '../styles/hotels.module.css';
import hotelResults from '../data';
import HotelListing from '../components/HotelListing';
import { HotelListObj } from '../types/hotel-listing-types';
import Grid from '@mui/material/Grid';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormControl, FormHelperText, MenuItem } from "@mui/material";

import logo from '../public/logo.jpg';


const decreaseSort = (a:HotelListObj, b:HotelListObj) => a.offer.displayPrice.amount > b.offer.displayPrice.amount ? -1 : 1;
const increaseSort = (a:HotelListObj, b:HotelListObj) => a.offer.displayPrice.amount > b.offer.displayPrice.amount ? 1 : -1;

export default function HotelList() {
  const [data, setData] = useState<HotelListObj[]>([]);
  const [sortType, setSortType] = useState('');
  const numResults = data.length;

  
  useEffect(() => {
    // change the order of the hotel listings according to the selected sort option
    const sortArray = (type:string) => {
      const types:any = {
        decreasing: decreaseSort,
        increasing: increaseSort,
      }
      const sortFunc = types[type];
      const sortedArray: HotelListObj[] = [...data].sort(sortFunc);
      setData(sortedArray);
    }
    sortArray(sortType);
  }, [sortType]);

  useEffect(() => {
    const getData = () => {
      const data = hotelResults; // loading from static file in interests of time
      // but fetching from actual API call would go here
      setData(data);
    }
    getData();
  }, []);


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
    <Grid container direction="row" >
      <Grid item container direction="column" spacing={2}>
        <Grid item>
          <img src={logo.src} alt="Qantas Logo"/>
        </Grid>
        <Grid item >
          <div className={hotelStyles.results}>{numResults} hotels in Sydney</div>
        </Grid>
      </Grid>
      <Grid  xs={true} item>
      <FormControl className={hotelStyles.sortDrop}>
        <FormHelperText>Sort By</FormHelperText>
          <Select
            inputProps={{ 'aria-label': 'Without label',"data-testid": "sortBy" }}
            onChange = {(e:SelectChangeEvent) => setSortType(e.target.value)}
            title="Sort By"
            value=""
          >
            <MenuItem value={'decreasing'}>Price high-low</MenuItem>
            <MenuItem value={'increasing'}>Price low-high</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
       
      <div data-testid="results">

        {data.map((d, i) =>
          <HotelListing key={`hotel-${i}`} hotelListing={d}/>)}
      </div>
    </Paper>
    
  );
}
