import React, { Component } from 'react';
import Pokemon from './Pokemon'

import '../css/App.css';

class Pokedex extends Component {
  render() {
    return (
      <div className="App" >
        <Pokemon />
      </div>
    );
  }
}

export default Pokedex;
