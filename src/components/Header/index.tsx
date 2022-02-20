import {AppBar, Toolbar, Avatar} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {darkTheme} from './style';
import AppBarLink from './AppBarLink';
import {Link} from 'react-router-dom';

const Header = ():JSX.Element => {
  return  (
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary">
          <Toolbar sx={{height: "90px"}}>
            <Link to={'/'}><Avatar alt="Profile Picture" src={'avatar/rick.svg'} sx={{width: '60px', height:"60px", mr: 1}} /></Link>
            <AppBarLink link='Riki and Morty API' linkHref={'/'}/>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
  );
}
export default Header;