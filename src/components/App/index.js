import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Routes from './routes';
import { style as AppStyle } from './style';

const App = () => (
    <Provider store={store}>
        <div className={AppStyle}>
          <Routes />
        </div>
    </Provider>
);

export default App;