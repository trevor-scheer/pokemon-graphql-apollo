import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <Link to="/pokemon">Pokemon</Link>
    <Link to="/teams">Teams</Link>
  </div>
);

export default Home;
