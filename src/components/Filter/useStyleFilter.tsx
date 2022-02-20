import { makeStyles } from '@mui/styles';

const useStyleFilter = makeStyles({
  filter: {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    
    position: "sticky",
    top: "30px",
    "@media screen and (min-width: 600px)": {
      padding: '0 25px 0 0',
    }
  },
  filter__buttons: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
  },
  formControl: {
    minWidth: '25ch',
    flex: '1 0',
  },
  submit: {
    minWidth: '20ch',
  },
});
export default useStyleFilter;