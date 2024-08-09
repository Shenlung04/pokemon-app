import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="container">
    <h2>Welcome to the Pokémon App!</h2>
    <Link to="/pokemon" className="button">Go to Pokémon List</Link>
  </div>
);

export default Home;
