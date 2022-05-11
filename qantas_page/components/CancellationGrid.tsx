import Grid from '@mui/material/Grid';
import hotelStyles from '../styles/hotels.module.css';

const CancellationGrid = ({cancelType}: {cancelType:string}) => {

    return(
      <Grid item>
        <div data-testid="cancelDiv" className={hotelStyles.freeCancel}>
            {cancelType === "FREE_CANCELLATION" ? "Free cancellation": "" }
        </div>
      </Grid>   
    )
};

export default CancellationGrid;