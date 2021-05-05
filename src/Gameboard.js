
import React from 'react';
import HexMap from './engine/hexmap';

export default class Gameboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: new HexMap(60,20),
    }
  }
  render() {
    return (
      <p>map created: width = {this.state.map.width}, height = {this.state.map.height} </p>
    );

  }
}