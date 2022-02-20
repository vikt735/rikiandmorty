import React from 'react';
import {Typography} from '@mui/material'
import {useStyleHeader} from './style';
import {Link} from 'react-router-dom';
interface LinksProps {
  link: string, 
  linkHref: string
}

const AppBarLink: React.FC<LinksProps> = ({link, linkHref}):JSX.Element => {
  const classes = useStyleHeader();
  return (
    <Typography variant="h6">
      <Link to={linkHref} className={classes.link_text}>{link}</Link>
    </Typography>
  );
}

export default AppBarLink;