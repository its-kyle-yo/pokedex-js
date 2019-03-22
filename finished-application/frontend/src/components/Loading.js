import React, { Component } from 'react'
import loading from '../assets/loading_spinners/puff.svg'
export default class Loading extends Component {
  render() {
    return (
      <img src={loading} alt='loading' className='loading' />
    )
  }
}
