import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Actions from '../../actions/app';

import noop from '../../utils/noop';

import HelloWorld from '../../pages/HelloWorld';

class Routes extends React.Component {
  componentDidMount() {
    const {
      loadApp = noop,
      loaded = false,
    } = this.props;

    if (! loaded)
      loadApp();
  }
  
  render() {
    const {
      loaded = false,
    } = this.props;

    return (
      <Router>
        <Switch>
          <Route component={HelloWorld} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = ({ app }) => ({
  loaded: app.loaded || false,
});

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Routes);