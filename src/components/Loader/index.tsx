import { CircularProgress} from '@mui/material';
import useStyleLoader from './useStyleLoader';

const Loader = () => {
  const classes = useStyleLoader();

  return (
    <div className={classes.loader}>
      <CircularProgress color="success" size="50px"/>
    </div>
  );
};

export default Loader;
