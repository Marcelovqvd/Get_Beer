import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Beer from './pages/Beer';
import ForBrewers from './pages/ForBrewers';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/beers/:id" component={Beer} />
        <Route path="/forbrewers/:id" component={ForBrewers} />
        <Route path="/beers/random" />
      </Switch>
    </BrowserRouter>
  );
}
