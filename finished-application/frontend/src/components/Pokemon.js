import React, { Component } from 'react';

import Entry from './Entry'
import { getListOfPokemon } from '../helpers/api';


class Pokemon extends Component {
  state = {
    pokemon: [],
    fetching: false,
    next: '',
  }

  componentDidMount() {
    const { fetching, pokemon } = this.state;
    if (!fetching && pokemon.length === 0) {
      this.fetchPokemon();
    }
  }

  fetchPokemon = async (nextSet) => {
    // Grab the results item off of our object. 
    this.setState({ fetching: true })
    const { results, next } = await getListOfPokemon(nextSet);
    // Use slice to duplicate our array into a new place in memory
    // Add onto the list of current pokemon even if there arent any
    const pokemon = this.state.pokemon.slice(0).concat(results);
    // Set our state to our new list of pokemon
    this.setState({ pokemon, next, fetching: false });
  }

  handleScroll = (event) => {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
      const { fetching, next } = this.state;
      if (!fetching && !!next) {
        this.fetchPokemon(next)
      }
    }
  }

  render() {
    return (
      <ul onWheel={this.handleScroll}>
        {
          this.state.pokemon.map(pokemon => <Entry name={pokemon.name} key={pokemon.name} resourceUrl={pokemon.url} />)
        }
      </ul>
    )
  }
}

export default Pokemon