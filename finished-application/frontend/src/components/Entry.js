import React, { Component } from 'react';

import Loading from './Loading';
import Card from './Card';

import { getResource } from '../helpers/api';


class Entry extends Component {
  state = {
    info: undefined,
    isLoading: true,
  }

  componentDidMount() {
    const { info } = this.state;
    if (!info) {
      this.fetchResource();
    }
  }

  async fetchResource() {
    const { resourceUrl } = this.props;
    const baseData = await getResource(resourceUrl);
    const speciesData = await getResource(baseData.species.url);
    const info = Object.assign({}, baseData, speciesData);

    this.setState({ info, isLoading: false });
  }

  render() {
    const { name } = this.props;
    const { info, isLoading } = this.state;
    return (
      <li className='entry'>
        {
          isLoading ?
            <Loading /> :
            <Card info={info} name={name} />
        }
      </li >
    )
  }
}

export default Entry