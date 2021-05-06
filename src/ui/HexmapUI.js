
import React from 'react';
import HexMap from '../engine/hexmap';
import HextileUI from './HextileUI';

export default class HexmapUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: new HexMap(20, 16),
    }
  }
  render() {
    const tiles = this.state.map.tiles.map(t =>
      <HextileUI key={t.x + ":" + t.y} hextile={t}></HextileUI>
    );
    const mapWidthPx = this.state.map.width * 64 + 32;
    const mapHeightPx = this.state.map.height * 64;
    return (
      <div>
        map created: width = {this.state.map.width}, height = {this.state.map.height}
        <div className="hextile-container" style={{ width: mapWidthPx, height: mapHeightPx }}>
          {tiles}
        </div>
      </div>
    );

  }
}