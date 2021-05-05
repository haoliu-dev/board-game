
import React from 'react';
import HexMap from '../engine/hexmap';
import HextileUI from './HextileUI';

export default class Gameboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: new HexMap(10, 4),
    }
  }
  render() {
    const tiles = this.state.map.tiles.map(t =>
      <HextileUI key={t.x + ":" + t.y} hextile={t}></HextileUI>
    );
    return (
      <div>
        map created: width = {this.state.map.width}, height = {this.state.map.height}
        <div className="hextile-container">
          {tiles}
        </div>
      </div>
    );

  }
}