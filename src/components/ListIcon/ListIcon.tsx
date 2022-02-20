import React from 'react';
import { Grid, Avatar, ListItemText, ListItemAvatar} from "@mui/material";

interface GridProps {
  dat: any,
  text: string,
}

const ListIcon: React.FC<GridProps> = ({dat, text, children }) => {
  return (
    <>
      <Grid container sx={{display: 'flex'}}>
          <Grid item xs={6}  md={5} lg={4} sx={{display: 'flex', alignItems: 'center'}}>
              <ListItemAvatar>
                <Avatar >
                  {children}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={text} />
          </Grid>
          <Grid item xs={6} md={7} lg={8} sx={{display: 'flex', alignItems: 'center'}}>
            <ListItemText primary={dat}/>
          </Grid> 
      </Grid>
    </>
  );
};

export default ListIcon;

