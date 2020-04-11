import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const renderRouters = (routes) =>
routes ? (
  <Router>
<Switch>{routes.map((route, i) => (<Route   
  key={route.key || i}  
  path={route.path}
  exact={route.exact}
  strict={route.strict} 
  render={
    props => (
      <route.component {...props} route={route} />
    )
  }>
  </Route>))}</Switch>
  </Router>
) : null;

export default renderRouters;