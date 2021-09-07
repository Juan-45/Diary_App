import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React from 'react';

import { useStyles } from './style';

const Header = ({ className }, ref) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      alignItems="flex-start"
      className={clsx(classes.header, className)}
      ref={ref}
    >
      <Typography align="left" variant="h5" className={classes.headerText} color="primary">
        Para una aliada de nuestra escuela de Kung Fu Wu Shu Xin Fei.
      </Typography>
      <Typography align="left" variant="h6" className={classes.headerText} color="primary">
        Hay solo dos grandes equivocaciones que se pueden cometer en el camino para lograr la
        maestria de uno mismo, no comenzar y no ir todo el camino.
      </Typography>
    </Grid>
  );
};

export default React.forwardRef(Header);
