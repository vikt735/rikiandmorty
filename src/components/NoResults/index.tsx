import { Paper, Typography } from '@mui/material';
import useStyleNoResult from './useStyleNoResult';

const NoResults = () => {
  const classes = useStyleNoResult();
  return (
    <Paper >
      <Typography sx={{height: '75vh'}} variant="h4" component="p" className={classes.noResults} >
        No results!
      </Typography>
    </Paper>
  );
};

export default NoResults;
