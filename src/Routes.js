import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux';
import asyncComponent from './AsyncComponent';
import rootReducer from './Store/rootReducer';

// Dynamically imported components
const GoalList = asyncComponent(() =>
    import('./Views/GoalList/GoalList').then(module => module.default)
);

const GoalAdd = asyncComponent(() =>
    import('./Views/GoalAdd/GoalAdd').then(module => module.default)
);

const middleware = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

class Routes extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Route exact path="/" component={GoalList} />
            <Route exact path="/goaladd/" component={GoalAdd} />
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default Routes;
