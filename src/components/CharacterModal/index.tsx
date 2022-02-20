import { useParams } from "react-router-dom";
import useReactQuery from 'hooks/useReactQuery';
import { Character } from 'types';
import { Grid, Typography, CardMedia,List, ListItem, ListItemText} from "@mui/material";
import useStyleCharacterModal from "./useStyleCharacterModal";
import FaceIcon from '@mui/icons-material/Face';
import LanguageIcon  from '@mui/icons-material/Language';
import SignalWifiStatusbarNullSharpIcon from '@mui/icons-material/SignalWifiStatusbarNullSharp';
import ListIcon from '../ListIcon/ListIcon';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AdbIcon from '@mui/icons-material/Adb';
import MergeTypeIcon from '@mui/icons-material/MergeType';
import { Avatar } from '@mui/material';
import TheatersIcon from '@mui/icons-material/Theaters';
const CharacterModal = () => {
  const {id} = useParams<{ id: any }>();
  const { data } = useReactQuery<Character>('character', id);
  const classes = useStyleCharacterModal();
  return (
    <>
      <Grid container>
          <Grid item xs={12} sm={5}  md={5} lg={5} className={classes.block_image}>
            <CardMedia
              image={data?.image}
              className={classes.card_image}
            />
          </Grid>
          <Grid item xs={12} sm={7}  md={7} lg={7}>
            <Typography
                variant="h3"
                component="h3"
                className={classes.title}
              >
                {data?.name}
              </Typography>
            <List sx={{ width: '100%'}}>
              <ListItem>
                <ListIcon text={'Gender:'} dat={data?.gender}>
                  <FaceIcon />
                </ListIcon>
              </ListItem>
              <ListItem>
                <ListIcon text={'Status:'} dat={data?.status}>
                  <SignalWifiStatusbarNullSharpIcon />
                </ListIcon>
              </ListItem>
              <ListItem>
                <ListIcon text={'Species:'} dat={data?.species}>
                  <AdbIcon/>
                </ListIcon>
              </ListItem>
              <ListItem>
                <ListIcon text={'Type:'} dat={data?.type ? data?.type : 'none'}>
                  <MergeTypeIcon />
                </ListIcon>
              </ListItem>
              <ListItem>
                <ListIcon text={'Origin:'} dat={data?.origin.name}>
                  <LanguageIcon />
                </ListIcon>
              </ListItem>
              <ListItem>
                <ListIcon text={'Location:'} dat={data?.location.name}>
                  <AddLocationAltIcon />
                </ListIcon>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sx={{mt: 3, display: 'flex'}}>
              <Avatar sx={{ml: 2}}>
                <TheatersIcon />   
              </Avatar>
              <ListItemText primary='Episode:' sx={{mr: 3, ml: 2}}/>
          </Grid>
          <Grid item xs={12}>
            <List className={classes.episode}>
              {data?.episode.map((el) => (
                <ListItem key={el} sx={{ width: 0, mr: 2}}>
                    <Avatar>{`${el.replace(/.*\//, '')}`}</Avatar>
                </ListItem>
              ))}
            </List>
          </Grid>
      </Grid>

    </>
  );
};

export default CharacterModal;
