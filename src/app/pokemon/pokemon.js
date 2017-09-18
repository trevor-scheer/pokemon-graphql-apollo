import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Pokemon extends React.Component {
  state = {
    searchInput: ''
  };

  handleInputChange = e => this.setState({ searchInput: e.target.value });

  handleSearchClick = () => this.props.onRefetch(this.state.searchInput);

  render() {
    const { onRefetch, pokemon, loading } = this.props;

    return (
      <div>
        <Link to="/">Home</Link>
        Pokemon Component
        <div>
          <label>Search</label>
          <input type="text" onChange={this.handleInputChange} />
          <button onClick={this.handleSearchClick}>Search</button>
        </div>
        {!loading && <img style={{ display: 'block' }} src={pokemon.image} />}
        Evolutions
        {!loading &&
          pokemon.evolutions != null &&
          pokemon.evolutions.map(evolution => (
            <div key={evolution.id}>
              <button onClick={() => onRefetch(evolution.name)}>
                {evolution.name}
              </button>
            </div>
          ))}
      </div>
    );
  }
}

export default Pokemon;
