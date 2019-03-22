import React, { Component } from 'react'

const colors = {
  bug: "#A0B21F",
  dark: "#6C4B3C",
  dragon: "#6B5CEB",
  electric: "#FFC52D",
  fairy: "#FFA0EB",
  fighting: "#B14A3C",
  fire: "#FF3B1E",
  flying: "#5B8FFF",
  ghost: "#5B5BB1",
  grass: "#6CC54A",
  ground: "#D8B14A",
  ice: "#6BD8FF",
  normal: "#B1B1A0",
  poison: "#A04A8E",
  psychic: "#FF4A8E",
  rock: "#AFA05B",
  steel: "#3CA0B1",
  unknown: "#039685",
  water: "#2C8FFF",
}


export default class Card extends Component {
  render() {
    const { info, name } = this.props;
    const type1 = info.types.find(obj => obj.slot === 1).type
    const primaryTypeBorder = {
      border: `2px solid ${colors[type1.name]}`,
    }

    return (
      <div className='cardContent' style={primaryTypeBorder} >
        <div className='cardHeader'>
          <div className='footprint' >
            <img src={`assets/footprints/${info.id}.png`} alt='' />
          </div>
          <div className="region">
            <strong>{name.toUpperCase()}</strong>
          </div>
          <div className='pokeID'>
            <strong># {info.id}</strong>
          </div>
        </div>
        <div className='sprite'>
          <img src={info.sprites.front_default} alt={name} />
        </div>
        <div className='stats'>
          {
            info.flavor_text_entries.find(entry => entry.language.name === 'en').flavor_text
          }
        </div>
        <div className='cardFooter'>
          {
            info.types.map(({ type }) => {
              return <img src={`assets/types/small/s_${type.name}_en.png`} alt='' />
            })
          }
        </div>
      </div>
    )
  }
}
