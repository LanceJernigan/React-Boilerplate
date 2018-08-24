import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HelloWorld from '../../pages/HelloWorld';

const Routes = () => (
  <Router>
    <Switch>
      <Route component={HelloWorld} />
    </Switch>
  </Router>
);

export default Routes;