import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function NotFoundPage() {
  return (
    <Grid item>
      <Typography component="p">
        Looks like you got lost
      </Typography>
      <Link to="/">Go Home</Link>
    </Grid>
  );
}


export default NotFoundPage;
