import { makeStyles } from '@mui/styles';

const useStyleCharacters = makeStyles({
  card: {
    backgroundColor: '#135040',
    minHeight:"150px",
    height: "100%", 
    border: "1px solid #2e7d32", 
    padding: "10px",
    cursor: 'pointer',
    "&:hover": {
      boxShadow: "0px 0px 8px 5px rgba(255, 240, 0, 0.2)",
      
    }
  },
  main: {
    padding: '20px 0 30px',
  },
  card_block: {
    display: "flex",
    justifyContent: "flex-start",
    "@media screen and (min-width: 900px)": {
      justifyContent: "center",
    }
  },
  card_text_name: {
    fontSize: "16px",
    "@media screen and (min-width: 650px)": {
      fontSize: "24px",
    }
  },
  card__image: {
    borderRadius: "50%",
    maxWidth: '100px',
    width: '100px',
    height: '100px',
    boxShadow: "0px 0px 4px 4px rgba(255, 240, 0, 0.2)",
    "@media screen and (min-width: 650px)": {
      borderRadius: "50%",
      maxWidth: '150px',
      width: '150px',
      height: '150px',
    }
  },
  pagination: {
    paddingTop: '20px',
    '& ul': {
      justifyContent: 'center',
    },
  },
  color_alive: {
    color: '#2e7d32',
  },
  color_dead: {
    color: '#800000',
  },
  color_unknown: {
    color: '#000000',
  }
});

export default useStyleCharacters;

