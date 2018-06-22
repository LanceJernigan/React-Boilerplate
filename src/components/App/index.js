import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './store';
import HelloWorld from '../../pages/HelloWorld';
import { style as AppStyle } from './style';

const App = () => (
    <Provider store={store}>
        <Router>
          <div className={AppStyle}>
            <Switch>
              <Route component={HelloWorld} />
            </Switch>
          </div>
        </Router>
    </Provider>
)

export default App;