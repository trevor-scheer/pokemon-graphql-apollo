import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { gql, graphql } from 'react-apollo';

import Routes from './routes';
import './app.scss';

const App = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default App;
