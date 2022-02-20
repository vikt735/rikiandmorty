import { useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  CardMedia,
} from '@mui/material';

import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { QueryParams, ResponseData } from 'types';
import useReactQuery from 'hooks/useReactQuery';
import { buildPaginationString, buildQueryString } from 'utils/queryHelpers';
import Filter from 'components/Filter';
import Loader from 'components/Loader';
import NoResults from 'components/NoResults';
import useStyles from './useStyleCharacters';

const Characters = () => {
  const classes = useStyles();
  const { search } = useLocation();
  const history = useNavigate();
  const query = new URLSearchParams(search);
  const queryParams: QueryParams = {
    page: '',
    name: '',
    species: '',
    type: '',
    status: 'all',
    gender: 'all',
  };
  Object.keys(queryParams).forEach((el) => {
    queryParams[el] = query.get(el) || '';
  });
  const queryString = buildQueryString(queryParams);
  const { isLoading, data } = useReactQuery<ResponseData>('character', queryString);
  const characters = data?.results;

  const handleCardClick = (id: number) => {
    history(`/character/${id}`);
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [search]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {!characters ? (
            <NoResults />
          ) : (
            <>
              <Grid container>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Filter queryParams={queryParams} />
                </Grid>
                <Grid item xs={12} sm={6} md={8}  lg={9} >
                <Grid container spacing={2}>
                {characters.map((el) => (
                  <Grid item xs={12} sm={12} md={6} lg={6} key={el.id}>
                    
                    <Card variant="elevation" className={classes.card} sx={{}} onClick={() => handleCardClick(el.id)}>
                    <Grid container>
                      <Grid item xs={12} sx={{display: "flex", justifyContent: "space-between", mb:1}}>
                      {(() => {
                          if (el.status === "Dead") {
                            return <Typography 
                            variant="h5" 
                            className={classes.color_dead} 
                            component="h2" 
                            sx={{fontSize: '14px'}}>
                            {el.status}
                          </Typography>;
                          } else if (el.status === "Alive") {
                            return <Typography 
                            variant="h5" 
                            className={classes.color_alive} 
                            component="h2" 
                            sx={{fontSize: '14px'}}>
                            {el.status}
                          </Typography>
                          } else {
                            return <Typography 
                            variant="h5" 
                            className={classes.color_unknown} 
                            component="h2" 
                            sx={{fontSize: '14px'}}>
                            {el.status}
                          </Typography>
                          }
                        })()}
                      <Typography 
                      variant="h5" 
                      component="h2" 
                      sx={{fontSize: '14px'}}>
                            {el.gender}
                      </Typography>
                      </Grid>
                      <Grid item xs={6} md={12} lg={5} className={classes.card_block}>
                          <CardMedia
                          className={classes.card__image}
                          image={el.image}
                          title={el.name}

                        />
                      </Grid>
                      <Grid item xs={6} md={12} lg={7}>
                      <CardContent>
                          <Typography variant="h5" component="h2" className={classes.card_text_name} sx={{textShadow: "0 0 15px yellow, 0 0 25px yellow", color: "#000", textAlign: "center"}}>
                            {el.name}
                          </Typography>
                          <Typography variant="h4" component="h2" sx={{fontSize: '15px', mt: 3, textAlign: "center"}}>
                            type: {el.type ? el.type : 'none'}
                          </Typography>
                        </CardContent>
                      </Grid>
                      <Grid item xs={12} sx={{display: "flex", justifyContent: "flex-end"}}>
                        <Typography variant="h5" component="h2" sx={{fontSize: '14px', color: "#FFFF00"}}>
                          {el.species}
                        </Typography>
                      </Grid>
                    </Grid>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              <Pagination
                page={queryParams.page ? +queryParams.page : 1}
                count={data?.info.pages}
                variant="outlined"
                sx={{mt:5}}
                className={classes.pagination}
                renderItem={(item) => (
                  <PaginationItem
                    component={Link}
                    to={buildPaginationString(item.page, queryParams)}
                    {...item}
                  />
                )}
              />
                </Grid>
              </Grid>
              
            </>
          )}
        </>
      )}
    </>
  );
};

export default Characters;
