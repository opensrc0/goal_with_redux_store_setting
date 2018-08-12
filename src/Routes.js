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

const GoalUpdate = asyncComponent(() =>
    import('./Views/GoalUpdate/GoalUpdate').then(module => module.default)
);

const GoalDelete = asyncComponent(() =>
    import('./Views/GoalDelete/GoalDelete').then(module => module.default)
);

class Routes extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={GoalList} />
          <Route exact path="/goaladd/" component={GoalAdd} />
          <Route exact path="/goalupdate/:id" component={GoalUpdate} />
          <Route exact path="/goaldelete/:id" component={GoalDelete} />
        </React.Fragment>
      </Router>
    );
  }
}

export default Routes;
