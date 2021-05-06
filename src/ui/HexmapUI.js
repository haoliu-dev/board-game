
import React from 'react';
import Terrain from '../engine/Terrain';
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

    if (props.mode === 'edit') {
      this.setEditMode();
    }
  }

  setEditMode() {
    // on Hextile clicked:
    // if a brush is selected, replce the tile terrain or add overlay
    // it requires the Hextile component to be passed in so we can force update the component
    this.onTileClick = (component, hextile) => {
      if (this.props.brush) {
        hextile.terrain = new Terrain(this.props.brush);
        component.forceUpdate();
        console.log(hextile);
      }
    }

  }

  render() {
    const tiles = this.props.map.tiles.map(t =>
      <HextileUI key={t.x + ":" + t.y} hextile={t} onClick={this.onTileClick}></HextileUI>
    );
    return (
      <div>
        {this.props.map.width}x{this.props.map.height}
        | brush: {this.props.brush}
        <div className="hextile-container" style={{ width: this.mapWidthPx, height: this.mapHeightPx }}>
          {tiles}
        </div>
      </div>
    );

  }
}