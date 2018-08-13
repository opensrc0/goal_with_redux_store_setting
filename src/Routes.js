import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import asyncComponent from './AsyncComponent';
// Dynamically imported components
const GoalList = asyncComponent(() =>
    import('./Views/GoalList/GoalList').then(module => module.default)
);

const GoalAdd = asyncComponent(() =>
    import('./Views/GoalAdd/GoalAdd').then(module => module.default)
);

class Routes extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={GoalList} />
          <Route exact path="/goaladd/" component={GoalAdd} />
        </React.Fragment>
      </Router>
    );
  }
}

export default Routes;
