import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#2e7d32',
    },
  },
});
export const useStyleHeader = makeStyles({
  link_text: {
    color: '#135040',
    textDecoration: 'none'
  }
});
