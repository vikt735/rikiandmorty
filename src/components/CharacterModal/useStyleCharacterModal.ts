import { makeStyles } from '@mui/styles';

const useStyleCharacterModal = makeStyles({
  block_image: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '35px',
  },
  card_image: {
    borderRadius: "50%",
    width: '160px',
    maxWidth: '100%',
    height: '160px',
    maxHeight: 'auto',
    boxShadow: "0px 0px 4px 4px rgba(255, 240, 0, 0.2)",
    "@media (min-width: 400px)": {
      width: '250px',
      height: '250px',
    },
    "@media (min-width: 600px)": {
      width: '200px',
      height: '200px',
    },
    "@media (min-width: 900px)": {
      width: '240px',
      height: '240px',
    },
    "@media (min-width: 1200px)": {
      width: '380px',
      height: '380px',
    }, 
  },
  episode: {
    display: 'flex', 
    flexWrap: 'wrap', 
    paddingRight: '8px',
  },
  link_icon: {
    textDecoration: 'none'
  },
  title: {
    fontSize: '2rem',
    marginBottom: '2rem',
    "@media (min-width: 600px)": {
      fontSize: '3rem',
    }, 
  }
});

export default useStyleCharacterModal;