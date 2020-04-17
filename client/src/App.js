import 'typeface-roboto';
import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import Calc from './views/Calc';
import Logs from './views/Logs';
import NotFoundPage from './views/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item>
          <ButtonGroup variant="contained" aria-label="contained primary button group">
            <Button component={NavLink} to="/">Calc</Button>
            <Button component={NavLink} to="/logs">Logs</Button>
          </ButtonGroup>
        </Grid>
        <Switch>
          <Route exact path="/" component={Calc} />
          <Route exact path="/logs" component={Logs} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
