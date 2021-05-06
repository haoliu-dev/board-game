
import React from 'react';
import HextileUI from './HextileUI';

export default class HexmapUI extends React.Component {
  constructor(props) {
    super(props);
    if (!props.map) {
      console.error('props.map is required');
    }
    // calculate map size
    this.mapWidthPx = this.props.map.width * 64 + 32;
    this.mapHeightPx = this.props.map.height * 64;

  }

  render() {
    const tiles = this.props.map.tiles.map(t =>
      <HextileUI key={t.x + ":" + t.y} hextile={t} onClick={this.props.onTileClick}></HextileUI>
    );
    return (
      <div>
        {this.props.map.width}x{this.props.map.height}
        <div className="hextile-container" style={{ width: this.mapWidthPx, height: this.mapHeightPx }}>
          {tiles}
        </div>
      </div>
    );

  }
}