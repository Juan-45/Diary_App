import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      //dark background
      main: '#484848',
    },
    secondary: {
      //border color
      main: '#6352e2c2',
    },
    error: {
      main: '#ff1604',
    },
  },
});

theme.typography.h6 = { fontSize: '1.1rem' };

theme.overrides = {
  MuiButton: {
    outlinedSizeSmall: {
      fontWeight: '600',
    },
    containedSizeSmall: {
      fontSize: '1.1rem',
    },
  },
  MuiFilledInput: {
    root: {
      '&.Mui-focused': {
        backgroundColor: '#fff7ede3',
      },
      backgroundColor: '#fff7ede3',
    },
  },
  MuiInputBase: {
    root: {
      fontSize: '1.1rem',
    },
  },
  MuiFormLabel: {
    root: {
      fontSize: '1.1rem',
    },
  },
};

export default theme;
