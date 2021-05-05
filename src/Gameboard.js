
import React from 'react';
import HexMap from './engine/hexmap';

export default class Gameboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: new HexMap(10, 4),
    }
  }
  render() {
    const tiles = this.state.map.tiles.map(t =>
      <span>({t.x},{t.y})</span>
    );
    return (
      <div>
        map created: width = {this.state.map.width}, height = {this.state.map.height}
        <p>
          {tiles}
        </p>
      </div>
    );

  }
}