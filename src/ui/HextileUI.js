import React from 'react';

const TILE_WIDTH_PX = 64;
const TILE_HEIGHT_PX = 64;
export default class HextileUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hextile: props.hextile,
    }
  }
  render() {
    const hextile = this.state.hextile;
    const top = TILE_WIDTH_PX * hextile.x;
    const left = TILE_HEIGHT_PX * hextile.y + ((hextile.x % 2 === 0) ? 0 : TILE_WIDTH_PX / 2);
    return (
      <div className="hextile" style={{ left: left + "px", top: top + "px" }}>

      </div>
    );

  }
}