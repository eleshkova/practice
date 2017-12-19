import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Slider from './components/Slider';
import Attraction from './components/Attraction';

const Routes = () => (
  <Switch>
    <Route exact path="/attraction/:id/slider" component={Slider} />
    <Route exact path="/attraction/:id" component={Attraction} />
   </Switch>
);

export default Routes;