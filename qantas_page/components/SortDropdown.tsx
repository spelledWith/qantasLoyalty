import { FormControl, FormHelperText, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Dispatch, SetStateAction } from "react";
import hotelStyles from '../styles/hotels.module.css';

const SortDropdown = (setSortType: Dispatch<SetStateAction<string>>) => {
    return(
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
    )
};

export default SortDropdown;
