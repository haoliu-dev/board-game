import React from 'react';

const TILE_WIDTH_PX = 64;
const TILE_HEIGHT_PX = 64;
export default class HextileUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.hextile;
  }


  render() {
    const hextile = this.state;
    const top = TILE_WIDTH_PX * hextile.x;
    const left = TILE_HEIGHT_PX * hextile.y + ((hextile.x % 2 === 0) ? 0 : TILE_WIDTH_PX / 2);
    const firstColClassName = (hextile.y === 0 && hextile.x %2 === 0) ? 'first-col' : '';
    return (
      <div className={`hextile ${firstColClassName} terrain-${hextile.terrain.name}`} style={{ left: left + "px", top: top + "px" }} onClick={this.updateElevation}>

      </div>
    );

  }

  // event handlers
  updateElevation = () => {
    alert(`you clicked a tile of ${this.state.terrain.name}`);
  }
}