import Grid from '@material-ui/core/Grid';
import { ThemeProvider } from '@material-ui/core/styles';
import { useRef, useEffect } from 'react';

import Header from '../components/Header';
import Form from '../containers/Form';
import theme from '../theme';
import { useStyles } from './style';

const App = () => {
  const classes = useStyles();
  let formRef = useRef();
  let headerRef = useRef();

  useEffect(() => {
    formRef.current.className += ' loaded';
    headerRef.current.className += ' loaded';
  }, []);

  return (
    <div className={classes.app}>
      <ThemeProvider theme={theme}>
        <Grid container justifyContent="center">
          <Grid container direction="column" className={classes.body}>
            <Header className={classes.headerTransition} ref={headerRef} />
            <Form className={classes.formTransition} ref={formRef} />
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default App;
