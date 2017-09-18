import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './home/home';
import PokemonContainer from './pokemon/pokemon_container';
import TeamsContainer from './teams/teams_container';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/pokemon" component={PokemonContainer} />
    <Route path="/teams" component={TeamsContainer} />
  </Switch>
);

export default Routes;
