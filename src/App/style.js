import { makeStyles } from '@material-ui/core/styles';

import backgroundImage from '../assets/images/mountainPath.jpg';

const useStyles = makeStyles((theme) => ({
  app: {
    height: '100%',
    margin: '0',
    minWidth: '600px',
    minHeight: '500px',
    textAlign: 'center',
    background: `linear-gradient(180deg, rgb(36 19 173 / 28%), rgb(255 255 255 / 0%) 55%), linear-gradient(0deg, rgb(255 141 0 / 40%), rgb(255 255 255 / 0%) 50%), url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
  body: {
    [theme.breakpoints.up('xs')]: {
      width: '85%',
    },
    [theme.breakpoints.up('md')]: {
      width: '70%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '60%',
    },
  },
  formTransition: {
    opacity: '0',
    ['-moz-transition']: 'opacity 2s linear 1.8s',
    ['-webkit-transition']: 'opacity 2s linear 1.8s',
    ['-o-transition']: 'opacity 2s linear 1.8s',
    transition: 'opacity 2s linear 1.8s',
    '&.loaded': {
      opacity: '1',
    },
  },
  headerTransition: {
    opacity: '0',
    ['-moz-transition']: 'opacity 1.5s ease-in 0.5s',
    ['-webkit-transition']: 'opacity 1.5s ease-in 0.5s',
    ['-o-transition']: 'opacity 1.5s ease-in 0.5s',
    transition: 'opacity 1.5s ease-in 0.5s',
    '&.loaded': {
      opacity: '1',
    },
  },
}));

export { useStyles };
