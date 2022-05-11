import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import hotelStyles from '../styles/hotels.module.css';
import hotelResults from '../data';
import HotelListing from '../components/HotelListing';
import { HotelListObj } from '../types/hotel-listing-types';
import SortDropdown from '../components/SortDropdown';


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
      <SortDropdown setSortType={setSortType}/>
      <div>
        {data.map((d) =>
          <HotelListing key={d.id} hotelListing={d}/>)}
      </div>
    </Paper>
    
  );
}
